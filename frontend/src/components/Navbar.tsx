"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import Logo from "./Logo";
import SignInButton from "./SignInButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {

    const [open, setOpen] = useState(false);
    // const [scrolled, setScrolled] = useState(false);
    // useEffect(()=>{
    //     const handleScroll = () =>{
    //         if(window.scrollY > 50){
    //             setScrolled(true);
    //         }else{
    //             setScrolled(false);
    //         }
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return() => window.removeEventListener("scroll", handleScroll);
    // } , []);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // kitna scroll hua
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            setScrollProgress(progress);

            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
        // <nav 
        // // className="sticky top-0"
        // className={`sticky top-0 z-50 transition-colors duraton-300 ${scrolled ? "bg-white shodow-md border-b border-gray-200" : "bg-transparent"}`}
        // >
        <nav
            className={`
                 sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-transparent"
                }`}
        >

            <div className="relative z-10 flex items-center justify-around p-4 sm:flex items-center justify-between">
                {/* Logo */}
                <Logo />

                {/* Menu */}
                <div className="flex gap-6 text-blue-600 hidden md:flex ">
                    <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link>
                    <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link>
                    <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link>
                    {/* <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link> */}
                </div>

                <div className="hidden md:flex">
                    <SignInButton />
                </div>


                <button
                    onClick={() => setOpen(true)}
                    className="block md:hidden text-3xl">
                    <FontAwesomeIcon icon={faBars} />
                </button>



                {/* Right side slide menu  */}
                <div 
                className={`fixed top-0 right-0 w-64 bg-white shadow-lg p-6 rounded
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    {/* close icon  */}
                    <button 
                    onClick={() => setOpen(false)}
                    className="text-3xl mb-6 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>



                     <div className="flex flex-col gap-5 text-blue-600 mb-8">
                    <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link>
                    <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link>
                    <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link>
                    {/* <Link href="/" className="flex items-center">Lorem Ipsum <FaAngleDown /></Link> */}
                </div>

                <div className="">
                    <SignInButton />
                </div>
                </div>

            </div>

        </nav>
    )

}
