"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons'


export default function Section8() {
    return (
        <section className="bg-blue-600 mb-50 border border-black-100 
        [@media(max-width:768px)]:h-full
        [@media(max-width:450px)]:border
        ">


            <div className=" flex items-center justify-between m-20 
            
            [@media(max-width:450px)]:flex-col
            [@media(max-width:450px)]:m-5
            ">
                {/* top div  */}

                <div className="w-1/2 
                [@media(max-width:450px)]:w-full
                [@media(max-width:450px)]:p-2
                ">
                    <span className=" block mb-4 text-white text-xl">Join other Sun harvesters</span>
                    <h1 className="font-bold text-3xl text-white mb-8">Lorem ipsum dolor sit amet.</h1>

                    <p className="text-white">Dui euismod iaculis libero, aliquet vitae et elementum protitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo</p>
                </div>

                <div>
                    {/* button  */}
                    <button className=" px-15 py-1 bg-gray-200 rounded-md shadow-[0_4px_6px_rgba(0,0,0,0.3)]
                    [@media(max-width:450px)]:mt-5

                     hover:cursor-pointer hover:bg-gray-300 
                     ">
                        Lorem Ipsum
                    </button>
                </div>
            </div>






            <div className=" relative py-15 pl-0 flex mt-15 w-full overflow-hidden 
            [@media(max-width:768px)]:overflow-x-auto
            [@media(max-width:768px)]:py-5
           
            [@media(max-width:450px)]:overflow-hidden
            [@media(max-width:450px)]:p-5
            
            ">

                <div className=" flex gap-5 inner-wrapper 
                inner-wrapper translate-x-[100px] 
                hover:cursor-pointer
                [@media(max-width:768px)]:overflow-x-auto
                [@media(max-width:768px)]:h-full
                [@media(max-width:768px)]:w-full
                [@media(max-width:450px)]:inner-wrapper
                [@media(max-width:450px)]:translate-x-[0px]
                ">
                    {/* mid div  */}

                    <div className="flex flex-col p-5 rounded-md 
                   shadow-[0_10px_25px_rgba(0,0,0,0.4)]
                    bg-white scale-105
                  
                    [@media(max-width:768px)]:h-96
                    
                    ">

                        <img src="/assets/images/Section 8 images/thunder icon.png" alt="" className='w-15 h-12 mt-5 mb-5' />
                        <p className=' mb-5 
                        [@media(max-width:768px)]:h-full
                        [@media(max-width:768px)]:break-words
                        [@media(max-width:768px)]:overflow-hidden
                        [@media(max-width:768px)]:text-ellipsis
                        '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum voluptates ipsum itaque atque repudiandae repellendus. Vitae illo cumque eius repellendus doloribus nisi, veniam recusandae voluptates tempora voluptatem distinctio ex?</p>


                        <div className='flex items-center gap-3'>
                            <img src="/assets/images/Section 8 images/jane cooper.jpg" alt="" className='h-12 w-12 object-cover rounded-full' />
                            <span>Jane Cooper</span>
                        </div>
                    </div>



                    <div className=" flex flex-col gap-5 p-5 rounded-md bg-white 
                    shadow-[0_10px_25px_rgba(0,0,0,0.4)]
[@media(max-width:768px)]:h-96
                    hover:scale-105 transition-transform duration-300">
                        <img src="/assets/images/Section 8 images/stars.png" alt="" className='w-17 h-12' />
                        <p className='mb-3
                        [@media(max-width:768px)]:h-full
                        [@media(max-width:768px)]:break-words
                        [@media(max-width:768px)]:overflow-hidden
                        [@media(max-width:768px)]:text-ellipsis
                        '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum voluptates ipsum itaque atque repudiandae repellendus. Vitae illo cumque eius repellendus doloribus nisi, veniam recusandae voluptates tempora voluptatem distinctio ex?</p>


                        <div className='flex items-center gap-3'>
                            <img src="/assets/images/Section 8 images/ralph edwards.jpg" alt="" className='h-12 w-12 rounded-full object-cover' />
                            <span>Ralph Edwards</span>
                        </div>
                    </div>


                    <div className=" flex flex-col gap-5 p-5 rounded-md bg-white
                    shadow-[0_10px_25px_rgba(0,0,0,0.4)]
[@media(max-width:768px)]:h-96
                    hover:scale-105 transition-transform duration-300">
                        <img src="/assets/images/Section 8 images/switch.png" alt="" className='h-12 w-15' />
                        <p className='mb-3
                        [@media(max-width:768px)]:h-full
                        [@media(max-width:768px)]:break-words
                        [@media(max-width:768px)]:overflow-hidden
                        [@media(max-width:768px)]:text-ellipsis
                        '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum voluptates ipsum itaque atque repudiandae repellendus. Vitae illo cumque eius repellendus doloribus nisi, veniam recusandae voluptates tempora voluptatem distinctio ex?</p>


                        <div className='flex items-center gap-3'>
                            <img src="/assets/images/Section 8 images/Courtney Henry.jpg" alt="" className='object-cover rounded-full h-12 w-12' />
                            <span>Courty Henery</span>
                        </div>
                    </div>


                    <div className=" flex flex-col gap-5 p-5 rounded-md bg-white 
                    shadow-[0_10px_25px_rgba(0,0,0,0.4)]
[@media(max-width:768px)]:h-96
                    hover:scale-105
                    transition-transform duration-300
                    "

                    >
                        <img src="/assets/images/Section 8 images/time.png" alt="" className='h-12 w-15' />
                        <p className='mb-3
                        [@media(max-width:768px)]:h-full
                        [@media(max-width:768px)]: break-words
                        [@media(max-width:768px)]:overflow-hidden
                        [@media(max-width:768px)]:text-ellipsis
                        '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum voluptates ipsum itaque atque repudiandae repellendus. Vitae illo cumque eius repellendus doloribus nisi, veniam recusandae voluptates tempora voluptatem distinctio ex?</p>


                        <div className='flex items-center gap-3'>
                            <img src="/assets/images/Section 8 images/cameron.jpg" alt="" className='h-12 w-12 object-cover rounded-full' />
                            <span>Cameron</span>
                        </div>
                    </div>


                </div>

            </div>










            <div className='flex w-1/4 m-20 rounded  px-10 py-3  justify-around

            
            [@media(max-width:450px)]:w-2/4
            '>
                {/* last div 
                 */}

                <FontAwesomeIcon icon={faCircleLeft} className="h-20 w-20 text-white 
             scale-200
                 hover:cursor-pointer 
                 hover:shadow-2xl 
                 hover:scale-300
                 hover:transition duration-300
                 hover:-translate-y-1
                 
                 
                 " />


                <FontAwesomeIcon icon={faCircleRight} className="h-20 w-20 text-white 
                scale-200
                hover:cursor-pointer hover:cursor-pointer 
                 hover:shadow-2xl 
                 hover:scale-300
                 hover:transition duration-300
                 hover:-translate-y-1

                 
                 
                 " />

            </div>
        </section>

    )
}