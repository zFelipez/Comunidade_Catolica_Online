import Link from "next/link"


type HomeButtonProps={
    children : React.ReactNode
    href: string
}


export  default function HomeButton ({children,href}: HomeButtonProps){

    return (
         <Link href={href} className="w-35 h-12 mt-8 border border-solid border-white rounded-2xl text-white  
         
         flex items-center justify-center text-xl
         hover:shadow-[0_0_10px_#ffffff]
         hover:scale-[1.010] 
         transition:all duration-200
         "> {children}</Link>
      )
}