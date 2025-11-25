import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/components/Logo";
export default function CTA(){
    return(
        <section className="h-[70vh] flex flex-col items-center justify-around 
      
        ">


            <div className=" w-3/7 mx-auto text-center flex flex-col gap-5
            [@media(max-width:768px)]:w-full
            [@media(max-width:768px)]:p-5
            ">
                <div className="border  w-fit mx-auto">
                <Logo />

                </div>
                <h1 className="font-bold text-4xl mb-5">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia repellendus fuga tempora nam aperiam.</p>
            </div>

            <button className="bg-blue-600 flex items-center gap-3 text-white px-5 py-3 rounded-md ml-3">
                        Lorem Ipsume
                        <FontAwesomeIcon icon={faRightLong} className="w-4 h-4" />

                    </button>
        </section>
    )
}