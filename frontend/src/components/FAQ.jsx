"use client";
import { useState } from "react";

const faqs = [
    { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Vulputate amet aliquet morbi suspendisse convallis Vulputate amet aliquet morbi suspendisse convallis......" },
    { question: "lorem ipsum dolor sit amet consectetur?", answer: "Answer for question 2..." },
    { question: "lorem ipsum dolor sit amet consectetur?", answer: "Answer for question 3..." },
    { question: "lorem ipsum dolor sit amet consectetur?", answer: "Answer for question 4..." },
    { question: "lorem ipsum dolor sit amet consectetur?", answer: "Answer for question 4..." }
];
export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className=" flex flex-col gap-10 p-15 mt-10 mb-15 bg-gray-100 
        
      
        [@media(max-width:450px)]:p-5
        ">
            


            <h2 className="font-bold text-4xl 
            [@media(max-width:450px)]:text-2xl
            ">
                FREQUENTLY ASKED QUESTIONS (FAQs)
            </h2>
            {faqs.map((faq, index) => (
                <div key={index} className="border-b p-4">



                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center text-left text-lg font-medium"
                    >
                        <span>{faq.question}</span>
                        <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
                    </button>



                    {activeIndex === index && (
                        <p className="mt-2 text-gray-600 transition-all duration-300">{faq.answer}</p>
                    )}
                </div>
            ))}

        </section>
    );
}