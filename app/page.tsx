
import Image from "next/image";
import HomeButton from "./components/home-button";

export default function Home() {
  return (
    <div className="bg-black  min-h-screen min-w-screen flex ">
     
    <div className="ml-8 w-6/10 min-h-fit rounded-2xl flex items-center justify-center">

      <div className="  h-100 bg-transparent rounded-2xl flex flex-col justify-center p-8 mt-16">

     <h1 className="font-garamond font-bold text-6xl wrap-break-words text-amber-200 text-stroke-black"> Comunidade Catolica Online </h1>

    <p className="mt-8 text-2xl break-normal text-white whitespace-normal text-ce"> Ola, seja bem-vindo(a) a Comunidade Católica Online, entre em sua conta ou crie um agora para aproveitar ao
      maximo de nossa comunidade.
    </p>

    <div className=" flex  gap-8" >
     <HomeButton href="/conta/entrar"> Entrar</HomeButton>
     <HomeButton href="/conta/criar"> Criar Conta </HomeButton>
    </div>

     </div>


   
    </div>
     


     <div className=" h-screen flex items-center justify-center  ">

   
   <div className="  mt-25 flex items-center justify-center">

       <Image src='/church.png' alt={""} width={300} height={400} className="  ml-16 rounded-4xl" ></Image>
   </div>
 



  
     </div>
         
    </div>
  );
}
