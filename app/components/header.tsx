"use client";
import { useEffect, useState } from "react";
import HeaderLinks from "./header-links";
import { usePathname } from "next/navigation";
 



export default function Header(){

    const pathname= usePathname();

 

    const [txtColor, setTxtColor] = useState('text-amber-200')
    

    useEffect(()=>{

     
    },[pathname])
   
    
    return (
  

        <div className={ "  w-full h-18 bg-white/0.5 backdrop-blur-md fixed top-0 flex items-center justify-center gap-16"}>


         
         <HeaderLinks route="/community/intencoes" textColor= {txtColor}> Intenções</HeaderLinks>
         <HeaderLinks route="/community/chat" textColor= {txtColor}> Chat Online</HeaderLinks>
         <HeaderLinks route="/community/oracoes" textColor= {txtColor}> Orações </HeaderLinks>

        </div>
    )
}