import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<'td'>{}

export default function TableCell(props:TableCellProps) {
  return (
       <td className={twMerge(" px-2 py-1 text-center",props.className) }  {...props}></td>
  )
}