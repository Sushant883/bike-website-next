import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function Banner1() {
    return (
        <div className="relative w-full h-[600px] flex justify-center
        [@media(max-width:768px)]:h-[700px]
        ">

            <div className=" absolute top-5 left-5 z-10">
                <Logo className="w-24 brightness-75 contrast-125
                
                " 
                
                />
            </div>

            <img src="/assets/images/banner1.png"
                className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/50"></div>


            <div className="absolute border inset-0 flex flex-col items-center justify-center text-center h-[100%] w-auto  text-white z-10 
            [@media(max-width:768px)]:
            ">

                <h2 className="text-4xl mt-20 w-3/4
                [@media(max-width:768px)]:text-2xl
                [@media(max-width:450px)]:text-xl
                [@media(max-width:450px)]:w-full
                ">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.</h2>


                <p className=" mt-15 w-3/5 
                [@media(max-width:768px)]:text-sm
                [@media(max-width:450px)]:w-full
                [@media(max-width:450px)]:px-1
                ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore necessitatibus distinctio! Dicta doloremque, dolor nostrum minus corrupti est officia, sint consequuntur excepturi asperiores illo obcaecati error non eveniet inventore dolor nostrum minus corrupti est officia,.</p>

                <p className="mt-15 w-3/5
                [@media(max-width:768px)]:text-sm
                [@media(max-width:450px)]:w-full
                [@media(max-width:450px)]:px-2
                ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores fugiat a doloribus voluptatibus itaque aut porro, ipsum magnam laudantium modi nam, officiis eaque quisquam ut reiciendis obcaecati consequuntur adipisci voluptatum dolor nostrum minus corrupti est officia,.</p>



                <button className="absolute flex items-center gap-3 z-10 border bottom-1 bg-white flex items-center text-blue-600 font-bold px-5 py-3 rounded-md ml-3
                [@media(max-width:768px)]:mb-5
                ">
                    Lorem Ipsum
                    <FontAwesomeIcon icon={faRightLong} className="w-4 h-4" />
                </button>
            </div>




        </div>
    )
}