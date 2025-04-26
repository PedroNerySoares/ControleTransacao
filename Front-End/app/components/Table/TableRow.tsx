import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<'tr'> {
  index: number;
}

export default function TableRow({ index, ...rest }: TableRowProps) {
  return (
    <tr
      {...rest}
      key={index} 
      className={`border px-2 py-1 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"} ${rest.className || ""}`}
    ></tr>
  );
}
