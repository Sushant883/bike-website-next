
import Logo from './Logo';
export default function Banner2() {
    return (
        <section className=" border-blue-800 ">
            
            <div className="relative ">
                <div className='absolute top-10 left-10 z-10'>
                    <Logo />
                </div>

                <img src="/assets/images/banner 2.png" alt="" className="border w-full h-150"/>


                <div className="absolute inset-0 bg-black/50"></div>



                <div className="absolute inset-0 text-white flex items-center justify-center p-4 text-center w-3/4 mx-auto">
                    <h1 className="text-4xl font-bold
                    [@media(max-width:450px)]:text-2xl
                    [@media(max-width:450px)]:w-full
                    ">DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI</h1>
                </div>
            </div>
        </section>
    )
}