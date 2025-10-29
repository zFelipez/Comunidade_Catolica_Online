import React from "react";
import { Subtitle } from "./subtitle";
import Image from "next/image";


export default function HomeSection({subtitle, image}: Readonly<{
  subtitle: React.ReactNode,
  image: string;

}>)
{

    return (

        <div className="  p-4 pt-16 pl-16 ">
         

        <div className=" flex items-center  ">
          <div className="w-5/10">
             <Subtitle > {subtitle}  </Subtitle> 

          <p className= " text-white p-16 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam asperiores recusandae id iste? Autem beatae molestiae consequuntur error sint? Vel autem itaque quis! Quasi in vero harum quibusdam ratione voluptatum soluta ipsa omnis quod doloribus! Provident ipsam labore ex quo debitis veritatis alias officia nostrum dicta corporis repudiandae, suscipit reprehenderit aperiam quas libero dolorem quae ea similique fuga quia consequatur fugiat ducimus. Dolorum deleniti illum similique a maiores velit quis atque laudantium voluptatum eveniet aspernatur consectetur blanditiis, odit, temporibus dicta fuga nisi officiis sequi cupiditate eius iure id quibusdam ex? Dolores nesciunt distinctio animi et vel. Fugiat, asperiores quibusdam!</p>
 pt-16
          </div>
        <div>

          
        </div>
         <div className="  bg-white rounded-xl h-100  w-3/10 relative overflow-hidden border border-amber-200 z-0 ml-16">

         <Image src={image} alt=""  fill className="object-fill "></Image>

         </div>
        </div>

        
        
         
      </div>
    )
}