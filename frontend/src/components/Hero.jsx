"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";





export default function Hero() {


    return (
        <div className="h-screen py-3 flex justify-between gap-6 items-center w-full 
         [@media(max-width:450px)]:w-full
         [@media(max-width:450px)]:items-start justify-around
         [@media(max-width:450px)]:h-full
         [@media(max-width:450px)]:mb-10
         
        ">
            <section className="ml-10 relative z-10">
                <div className=" 
                
                [@media(max-width:450px)]:-ml-10

                ">
                    <h1 className="text-7xl
                    
                    [@media(max-width:786px)]:text-3xl
                     [@media(max-width:480px)]:w-full p-2
                     [@media(max-width:480px)]:text-2xl
                     [@media(max-width:480px)]:font-bold
                     [@media(max-width:1024px)]:text-4xl
                    ">Lorem ipsum dolor sit amet</h1>

                    <h3 className="max-w-3xl

                    [@media(max-width:480px)]:w-full
                    [@media(max-width:480px)]:w-full
                    [@media(max-width:480px)]:p-2
                    [@media(max-width:1024px)]:max-w-sm

                    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem voluptatibus tenetur dicta. Sint vitae eius laboriosam necessitatibus error soluta, id quo alias dolorem, ipsa aliquam sequi distinctio possimus! Maiores?</h3>
                </div>

                <div className=" w-fit flex items-center mt-20
                [@media(max-width:450px)]:w-full
                [@media(max-width:450px)]:-ml-8
                ">
                    {/* text filed */}
                    <input type="email" placeholder="Your Email"
                        className="border rounded-md px-4 py-2 w-64" />

                    <button className="bg-blue-600 flex items-center gap-3 text-white px-5 py-3 rounded-md ml-3">
                        Submit
                        <FontAwesomeIcon icon={faRightLong} className="w-4 h-4" />

                    </button>
                </div>

                <div className="flex items-center gap-1 mt-3 
                [@media(max-width:450px)]:-ml-8
                ">
                    {/* no credit */}
                    <FontAwesomeIcon icon={faCircleCheck} className="h-7 w-7 text-blue-600" />
                    <span>No credit card required</span>
                </div>

            </section>



            <section className="">
                {/* image */}

                <img src="/assets/images/rider.3f292b72.svg"
                    className="absolute top-0 right-0 w-auto h-full 
                    
                     [@media(max-width:768px)]:hidden sm:block
                     [@media(max-width:480px)]:
                   
                   "  />


                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>



            </section>

        </div>
    )
}
