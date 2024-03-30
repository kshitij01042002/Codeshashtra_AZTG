import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import cart from "../assets/cart.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import love from '../assets/love.png'


//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShoeItem = (props) => { 
    const navigate=useNavigate();
    const { title, desc, img, price, id, wishItems,setWishItems } = props;
    const [wish,setWish] = useState(false);
    // console.log(wishItems);
    useEffect(() =>{
     if(wishItems.includes(String(id))==true)
     {
        setWish(true);
     }
     

    },[])
    // console.log(wish)
    const notifywish = () => toast.success('Item added to Wishlist!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
      const handleWish=()=>{
        // console.log(wishItems);
        if (wishItems.includes(String(id)) === false) {
            setWishItems(wishItems.concat(String(id)));
            
            setTimeout(()=>{
                notifywish();
                console.log("Added to list " + id);
                console.log(wishItems);
            },100)
           
            
            setWish(true);
            navigate(`/product/${id}`);

        }
        else {
            const index = wishItems.indexOf(String(id));
            if (index > -1) { // only splice array when item is found
              wishItems.splice(index, 1); // 2nd parameter means remove one item only
              console.log("Removed " + id);
              console.log(wishItems);
            }
            setWish(false);
        }
    }
    
    return (
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer' >
                <Link to={"/product/" + id}>
                <div className='w-full relative' id={id}>
                {wish?<img src={love} className='w-8 h-8 hover:scale-110  absolute right-0 m-4' onClick={handleWish}/>:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  onClick={handleWish} className="hover:scale-110 w-8 h-8 absolute right-0 m-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>}
                    <img className='object-contain w-full h-full' src={img} alt="shoe" />
                    
                </div>           
                <div className='flex justify-between items-center px-4 pb-5'>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='font-bold text-lg mt-5'>{title}</h1>
                        <h3 className='text-sm font-normal text-gray-700'>{desc}</h3>
                        <h1>₹{price}</h1>
                    </div>
                    <div className='flex justify-center items-center '>
                        <img
                            className='object-contain w-5 h-5'
                            src={cart} alt="cart" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default ShoeItem