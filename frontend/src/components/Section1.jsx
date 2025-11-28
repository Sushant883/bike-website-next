import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";



export default function Section1() {
    return (


        <section className=" relative gap-3 shadow-lg bg-white rounded-lg ml-[50px] mb-10 justify-between items-center px-15 py-10 
        
        [@media(max-width:768px)]:ml-[-30px]
        [@media(max-width:768px)]:mt-[-30px]
        [@media(max-width:450px)]:p-0
        [@media(max-width:450px)]:px-5
        [@media(max-width:450px)]:py-10
        [@media(max-width:450px)]:h-full
        "
        
            style={{ boxShadow: "-6px -6px 12px rgba(0,0,0,0.15)" }}>

            <div className="flex
            [@media(max-width:768px)]:flex-col
            [@media(max-width:450px)]:w-full
            
            ">
                <div className="w-1/2
               [@media(max-width:768px)]:w-full
               [@media(max-width:450px)]:w-full
               [@media(max-width:450px)]:p-2
                ">
                    {/* left div  */}

                    <span className=" ml-2 text-blue-700 font-bold 
                    
                    ">Lorem ipusm dolor sit</span>

                    <h1 className="font-bold ml-2 text-2xl mt-5 mb-5">LOREM IPSUM DOLOR SIT AMET</h1>

                    <h4 className="mb-5 ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad ipsum expedita at voluptas accusamus aperiam facilis adipisci, esse hic?</h4>



                    <div className=" px-3 py-3
                    [@media(max-width:450px)]:p-2 
                    [@media(max-width:450px)]:w-full
                    ">
                        <div className="flex items-center mb-4">

                            <img src="/assets/images/1 card image.png" className="h-30 w-25
                            [@media(max-width:450px)]:w-full
                            " />
                            <h4 className=" ml-8
                            ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae illo officia illum, ea voluptatum ipsum?</h4>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src="/assets/images/2 card image.png" alt="" className="h-30 w-25 
                            [@media(max-width:450px)]:w-full
                            " />
                            <h4 className=" ml-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae illo officia illum, ea voluptatum ipsum?</h4>
                        </div>
                        <div className="flex items-center">
                            <img src="/assets/images/3 card Image.png" alt="" className="h-30 w-25 
                            [@media(max-width:450px)]:w-full
                            " />
                            <h4 className=" ml-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae illo officia illum, ea voluptatum ipsum?</h4>
                        </div>
                    </div>
                </div>


                <div className="h-full 
                [@media(max-width:768px)]:px-15 py-3
                [@media(max-width:450px)]:w-full
                [@media(max-width:450px)]:rounded
                [@media(max-width:450px)]:scale-110
                ">
                    {/* right div  */}
                    <img src="/assets/images/Section1-Image.png"
                        className="h-screen w-full
                        [@media(max-width:768px)]:h-96
                        [@media(max-width:1024px)]:scale-90
                        [@media(max-width:450px)]:border
                        [@media(max-width:450px)]:w-full
                        "/>
                </div>

            </div>
            <div className=" flex items-center gap-6 
            [@media(max-width:450px)]:mt-10
            [@media(max-width:450px)]:ml-5
            ">
                <button className="flex items-center bg-blue-600 text-white px-7 py-3 rounded-md gap-3">
                    Loerum Ipsum
                    <FontAwesomeIcon icon={faRightLong} className="h-6 w-6" />
                </button>

                <span className="flex items-center text-blue-400"> 
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                    123456789</span>
                   
            </div>



           <div className="mt-10 absolute bottom-0 left-0   w-12/13 h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        </section>




    )
}