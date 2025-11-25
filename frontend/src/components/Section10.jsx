import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function Section10() {
    return (
        <section className="  bg-gray-200 flex relative mb-50 px-15 h-[120vh] py-10
        
       
        [@media(max-width:450px)]:p-3
        [@media(max-width:450px)]:
        ">



            <div className=" flex flex-col 
          
            ">
                {/* left div  */}
                <h1 className="w-2/4 font-bold text-blue-600 text-4xl mb-5
                [@media(max-width:768px)]:text-2xl
                [@media(max-width:450px)]:w-full
                ">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.</h1>
                <p className=" w-2/4 mb-10 
                [@media(max-width:450px)]:w-full
                ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid ipsam totam ipsum numquam amet aspernatur facere modi omnis ducimus officiis, tempore deleniti iste. Dignissimos similique, quo ipsum doloribus temporibus eligendi repudiandae, ratione iusto nihil eum, nisi totam reprehenderit recusandae!</p>


                <button className="text-white bg-blue-600 py-1 px-5 rounded cursor-pointer font-bold flex items-center gap-8 hover:cursor-pointer w-fit">
                    Lorem Ipsum
                    <FontAwesomeIcon icon={faRightLong} className="h-6 w-6" />
                </button>
            </div>



            <div className=" absolute  left-15 -bottom-20 w-96 bg-slate-50 shadow-[0_0_30px_rgba(0,0,0,0.7)] z-10
                 flex p-5
            flex-col gap-3 overflow-hidden 
         
            [@media(max-width:450px)]:left-5
            [@media(max-width:450px)]:bottom-[-200]
            ">

                <img src="/assets/images/Section 10 images/pin.png"
                    alt="" className="h-10 w-10 absolute right-10 top-0" />


                <h2 className="font-bold">Lorem ipsume dolor sit</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi dolorem odio, dolorum cumque eveniet voluptas.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam debitis obcaecati voluptatem cumque eligendi sint necessitatibus ullam reiciendis ratione! Hic ratione itaque sapiente consectetur?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur nam ipsam temporibus, assumenda quod, blanditiis doloremque molestiae corporis perferendis distinctio sint perspiciatis excepturi quam.</p>
            </div>







            <div className="absolute w-96 h-96 right-10 -top-15 shadow-[0_0_30px_rgba(0,0,0,0.4)]
            [@media(max-width:450px)]:border
            [@media(max-width:450px)]:top-80
            [@media(max-width:768px)]:scale-75 
            [@media(max-width:768px)]:right-0
            [@media(max-width:450px)]:w-full
            ">
                {/* right div  */}
                <img src="/assets/images/Section 10 images/bike.png" alt="" className="rounded" />
            </div>
            <div className="mt-10 absolute bottom-0 left-0   w-12/13 h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </section>
    )
}