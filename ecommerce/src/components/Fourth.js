import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import men from "../assets/men.webp"
import women from "../assets/women.webp"
import kids from "../assets/kids.webp"
import cart from "../assets/cart.png"
import { useEffect } from "react"
import { motion , useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import animateText from "./AnimateHomeText"
import { Link } from "react-router-dom"

function Fourth() {

    //code to animate heading 
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
    

    return (
        <div className='w-full mx-auto font-dmsans flex flex-col justify-center items-center my-10'>
            <motion.div
                className='flex flex-row space-x-2 justify-center items-center'
                ref={ref}
                variants={animateText}
                initial="hidden"
                animate={control}>
                <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold'>Explore Categories</h1>
            </motion.div>
            <div className='w-5/6 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5'>

                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <Link to="/men">
                        <img src={men} alt="men" className='object-cover' />
                        <div className='flex justify-center items-center p-5'>
                            <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold'>Men</h1>
                        </div>
                    </Link>
                </motion.div>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <Link to="/women">
                        <img src={women} alt="women" className='object-cover ' />
                        <div className='flex justify-center items-center p-5'>
                            <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5'>Women</h1>
                        </div>
                    </Link>
                </motion.div>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <Link to="/kids">
                        <img src={kids} alt="kids" className='object-cover' />
                        <div className='flex justify-center items-center p-5'>
                            <h1 className='ftext-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5'>Kids</h1>
                        </div>
                    </Link>
                </motion.div>


            </div>
        </div>

    )
}

export default Fourth