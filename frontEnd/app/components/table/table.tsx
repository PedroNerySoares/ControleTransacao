import {  ComponentProps } from "react"; 
import { twMerge } from "tailwind-merge";

interface tableProps extends ComponentProps<'table'>{}

export default function Table(props: tableProps) {
  return (
    <table  {...props} className={twMerge(" md:table w-full border-collapse mt-6",props.className)}></table>
  )
}
 