import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import m1 from "../assets/m1.jpg"
import m2 from "../assets/m2.jpg"
import m3 from "../assets/m3.jpg"
import m4 from "../assets/m4.jpg"
import cart from "../assets/cart.png"
import { useEffect } from "react"
import { motion , useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import animateText from "./AnimateHomeText"

function Third() {

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
                animate={control}
                >
                <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold'>All models.</h1>
                <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold'>Take your pick.</h1>
            </motion.div>
            <div className='w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5'>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={m2} alt="m2" className='object-contain' />
                    <div className='flex justify-between items-center p-5'>
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-lg mt-5'>MacBook Air with M2 chip</h1>
                            <h1>₹119900.00</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={m3} alt="m3" className='object-contain' />
                    <div className='flex justify-between items-center p-5'>
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-lg mt-5'>MacBook Pro 13”</h1>
                            <h1>₹129900.00</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={m4} alt="m4" className='object-contain' />
                    <div className='flex justify-between items-center p-5'>
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-lg mt-5'>MacBook Pro 14” and 16”</h1>
                            <h1>₹194900.00</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>

    )
}

export default Third