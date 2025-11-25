import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function Section6() {
    return (
        <section className="h-screen bg-gray-100 flex  items-center justify-center
        [@media(max-width:768px)]:flex-col
        [@media(max-width:768px)]:h-full
        [@media(max-width:450px)]:border
        ">

            <div className="
            w-1/2 h-full flex flex-col items-start justify-center px-20 py-10
            
            [@media(max-width:768px)]:w-full
           
            [@media(max-width:450px)]:p-5
            ">
                <span className="text-gray-700 mb-10">NO LIMITS</span>
                <h1 className="text-3xl font-bold w-3/4 mb-10 
                [@media(max-width:450px)]:w-full
              
                ">
                    LOREM IPSUM DOLOR SIT AMET CONSETETUR SADIPSCING ELIT.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, delectus fuga. Praesentium blanditiis magni temporibus facere quis? Voluptate, labore omnis?
                </p>

                <button className="flex items-center bg-blue-600 text-white px-10 py-3 rounded-md gap-3 mt-10 mb-10 hover:cursor-pointer">
                    Lorem Ipsume
                    <FontAwesomeIcon icon={faRightLong} className="h-6 w-6" />
                </button>
            </div>
            {/* 
            <div className="  border grid grid-cols-4 gap-4 grid-flow-dense">
                {/* right side  */}

            {/* <img src="/assets/images/section 6 image/adryanaptri.png" alt="" className="h-full w-full border" />

                <img src="/assets/images/section 6 image/danaxivou.png" alt="" className="h-full w-full" />

                <img src="/assets/images/section 6 image/euginea.png" alt="" className="h-full w-full " />

                <img src="/assets/images/section 6 image/inkilings.png" alt="" className="h-150 w-150" />

                <img src="/assets/images/section 6 image/makrte.png" alt=""  className="h-full w-full "/>

                <img src="/assets/images/section 6 image/minghan.png" alt=""  className="h-full w-full "/>

                <img src="/assets/images/section 6 image/rektzed.png" alt="" className="h-full w-full  " />

                <img src="/assets/images/section 6 image/twowheele.png" alt="" className="h-full w-full " /> */}

            {/* </div> */}

            <div className="grid grid-cols-4 w-1/2 gap-2 scale-70 
            [@media(max-width:768px)]:w-full
            [@media(max-width:450px)]:w-full
           
            [@media(max-width:450px)]:shadow
          
            ">
                {/* Small image */}
                <img src="/assets/images/section 6 image/adryanaptri.png"
                    alt="adryanaptri"
                    className="w-full h-32 object-cover rounded-lg object-cover brightness-75  transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />

                {/* Big image (span 2 columns) */}
                <img src="/assets/images/section 6 image/danaxivou.png"
                    alt="danaxivou"
                    className="w-full h-64 object-cover rounded-lg col-span-2 object-cover brightness-75 
               transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />

                {/* Normal image */}
                <img src="/assets/images/section 6 image/euginea.png"
                    alt="euginea"
                    className="w-full h-32 object-cover rounded-lg object-cover brightness-75 
               transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />

                {/* Tall image (span 2 rows) */}
                <img src="/assets/images/section 6 image/inkilings.png"
                    alt="inkilings"
                    className="w-full h-full object-cover rounded-lg row-span-2 object-cover brightness-75 
               transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />

                {/* Medium image */}
                <img src="/assets/images/section 6 image/makrte.png"
                    alt="makrte"
                    className="w-full h-48 object-cover rounded-lg object-cover brightness-75 
               transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />

                {/* Wide image */}
                <img src="/assets/images/section 6 image/minghan.png"
                    alt="minghan"
                    className="w-full h-64 object-cover rounded-lg col-span-2 object-cover brightness-75 
               transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />

                {/* Normal image */}
                <img src="/assets/images/section 6 image/rektzed.png"
                    alt="rektzed"
                    className="w-full h-32 object-cover rounded-lg object-cover brightness-75 
               transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />

                {/* Big image (span 2 columns + 2 rows) */}
                <img src="/assets/images/section 6 image/twowheele.png"
                    alt="twowheele"
                    className="w-full h-full object-cover rounded-lg col-span-2 row-span-2 object-cover brightness-75 
               transition-transform duration-500 ease-in-out 
               hover:brightness-100 hover:-translate-y-4 cursor-pointer" />
            </div>



        </section>
    )
}