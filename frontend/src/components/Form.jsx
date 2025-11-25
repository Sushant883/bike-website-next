import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function Form() {
    return (
        <section className="border-red-400 mt-20 h-auto w-full flex flex-col items-center gap-10">
            <h1 className="font-bold text-4xl mb-10">REQUEST A QUOTE</h1>
            
            <form action="" className="flex flex-wrap gap-10 items-center justify-start  mx-auto w-[80%]">


                <div className="flex flex-col w-3/7 gap-4">
                    <label htmlFor="">Name</label>
                    <input type="text" className="h-10 pl-2 w-full border border-gray-400  bg-gray-100 pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>

                <div className="flex flex-col w-3/7 gap-4">
                    <label htmlFor="">E-mail</label>
                    <input type="e-mail" className="h-10 w-full border border-gray-400 bg-gray-100 pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>

                <div className="flex flex-col w-3/7 gap-4">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" className="h-10 w-full border border-gray-400 bg-gray-100 pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>

                <div className="flex flex-col w-3/7 gap-4">
                    <label htmlFor="">Time Frame<span className="text-red-500">*</span></label>
                    <select name="" id="" className="border h-10 w-full border-gray-400 bg-gray-100 pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400">
                        <option value="">1-2 Week</option>
                        <option value="">1 Month</option>
                        <option value="">2+ Months</option>
                    </select>
                </div>

                <div className="flex flex-col  w-3/7 gap-4">
                    <label htmlFor="">Size<span className="text-red-500">*</span></label>
                    <select name="" id="" className="border h-10 w-full border-gray-400 bg-gray-100 pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400">

                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                    </select>
                </div>

                <div className="flex flex-col  w-3/7 gap-4">
                    <label htmlFor="">Quantity<span className="text-red-500">*</span></label>
                    <select name="" id="" className="border h-10 w-full border-gray-400 bg-gray-100 pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400">
                        <option value="">1-10</option>
                        <option value="">10-50</option>
                        <option value="">50+</option>
                    </select>
                </div>


                <div className=" w-full h-50 flex flex-col gap-4">
                    <label htmlFor="">Please Describe Your Project <span className="text-red-500">*</span></label>
                    <textarea name="" id="" placeholder="Desrive Your Project" className="border border-gray-400 w-full h-60 bg-gray-100 rounded-md pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
                </div>    
            </form>
            <h2 className="">By submitting this form you agree to our <span className="underline">Terms of Service</span> and <span className="underline"> Privacy Policy </span></h2>


            <button className="flex items-center border bg-blue-600 text-white px-10 py-3 rounded-md gap-3 mb-10">
                Lorem Ipsme
                <FontAwesomeIcon icon={faRightLong} className="h-6 w-6" />
            </button>
        </section>
    )
}