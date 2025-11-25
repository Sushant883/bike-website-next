import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function Section9() {
    return (

        <section className="flex w-full mb-20 p-15 justify-betweem items-center gap-10
        [@media(max-width:768px)]:flex-col
    
        [@media(max-width:450px)]:p-5
        ">

            <div className=" w-1/2 flex flex-col gap-10
            [@media(max-width:768px)]:w-full
           
            [@media(max-width:450px)]:w-full
            ">
                {/* left div  */}
                <h1 className="font-bold text-3xl">LOREM IPSUM DOLOR SIT AMET.</h1>

                <div className="flex border w-fit h-10 rounded items-center border-gray-200 
                
                ">
                    <div className="px-10 h-full flex items-center border-r border-gray-200 bg-gray-200">Research</div>
                    <div className="px-10 border-r border-gray-200 h-full flex items-center">Plan</div>
                    <div className="px-10 h-full flex items-center">Design</div>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil excepturi neque praesentium rerum? Delectus expedita amet sed libero, cum quas aliquid deserunt, dignissimos officia ipsum, accusamus esse! Perspiciatis, delectus laboriosam?</p>


                <span className="text-blue-600 font-bold flex items-center gap-8 hover:cursor-pointer w-fit">
                    Check tools 
                    <FontAwesomeIcon icon={faRightLong} className="h-6 w-6" />
                </span>


            </div>


            <div className=" w-1/2 h-full
            [@media(max-width:768px)]:w-full
            [@media(max-width:768px)]:rounded
            [@media(max-width:768px)]:shadow
            
            
            ">
                {/* right div  */}
                <img src="/assets/images/Section 9 images/handshake.png" alt=""  className=" rounded shadow-2xl border-gray-200 h-100 w-125
                [@media(max-width:768px)]:w-full
                
                
                "/>
            </div>

        </section>
    )
}