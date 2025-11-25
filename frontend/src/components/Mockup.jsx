export default function Mockup(){
    return (
        <section className=" mt-15 h-[65vh] w-full bg-gray-100 flex items-center justify-center mb-20
        
        [@media(max-width:768px)]:flex-col
        [@media(max-width:768px)]:h-full pt-5
        ">
            <div className=" w-1/2 h-[90%] flex flex-col justify-evenly pl-20 
            
            [@media(max-width:768px)]:w-full
           
            [@media(max-width:450px)]:p-5
            ">
                {/* left  */}
                <span className="text-blue-500 font-bold mb-15 
                
                ">Lorem Ipsum</span>
                <h1 className="font-bold text-4xl w-3/5 
                
                [@media(max-width:450px)]:w-full
                ">Lorem ipsum dolor sit amet.</h1>
                <p className="w-3/4 
                [@media(max-width:450px)]:w-full
                ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusamus labore soluta adipisci doloremque, tenetur rem cum voluptatibus eius, iusto mollitia quia nobis sequi asperiores.</p>


                <div className=" flex
                h-15 w-fit p-2 mt-7 gap-5">
                    {/* image  */}
                    <img src="/assets/images/Mockup/googleplay store.png" alt="" />
                    <img src="/assets/images/Mockup/apple store.png" alt="" />
                </div>
            </div>

            <div className="h-full overflow-hidden">
                {/* right  */}
                <img src="/assets/images/Mockup/iphone 10 1.png" alt="" className=" h-full scale-125 
                [@media(max-width:768px)]:scale-100
                " />
            </div>
        </section>
    )
}