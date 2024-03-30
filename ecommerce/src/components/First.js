import React from 'react'
import mac1 from "../assets/mac-1.jpg"
import mac2 from "../assets/mac-2.jpg"
import { motion } from "framer-motion"

function First() {
    return (
        <div className='w-3/5 sm:w-4/5 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 lg:space-x-12 font-dmsans mx-auto mt-10'>
            <motion.div
                animate={{
                    scale: [0.5, 1],
                    duration: 0.1
                }}
                className=' mb-5 p-6 rounded-2xl shadow-sm border border-gray-300 hover:scale-150 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                <h1 className='text-black font-bold text-sm md:text-xl lg:text-2xl text-center'>Which mac is right</h1>
                <h1 className='text-black font-bold text-sm md:text-xl lg:text-2xl text-center'>for you?</h1>
                <img src={mac1} alt="" className='rounded-2xl' />
            </motion.div>
            <motion.div
                animate={{
                    scale: [0.5, 1],
                    duration: 0.1
                }}
                className=' mb-5 p-6 rounded-2xl shadow-sm border border-gray-300 hover:scale-125 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                <h1 className='text-black font-bold text-sm md:text-xl lg:text-2xl text-center'>Shop one on one with a </h1>
                <h1 className='text-black font-bold text-sm md:text-xl lg:text-2xl text-center'> Mac Specialist</h1>
                <img src={mac2} alt="" className='' />
            </motion.div>
        </div >
    )
}

export default First