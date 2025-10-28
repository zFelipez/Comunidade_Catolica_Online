"use client";
import { useEffect, useState } from "react";
import HeaderLinks from "./header-links";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeaderButton from "./header-btn";
 



export default function Header(){

    const pathname= usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState('h-18');

     

    useEffect(()=>{
     
        if(pathname ==='/community/account/login')  {
            
            setMenuOpen(false)
             
        }
     
    },[pathname]);
   
    
   function handleOpenMenu(){
     if(!menuOpen){
        setMenuOpen(true); 

     }
      if(menuOpen){
        setMenuOpen(false); 

     }
   };



    return (
  

        <div className=  {`w-full h-fit ${menuOpen ? 'h-fit' : 'max-h-18'} p-2 bg-amber-950/70 backdrop-blur-2xl top-0 flex items-center justify-center  flex-col transition-h
        duration-400 ease fixed rounded-b-2xl hover:outline-amber-200  outline `}>

        
        
         <div className="flex justify-center items-center space-x-7 w-full  "> 
          
            <div className=" flex-1  pl-8  flex gap-3 items-center ">
                <button onClick= {handleOpenMenu }className=" bg-black p-2 h-fit mt-1 rounded-md text-amber-200 border hover:bg-gray-950 hover:cursor-pointer "> Menu </button>
                 <HeaderButton href="/" btnName="Seu Perfil"></HeaderButton>
                 <p className=" text-amber-200"> Salve Maria Felipe! </p>
                
            </div> 


            <div className=" flex pr-8 items-center justify-center gap-4 ">
                <div className=" flex flex-col ">
                    <p className=" text-amber-200"> Dia : 22/12/2025 seunda-feira </p>
                    <p className=" text-amber-200"> Hoje é um dia dedicado as almas do purgatorio </p>
                </div>
                 
                 <HeaderButton href="/" btnName="Oração do dia"></HeaderButton>
             
            </div>
           
        </div>
            
        { menuOpen &&  <div className=" flex flex-col  justify-center w-10/10 ">
            <HeaderLinks route="/"> Home</HeaderLinks>
            <HeaderLinks route="/community/intencoes"  > Intenções</HeaderLinks>
            <HeaderLinks route="/community/chat"  > Chat Online</HeaderLinks>
            <HeaderLinks route="/community/oracoes" > Orações </HeaderLinks>
            <HeaderLinks route="/account/user"> Sua Conta </HeaderLinks>
         </div>
         }
       
         
         
        </div>
    )
}