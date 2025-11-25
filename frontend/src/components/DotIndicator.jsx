"use client";

import { useState } from "react";
export default function DotIndicator() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="flex space-x-2 justify-center items-center w-full h-10">
            {[0, 1, 2, 3, 4].map((index) => (


                <span
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={` h-4 rounded-full transition-all duration-300 cursor-pointer 
                        ${index === activeIndex ? 'bg-blue-800 w-8' : 'bg-blue-200 w-4'}`}

                />
            ))}
        </div>
    );
}