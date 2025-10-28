
import Image from "next/image";
import HomeButton from "./components/home-button";
import { Subtitle } from "./components/subtitle";
import HomeSection from "./components/home-section";

export default function Home() {
  return (
    <div className="bg-black  min-h-screen max-w-screen flex flex-col ">
     <div className=" flex ">
    <div className="ml-8 w-6/10 min-h-fit rounded-2xl flex items-center justify-center">

      <div className="  h-100 bg-transparent rounded-2xl flex flex-col justify-center p-8 mt-16">

     <h1 className="font-garamond font-bold text-6xl wrap-break-words text-amber-200 text-stroke-black"> Comunidade Catolica Online </h1>

    <p className="mt-8 text-2xl break-normal text-white whitespace-normal text-ce"> Ola, seja bem-vindo(a) a Comunidade Católica Online, entre em sua conta ou crie um agora para aproveitar ao
      maximo de nossa comunidade.
    </p>

    <div className=" flex  gap-8" >
     <HomeButton href="/community/account/login"> Entrar</HomeButton>
     <HomeButton href="/community/account/signup"> Criar Conta </HomeButton>
    </div>

     </div>


   
    </div>
     


     <div className=" h-screen flex items-center justify-center  ">

   
   <div className="  mt-25 flex items-center justify-center">

       <Image src='/church.png' alt={""} width={300} height={400} className="  ml-16 rounded-4xl border border-amber-200" ></Image>
   </div>
  </div>



  
     </div>
         

         
         
      <div className="  pl-16 pr-16">
         <Subtitle > Sobre a Comunidade  </Subtitle> 

      
          <p className= " text-white "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam asperiores recusandae id iste? Autem beatae molestiae consequuntur error sint? Vel autem itaque quis! Quasi in vero harum quibusdam ratione voluptatum soluta ipsa omnis quod doloribus! Provident ipsam labore ex quo debitis veritatis alias officia nostrum dicta corporis repudiandae, suscipit reprehenderit aperiam quas libero dolorem quae ea similique fuga quia consequatur fugiat ducimus. Dolorum deleniti illum similique a maiores velit quis atque laudantium voluptatum eveniet aspernatur consectetur blanditiis, odit, temporibus dicta fuga nisi officiis sequi cupiditate eius iure id quibusdam ex? Dolores nesciunt distinctio animi et vel. Fugiat, asperiores quibusdam!</p>
 
         
      </div>

     <HomeSection subtitle ={ 'Sobre pagina de Intenção '}></HomeSection>
     <HomeSection subtitle ={ 'Sobre pagina de Chat Online'} ></HomeSection>
         
      
    </div>
  );
}
