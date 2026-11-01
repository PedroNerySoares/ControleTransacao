"use client";

import { useId, useMemo, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";

import { cn } from "@/app/lib/utils";

export type SearchableSelectOption = {
  value: string;
  label: string;
};

type SearchableSelectProps = {
  id?: string;
  options: SearchableSelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
};

function normalizarBusca(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

export function SearchableSelect({
  id,
  options,
  value,
  onValueChange,
  placeholder = "Selecione uma opção",
  searchPlaceholder = "Pesquisar...",
  emptyMessage = "Nenhuma opção encontrada.",
  disabled = false,
  className,
}: SearchableSelectProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listboxId = `${inputId}-options`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = options.find((option) => option.value === value);
  const filteredOptions = useMemo(() => {
    const search = normalizarBusca(query.trim());
    if (!search) return options;
    return options.filter((option) =>
      normalizarBusca(option.label).includes(search),
    );
  }, [options, query]);

  function selecionar(option: SearchableSelectOption) {
    onValueChange(option.value);
    setQuery("");
    setOpen(false);
  }

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <input
          aria-activedescendant={
            open && filteredOptions[activeIndex]
              ? `${listboxId}-${activeIndex}`
              : undefined
          }
          aria-autocomplete="list"
          aria-controls={open ? listboxId : undefined}
          aria-expanded={open}
          aria-haspopup="listbox"
          autoComplete="off"
          className="flex h-9 w-full rounded-md border border-input bg-card py-1 pl-9 pr-9 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          disabled={disabled}
          id={inputId}
          onBlur={(event) => {
            if (!event.currentTarget.parentElement?.parentElement?.contains(
              event.relatedTarget as Node | null,
            )) {
              setOpen(false);
              setQuery("");
            }
          }}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
            setOpen(true);
          }}
          onFocus={() => {
            setOpen(true);
            setQuery("");
            setActiveIndex(0);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              setQuery("");
              return;
            }
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
              setActiveIndex((index) =>
                filteredOptions.length
                  ? (index + 1) % filteredOptions.length
                  : 0,
              );
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setOpen(true);
              setActiveIndex((index) =>
                filteredOptions.length
                  ? (index - 1 + filteredOptions.length) %
                    filteredOptions.length
                  : 0,
              );
            }
            if (
              event.key === "Enter" &&
              open &&
              filteredOptions[activeIndex]
            ) {
              event.preventDefault();
              selecionar(filteredOptions[activeIndex]);
            }
          }}
          placeholder={open ? searchPlaceholder : placeholder}
          role="combobox"
          value={open ? query : selected?.label ?? ""}
        />
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </div>

      {open && (
        <div
          className="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
          id={listboxId}
          role="listbox"
        >
          {filteredOptions.length ? (
            filteredOptions.map((option, index) => (
              <div
                aria-selected={option.value === value}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-2 rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                  index === activeIndex && "bg-accent text-accent-foreground",
                )}
                id={`${listboxId}-${index}`}
                key={option.value}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selecionar(option)}
                role="option"
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <Check aria-hidden="true" className="size-4 shrink-0" />
                )}
              </div>
            ))
          ) : (
            <p className="px-2 py-2 text-sm text-muted-foreground">
              {emptyMessage}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
