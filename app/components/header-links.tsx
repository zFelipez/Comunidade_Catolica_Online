import Link from "next/link";


type HeaderLinksProps = {

    children : React.ReactNode,
    route:string ,
    textColor:string
}

export default function HeaderLinks({children, route,textColor}: HeaderLinksProps){


    return (

        <Link href={route} className={`${textColor} w-fit h-10 px-2 flex items-center justify-center rounded-lg
         border-solid border border-transparent hover:border-white hover:text-white transition-all duration-200c   
         text-xl
         "`}> {children} </Link>

    )
}