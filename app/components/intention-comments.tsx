'use client';
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

 


export default function IntentionComments(){



    const [commentsSectionHeight, setCommentsSectionHeight] = useState('h-0')
    const [commentsOpen, setCommentsOpen] =  useState(false)

    const [commenting, setCommenting]= useState(false)

    function handleIntentionShowComments(e: React.MouseEvent<HTMLButtonElement>){
        if(!commentsOpen){
            setCommentsSectionHeight('h-fit'); 
            setCommentsOpen(true); 
        } else{
             setCommentsSectionHeight('h-0'); 
            setCommentsOpen(false); 
        }
    }


    function handleComment(){
          if( !commenting){
            setCommenting(true)
          }

    }
    function handleCommentCancel(){
          if( commenting){
            setCommenting(false)
          }

    }


    return(

        <div>
            <div className=" flex justify-end text-amber-200 gap-2 pt-2" >
                {commenting && <textarea  className='bg-white min-h-32 flex-2 rounded-md focus:outline-none text-black p-2' name="" id=""></textarea>}

                { commenting && <button onClick={handleCommentCancel} className="border w-fit h-fit p-1  hover:bg-red-500 
                 hover:cursor-pointer transition-all duration-200"> Cancelar </button>}

                <button onClick= {handleComment} className="border w-fit h-fit p-1  hover:bg-blue-700 
                 hover:cursor-pointer transition-all duration-200"> Comentar </button>
             </div>
           <div className=' flex flex-col justify-center '>

            <button className='hover:cursor-pointer hover:bg-blue-800  mt-2 p-1 w-12/12 text-center rounded-md flex justify-center transition-all duration-200 '  onClick={ (e)=> handleIntentionShowComments(e)}>
                { !commentsOpen && <FaAngleDown color='white '></FaAngleDown>}
                 { commentsOpen && <FaAngleUp color='white '></FaAngleUp>}
            </button> 

            <div className={`${commentsSectionHeight} flex flex-col items-center  justify-center overflow-y-auto  gap-4`}>

                <p className=" p-2 text-amber-200"> Comentarios : 0</p>
                <div className=" min-h-16  w-9/10 bg-blue-800 border border-amber-200 rounded-md flex flex-col p-2">
 
                <div className="pl-4 flex gap-4">
                   <p className=" text-amber-200">Felipe da silva Lima - </p>
                   <p className=" text-white"> 21/12/2025</p>
                   <p className="text-white"> 22:12 pm</p>
                </div>
                
                <div className=" flex flex-col p-4">
                    <p className="pl-4 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ducimus doloribus! Quae recusandae excepturi eius veritatis praesentium voluptatem tenetur commodi cum dolor ratione. Dolor exercitationem perspiciatis voluptatum velit, vel expedita ipsum molestiae tenetur reiciendis neque aliquam quidem voluptatem sed similique doloribus alias commodi hic nobis dolorum. In laborum, voluptates incidunt at sequi possimus minus cupiditate aspernatur odit laudantium, quasi nobis dolore magnam voluptatibus. Doloremque ullam praesentium provident repellendus, recusandae et, adipisci ratione itaque perspiciatis similique est corporis dolorum natus? Aliquid atque similique odit harum quaerat vitae quasi dolorem architecto voluptatem voluptas. Expedita atque sapiente adipisci porro voluptatem ut nulla nihil.</p>
                </div>
            
                </div>
            
            <div className=" min-h-16  w-9/10 bg-blue-800 border border-amber-200 rounded-md flex flex-col p-2">
 
                <div className="pl-4 flex gap-4">
                   <p className=" text-amber-200">Felipe da silva Lima - </p>
                   <p className=" text-white"> 21/12/2025</p>
                   <p className="text-white"> 22:12 pm</p>
                </div>
                
                <div className=" flex flex-col p-4">
                    <p className="pl-4 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ducimus doloribus! Quae recusandae excepturi eius veritatis praesentium voluptatem tenetur commodi cum dolor ratione. Dolor exercitationem perspiciatis voluptatum velit, vel expedita ipsum molestiae tenetur reiciendis neque aliquam quidem voluptatem sed similique doloribus alias commodi hic nobis dolorum. In laborum, voluptates incidunt at sequi possimus minus cupiditate aspernatur odit laudantium, quasi nobis dolore magnam voluptatibus. Doloremque ullam praesentium provident repellendus, recusandae et, adipisci ratione itaque perspiciatis similique est corporis dolorum natus? Aliquid atque similique odit harum quaerat vitae quasi dolorem architecto voluptatem voluptas. Expedita atque sapiente adipisci porro voluptatem ut nulla nihil.</p>
                </div>
            
                </div>
            
            </div>
        </div>
        </div>
       
         
    )
}