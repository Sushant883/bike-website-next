import Logo from "@/components/Logo";
export default function Footer() {
    return (
        <section className="border mt-20 flex justify-around py-20 
        bg-[#171E2B] 
        [@media(max-width:450px)]:border
        [@media(max-width:450px)]:flex-col
        [@media(max-width:450px)]:items-center
        ">



            <div className="h-fit w-fit scale-150
            [@media(max-width:768px)]:pl-5
            [@media(max-width:450px)]:pl-0
            ">
                {/* logo  */}
                <Logo />
            </div>



            <div className="flex items-start h-[70%] justify-around w-3/4 py-15 text-white 
          
            [@media(max-width:450px)]:w-full
            [@media(max-width:450px)]:flex-wrap
            [@media(max-width:450px)]:gap-25
            [@media(max-width:450px)]:mt-10
            ">


                <div className="">
                    <h1 className="font-bold">Lorem Ipsum</h1>
                    <ul className="flex flex-col gap-5 mt-10
                    [@media(max-width:450px)]:mt-5
                    ">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold">Lorem Ipsum</h1>
                    <ul className="flex flex-col gap-5 mt-10 
                    [@media(max-width:450px)]:mt-5
                    ">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold">Lorem Ipsum</h1>
                    <ul className="flex flex-col gap-5 mt-10 
                    [@media(max-width:450px)]:mt-5
                    ">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold">Lorem Ipsum</h1>
                    <ul className="flex flex-col gap-5 mt-10 
                    [@media(max-width:450px)]:mt-5
                    ">
                        <li>Lorem Ipsum</li>

                    </ul>
                </div>




            </div>

        </section>
    )
}


