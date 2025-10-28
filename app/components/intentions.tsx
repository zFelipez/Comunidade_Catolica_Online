"use client"

import IntentionComments from "./intention-comments"

 

type IntentionsProps ={

    name: string, 
    intention: string
}


export default function Intentions({name, intention}: IntentionsProps){



   

  return(

   

     <div className=" p-3 bg-blue-900 rounded-xl flex flex-col gap-1  justify-center border border-amber-50">
     
       
      <p className=" pl-2 text-white"> Nome : Felipe da Silva Lima </p>
       <p className=" pl-2 text-white">Data da postagem:</p>
      <p className="pl-2 text-white">Intenção : Por Liberina Ferreira </p>
     

      
     <IntentionComments></IntentionComments>
     
      
  
     


     </div>
  )

}