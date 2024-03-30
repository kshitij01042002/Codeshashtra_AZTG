import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"
import cart from "../assets/cart.png"
import { useEffect } from "react"
import { motion , useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import animateText from "./AnimateHomeText"

function Second() {

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
        <div className='w-full font-dmsans flex flex-col justify-center items-center my-5'>
            <motion.div
                className='flex flex-row space-x-2 justify-center items-center'
                ref={ref}
                variants={animateText}
                initial="hidden"
                animate={control}>
                <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold'>Trending Products</h1>
            </motion.div>
            <div className='w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5'>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={img1} alt="" className='object-cover' />
                    <div className='flex justify-between items-center p-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>Medium Green Kurtas</h3>
                            <h1>₹1137</h1>
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
                    <img src={img2} alt="img2" className='object-cover' />
                    <div className='flex justify-between items-center p-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>BEIGE Kurtas</h3>
                            <h1>₹1137</h1>
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
                    <img src={img3} alt="img4" className='object-cover' />
                    <div className='flex justify-between items-center p-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>Medium Blue Kurtas</h3>
                            <h1>₹1337</h1>
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
                    <img src={img5} alt="img5" className='object-cover' />
                    <div className='flex justify-between items-center p-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>Light Yellow Bundi</h3>
                            <h1>₹1999</h1>
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

export default Second