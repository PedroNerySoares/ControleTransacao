import { ComponentProps } from "react"

interface TableHeadProps extends ComponentProps<'thead'>{}
export default function TableHead(props:TableHeadProps){
return(
   <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" {...props}>
    
   </thead>
 
)  
}
