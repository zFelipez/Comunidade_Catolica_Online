import { Subtitle } from "@/app/components/subtitle";


export default function (){


    return ( 

        <div className="  w-full flex flex-col justify-center items-center"> 
        

      <form  className="w-3/5 " action="">


       <div className=" flex flex-col  h-96 justify-center  
         ">
       <Subtitle> Colocar Intenções: </Subtitle>
 
        <textarea className= "  border-amber-300 border-2 h-12  bg-white resize-none focus:outline-none pl-8 pt-2"
        
        
        name=""
        id=""
        placeholder="Digite seu nome"
        >
             
        </textarea>
        
         <textarea  className="border-amber-300 border-2 border-t-0  h-auto bg-white resize-none flex-1 overflow-y-auto pl-8 pt-2 pr-8 focus:outline-none
         
         " 
        name="" 
        id=""
        placeholder="Digite suas intenções" 
         >
 
         </textarea>

        <button className="bg-blue-900 mt-2 h-12 text-white rounded-2xl hover:scale-[1.010]  hover:cursor-pointer hover:text-amber-300 hover:shadow-[0_0_10px_yellow] transition-all duration-200
         flex items-center justify-center border">  Enviar intenções </button>
          
 
        </div>




      </form>

      <div className="mt-8 w-3/5">

     <Subtitle> Intenções Publicas</Subtitle>

     <div className="  h-auto bg-transparent flex flex-col gap-2 ">

     <div className=" h-18 bg-blue-900 rounded-xl flex flex-col gap-1  justify-center border border-amber-50">
     
       
      <p className=" pl-4 text-white"> Nome : Felipe da Silva Lima </p>
      <p className="pl-4 text-white">Intenção : Por Liberina Ferreira </p>
     </div>
     


     </div>
      </div>
      
        
        


        </div>
    )
}