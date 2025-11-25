import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import DotIndicator from "@/components/DotIndicator";
export default function Section11() {
    return (
        <section className="h-auto p-20 flex flex-col gap-10 bg-slate-50
        [@media(max-width:450px)]:mt-10
        [@media(max-width:450px)]:p-5
        ">

            <div className="text-center 
           
            [@media(max-width:450px)]:w-full
            ">
                <h1 className="text-3xl font-bold mb-10">
                    LOREM IPSUM DOLOR SIT AMET
                </h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus accusantium, recusandae quae esse iure magnam dolorum inventore officiis aut incidunt fuga doloribus consectetur aliquam assumenda.</p>
            </div>


            <div className=" flex items-center px-20
            
        
            [@media(max-width:768px)]:px-0
            [@media(max-width:450px)]:flex-col
            ">
                {/* image  */}
                <img src="/assets/images/Section11/group photo.png" alt="" className="h-90 w-130 object-cover" />

                <div className=" h-atuo w-120 px-10 py-5 bg-zinc-50 rounded shadow-[0_10px_25px_rgba(0,0,0,0.5)]  -ml-15 flex flex-col gap-5
              
                [@media(max-width:450px)]:scale-80
                [@media(max-width:450px)]:ml-0
                [@media(max-width:450px)]:-mt-20
                ">
                    <h1 className="text-gray-500">Artist & Investor</h1>

                    <p>Enim sagittis, sit  porttior morbi lobortis amet, libero adipiscing auctor. Malesuade tristique libero, id netus tincidunt. Egestas acarcu amet nisl quis est ...</p>


                    <a href="#" className="text-blue-600 font-bold flex items-center gap-5"> 
                        Read Full Story 
                        <FontAwesomeIcon icon={faRightLong} className="w-4 h-4" />
                    </a>
                </div>

            </div>






<DotIndicator />
        </section>
    )
}