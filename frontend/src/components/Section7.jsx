import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function Section7(){
    return(
        <section className="relative 
        shadow-[0_-4px_6px_rgba(0,0,0,0.1)] 
        h-[80vh] mt-25 mb-20 -ml-20 mx-auto w-[100%] bg-stone-100 flex items-center justify-between
        [@media(max-width:768px)]:flex-col
        [@media(max-width:768px)]:h-full
        [@media(max-width:768px)]:ml-[-20]
        [@media(max-width:768px)]:p-10
       
        [@media(max-width:450px)]:w-full
        [@media(max-width:450px)]:p-3
        ">

            <div className="-mt-25 h-full ml-20
            [@media(max-width:450px)]:w-full
            mr-7
            ">
                {/* right  */}
                <img src="/assets/images/Section 7 images/Section7.png" alt="" className="h-[80%]
                [@media(max-width:768px)]:rounded
                [@media(max-width:768px)]:shadow-2xl
                [@media(max-width:768px)]:h-96
                [@media(max-width:768px)]:mt-25
                [@media(max-width:768px)]:ml-[-20]
                [@media(max-width:768px)]:w-full
             
                
                " />
            </div>




            <div className=" h-full flex flex-col items-start justify-start p-5 gap-5 w-2/5 mx-auto
            [@media(max-width:768px)]:w-full
            ">
                {/* left div  */}
                <span className="text-blue-600 font-bold">Lorem Ipsum</span>

                <h1 className="text-2xl font-bold"><span className="text-blue-600">LOREM</span>  IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.</h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque corporis sapiente?</p>

                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 w-full font-bold
                
                [@media(max-width:450px)]:flex
                [@media(max-width:450px)]:flex-wrap
                 
                ">
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                </div>



                <button className="flex items-center gap-3 bg-blue-600 flex items-center text-white font-bold px-5 py-1 rounded-md ml-3 mb-10 hover:cursor-pointer hover:bg-blue-700 transition duration-300">
                    Lorem Ipsume
                     <FontAwesomeIcon icon={faRightLong} className="w-4 h-4" />
                </button>
            </div>


<div className="absolute bottom-0 w-[95%] h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </section>
    )
}