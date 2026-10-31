
import * as React from "react";
import { cn } from "@/app/lib/utils";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const baseClasses =
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2";

const variants: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-sidebar-primary text-sidebar-primary-foreground shadow hover:bg-sidebar-primary/80",

  secondary:
    "border-transparent bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80",

  destructive:
    "border-transparent bg-red-600 text-white shadow hover:bg-red-700",

  outline:
    "border-border text-foreground",
};

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    />
  );
}

export { Badge };
