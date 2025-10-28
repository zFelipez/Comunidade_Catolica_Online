 
import Link from "next/link";


type HeaderLinksProps = {

    children : React.ReactNode,
    route:string 
     


}

export default function HeaderLinks({children, route, }: HeaderLinksProps){


    return (

        <Link href={route} className={`  h-10 px-2 flex items-center justify-center 
            p-8 transition-all duration-200   text-amber-200 hover:text-white
         text-xl
         "`}> {children} </Link>

    )
}