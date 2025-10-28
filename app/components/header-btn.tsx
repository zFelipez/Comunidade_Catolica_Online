import Link from "next/link";
import React from "react";


type HeaderButtonProps={
    href: string,
    btnName: string,
}

export default function HeaderButton({href, btnName}: HeaderButtonProps){
    return (

        <Link href={href} className=" bg-amber-950   rounded-md h-fit p-2 mt-1
                 hover:bg-amber-900 text-amber-200 transition-all duration-150 outline outline-amber-200
                 "> {btnName} </Link>
    )
}