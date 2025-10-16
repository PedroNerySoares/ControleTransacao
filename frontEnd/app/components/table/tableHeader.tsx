import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableHeaderProps extends ComponentProps<'th'>{}

export default function TableHeader(props:TableHeaderProps) {
  return (
    <th className={twMerge("border px-2 py-2",props.className)} {...props}></th>
    
 
  )
}