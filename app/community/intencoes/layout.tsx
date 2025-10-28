import Header from "@/app/components/header";
import PageTitle from "@/app/components/pageTitle";
import { EB_Garamond } from "next/font/google";



 


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
      
      
      <div className="bg-red-500 min-h-screen ">
       
         <PageTitle>Intenções</PageTitle>
        {children}
      </div>
    </>

  );
}