
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip";

interface PropsButton {
    title: string;
    icon: LucideIcon;
    href: string;
    active?: boolean;
    collapsed?: boolean;
    onNavigate?: () => void;
}

export default function ButtonAside({
    title,
    icon: Icon,
    href,
    active = false,
    collapsed = false,
    onNavigate,
}: PropsButton) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={href}
                    aria-label={collapsed ? title : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={onNavigate}
                    className={[
                        "flex w-full items-center rounded-lg py-3 text-sm font-medium transition-colors",
                        collapsed ? "justify-center px-3" : "justify-start gap-3 px-3",
                        active
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    ].join(" ")}
                >
                    <Icon className="size-5 shrink-0" />
                    {!collapsed && <span>{title}</span>}
                </Link>
            </TooltipTrigger>
            {collapsed && (
                <TooltipContent side="right">
                    {title}
                </TooltipContent>
            )}
        </Tooltip>
    );
}
