import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';
import './SalesItem.css';

const SalesItem = (props) => {
  const { category, subCategory, title, desc, price, imgurl, id ,ref1,ref2,ogprice} = props;

  return (
    <motion.div className='relative shadow-sm border border-gray-200 transition transform hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-2xl cursor-pointer mx-12 my-4'>
      <Link to={"/product/" + id} className='flex flex-col relative'>
        {/* Blurred image with absolute positioning */}
        <div className='w-full relative' id={id}>
          <img
            className='object-cover w-full h-64 md:h-48 lg:h-64 filter blur-sm'
            src={imgurl}
            alt="sale-item"
          />
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* Main image centered with different size */}
              <img
                id='ref1'
                className='object-cover w-30 h-full mx-4'
                src={ref1}
                alt="main-sale-item"
              />
              <img
                id='main'
                className='object-cover w-30 h-full mx-4'
                src={imgurl}
                alt="main-sale-item"
              />
              <img
                id='ref2'
                className='object-cover w-30 h-full mx-4'
                src={ref2}
                alt="main-sale-item"
              />
            </div>
        </div>
        <div className='flex justify-between items-center px-4 pb-5'>
          <div className='flex flex-col space-y-3'>
            <h1 className='font-bold text-lg mt-5'>{title}</h1>
            <h3 className='text-sm font-normal text-gray-700'>{desc}</h3>
            {/* Display the discounted price for sale items */}
            <h1 className='text-red-500 line-through mr-2'>Starting at ₹{ ogprice}</h1>
            <h1 className='text-green-500 font-bold'>Sale Price: ₹{price}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SalesItem;
