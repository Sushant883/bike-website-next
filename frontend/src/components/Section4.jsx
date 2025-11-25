export default function Section4(){
    return(
        <section className=" mb-20 mt-20">
            <div className=" border-blue-500 ml-15 gap-4 flex flex-col
            
            [@media(max-width:450px)]:w-full
            [@media(max-width:450px)]:ml-0
            [@media(max-width:450px)]:px-2
            
            
            ">
                {/* heading */}
                <span className="text-blue-600 font-bold">Lorem ipsum dolor sit amet</span>
                <h1 className="font-bold text-3xl 
                
                ">LOREM IPSUM DOLOR SIT</h1>
                <p className="w-1/2 
                [@media(max-width:450px)]:w-full
                ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati officiis natus ab id eum ipsa, porro distinctio, quibusdam laborum dolorem assumenda odio error ut repudiandae.</p>
            </div>




            <div className="border-yellow-700 flex flex-wrap gap-6 items-center justify-center px-10 py-10">



                <div className=" max-w-sm bg-white  shadow-md rounded-xl overflow-y-auto">
                    {/* card */}
                    <img src="/assets/images/section 4 images/momsuca_architecture.png" alt=""  className="w-full h-50 object-cover"/>

                    <div className="flex flex-col gap-2 p-4">
                        <h2 className="font-bold">Lorem ipsum dolor sit amet consectetur</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate debitis veniam modi perferendis vitae exercitationem inventore? Nisi voluptates nobis dolorem eaque, fuga pariatur molestiae?
                        </p>
                        <a href="#" className="mt-10 text-blue-800 font-bold underline underline-offset-4">Learn more</a>
                    </div>
                </div>




                <div className=" max-w-sm bg-white shadow-md rounded-xl overflow-hidden">
                    <img src="/assets/images/section 4 images/anna lewis.png" alt="" className="w-full h-50 object-cover object-[50%_70%]" />
                    <div className="flex flex-col gap-2 p-4">
                        <h2 className="font-bold">Lorem Ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam mollitia necessitatibus quaerat nisi, enim magni nihil dignissimos ullam assumenda sint corrupti? Culpa, est veniam!</p>
                        <a href="#" className="mt-10 text-blue-800 font-bold underline underline-offset-4">Learn more</a>
                    </div>
                </div>



                <div className=" max-w-sm bg-white shadow-md rounded-xl overflow-hidden">
                    <img src="/assets/images/section 4 images/mycari.png" alt="" className="w-full h-50 object-cover object-[50%_25%]" />
                     <div className="flex flex-col gap-2 p-4">
                        <h2 className="font-bold">Lorem Ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam mollitia necessitatibus quaerat nisi, enim magni nihil dignissimos ullam assumenda sint corrupti? Culpa, est veniam!</p>
                        <a href="#" className="text-blue-800 font-bold underline underline-offset-4">Learn more</a>
                    </div>
                </div>


                <div className=" max-w-sm bg-white shadow-md rounded-xl overflow-hidden">
                    <img src="/assets/images/section 4 images/reusearch.png" alt="" className="w-full h-50 object-cover" />
                     <div className="flex flex-col gap-2 p-4">
                        <h2 className="font-bold">Lorem Ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam mollitia necessitatibus quaerat nisi, enim magni nihil dignissimos ullam assumenda sint corrupti? Culpa, est veniam!</p>
                        <a href="#" className="text-blue-800 font-bold underline underline-offset-4">Learn more</a>
                    </div>
                </div>
            </div>







        </section>
    )
}