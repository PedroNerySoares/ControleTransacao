import { ComponentProps, ReactNode } from "react";

interface TableRowProps extends ComponentProps<"tr"> {
  index: number;
  children: ReactNode;
}

export default function TableRow({ index, children, className = "", ...rest }: TableRowProps) {
  const rowClass = `border px-2 py-1 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"} ${className}`;

  return (
    <tr className={rowClass} {...rest}>
      {children}
    </tr>
  );
}
