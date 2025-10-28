import React from "react";
import { Subtitle } from "./subtitle";


export default function HomeSection({subtitle}: Readonly<{
  subtitle: React.ReactNode;
}>)
{

    return (

        <div className="  pt-8 pl-16 pr-16">
         <Subtitle > {subtitle}  </Subtitle> 

        <div className=" flex ">

          <p className= " text-white w-5/10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam asperiores recusandae id iste? Autem beatae molestiae consequuntur error sint? Vel autem itaque quis! Quasi in vero harum quibusdam ratione voluptatum soluta ipsa omnis quod doloribus! Provident ipsam labore ex quo debitis veritatis alias officia nostrum dicta corporis repudiandae, suscipit reprehenderit aperiam quas libero dolorem quae ea similique fuga quia consequatur fugiat ducimus. Dolorum deleniti illum similique a maiores velit quis atque laudantium voluptatum eveniet aspernatur consectetur blanditiis, odit, temporibus dicta fuga nisi officiis sequi cupiditate eius iure id quibusdam ex? Dolores nesciunt distinctio animi et vel. Fugiat, asperiores quibusdam!</p>

         <div className=" bg-white rounded-xl h-60  w-4/10">

         </div>
        </div>

        
        
         
      </div>
    )
}