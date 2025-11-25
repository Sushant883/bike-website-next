export default function Section2() {
    return (
        <section className="relative mt-35 mb-35 pb-15 
        [@media(max-width:768px)]:pb-[15px]
        
        
        ">
            <div className="flex items-center pl-10
            [@media(max-width:768px)]:
            [@media(max-width:768px)]:flex-col
            [@media(max-width:768px)]:p-10
            " >
                <div className="
                
                ">
                    {/* left side */}
                    <span className="text-blue-600 font-bold mt-5">Lorem ipsum dolor sit amet</span>

                    <h2 className=" font-bold text-4xl w-3/6 mt-7 mb-10 
                   
                    [@media(max-width:450px)]:w-full
                    ">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT</h2>

                    <p className=" mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus accusantium nisi voluptas aliquid fugit quae laudantium voluptatibus id nemo repellat, minus vero. Inventore, doloribus repellendus!</p>


                    <div className=" p-4 flex-col">
                        <div className="flex items-top gap-4 mt-5
                        
                        ">

                            <img src="/assets/images/sure drive crop.png" className="
                                h-10 w-10 
                                "/>


                            <div>
                                <h4 className="
                                font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, quo.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil quos voluptas repellat libero nulla, beatae quae ipsum vero, ullam laborum quo sapiente nesciunt veniam.</p>
                            </div>
                        </div>



                        <div className="flex items-top gap-4 mt-5">
                            <img src="/assets/images/sure drive crop.png" alt="" className="h-10 w-10 " />
                            <div>
                                <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, quo.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil quos voluptas repellat libero nulla, beatae quae ipsum vero, ullam laborum quo sapiente nesciunt veniam.</p>
                            </div>
                        </div>



                        <div className="flex items-top gap-4 mt-5">
                            <img src="/assets/images/sure drive crop.png" alt="" className="h-10 w-10 " />
                            <div>
                                <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, quo.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil quos voluptas repellat libero nulla, beatae quae ipsum vero, ullam laborum quo sapiente nesciunt veniam.</p>
                            </div>
                        </div>



                    </div>
                </div>


                <div className="
                
                [@media(max-width:768px)]:scale-80
                
                ">
                    {/* right side  */}
                    <img src="/assets/images/main image.png" className="
                    [@media(max-width:768px)]:rounded-xl [@media(max-width:768px)]:h-96
                    
                    " />
                </div>

            </div>



<div className=" absolute bottom-0 w-[95%] h-4 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </section>

    )
}