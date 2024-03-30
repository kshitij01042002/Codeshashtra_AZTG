import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import love from "../assets/love.png"

const ProductDescription = (props) => {
    const { data, cartItems, setCartItems,wishItems,setWishItems } = props;
   
    const [isPresent, setIsPresent] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const [currentImg, setCurrentImg] = useState(0);
    const [modal, setModal] = useState(false);
    const [wish, setWish] = useState(false);
    // console.log(wish);
    let { id } = useParams();

    useEffect(() => {
        if (cartItems.includes(id) === true) {
            setIsPresent(true);
        }
        if(wishItems.includes(id) === true) {
            setWish(true);
           
        }
    },[]);

    const getProduct = data.filter((item) => {
        return Number(item.id) === Number(id);
    })
    const product = getProduct[0];
    // const images = [
    //     "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddd7c2fceb18476f9115ae2a008922db_9366/Supernova_2_Running_Shoes_Black_GW9087_01_standard.jpg",

    //     "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/392778/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-PWRFRAME-Aerogram-Sneakers",

    //     "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/392778/02/fnd/IND/fmt/png/one8-Virat-Kohli-PWRFRAME-Aerogram-Sneakers",

    //     "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/392778/02/sv04/fnd/IND/fmt/png/one8-Virat-Kohli-PWRFRAME-Aerogram-Sneakers",

    //     "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1200,h_1200/global/392778/02/sv02/fnd/IND/fmt/png/one8-Virat-Kohli-PWRFRAME-Aerogram-Sneakers"
    // ];

    const images = [product.imgurl];
    // images.push(product.imgurl);
    
    const notify = () => toast.success('Item added to cart!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleClick = () => {
        // console.log(cartItems);

        if (cartItems.includes(id) === false) {
            setCartItems(cartItems.concat(id));
            notify();
            // console.log("Added to cart " + id);
            setIsPresent(true);
        }
        else {
            // console.log("Already present " + id);
            
        }
    }
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
        if (wishItems.includes(id) === false) {
            setWishItems(wishItems.concat(id));
            setTimeout(()=>{
                notifywish();
                console.log("Added to list " + id);
                console.log(wishItems);
            },100)
           
            
            setWish(true);
        }
        else {
            const index = wishItems.indexOf(id);
            if (index > -1) { // only splice array when item is found
              wishItems.splice(index, 1); // 2nd parameter means remove one item only
              console.log("Removed " + id);
              console.log(wishItems);
            }
            setWish(false);
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 justify-items-center p-10'>
                <div className='relative'>
                    <img className='w-[100%] ' src={images[imgIndex]} onClick={() => {
                        setCurrentImg(imgIndex);
                        setModal(true);
                    }} />
                    {/* <div className='my-2 flex justify-center w-[fit-content] rounded-md items-center gap-1'>
                        {images.map((img, index) => {
                            return (
                                <button key={index} onClick={() => setImgIndex(index)} className='h-[4rem] w-[4rem] border-2 rounded overflow-hidden flex items-center justify-center'>
                                    <img src={img} alt={index} className='h-[100%] w-[100%]' />
                                </button>
                            )
                        })}
                    </div> */}
                </div>
                <div className='self-center pl-0 md:pl-10 lg:pl-10 mt-10 lg:mt-0 md:mt-0'>
                    <h1 className='font-bold text-3xl'>{product.title}</h1>
                    <h3 className='font-bold text-xl'>{product.desc}</h3>
                    <p className='flex gap-2 items-start py-4'>
                        <span className='text-slate-600 line-through'>₹{Math.round(1.2 * product.price)}.00</span>
                        <span className='text-red-500 font-semibold text-lg'>₹{product.price}.00</span>
                        (Inclusive of all taxes)
                    </p>

{/* 
                    <h2 className='font-semibold text-xl pt-2'>
                        Color
                    </h2>
                    <div className='flex gap-2 py-2'>
                        <button className='h-10 w-10 bg-black border-2 border-solid'></button>
                        <button className='h-10 w-10 bg-white border-2 border-solid'></button>
                        <button className='h-10 w-10 bg-zinc-500 border-2 border-solid'></button>
                        <button className='h-10 w-10 bg-red-500 border-2 border-solid'></button>
                    </div>


                    <hr className='my-4' />


                    <p className='font-semibold text-red-600'>Extra 20% off auto-applied at checkout</p>
                    <div className='flex justify-between py-4'>
                        <h2 className='font-semibold text-xl'>Size</h2>
                        <button>SIZE GUIDE</button>
                    </div>
                    <div className='flex gap-2 py-4 flex-wrap'>
                        <button className='h-[3rem] w-[3rem] bg-zinc-100 border-2 border-solid focus:bg-zinc-300'>XS</button>
                        <button className='h-[3rem] w-[3rem] bg-zinc-100 border-2 border-solid focus:bg-zinc-300'>S</button>
                        <button className='h-[3rem] w-[3rem] bg-zinc-100 border-2 border-solid focus:bg-zinc-300'>M</button>
                        <button className='h-[3rem] w-[3rem] bg-zinc-100 border-2 border-solid focus:bg-zinc-300'>L</button>
                        <button className='h-[3rem] w-[3rem] bg-zinc-100 border-2 border-solid focus:bg-zinc-300'>XL</button>
                    </div> */}


                    <hr className='my-4' />

                    <div className='flex justify-between py-4'>
                        <select name="quantity" id="quantity" className='w-[5rem] h-[3.5rem] bg-zinc-100 rounded-md p-2'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button className='bg-black text-white rounded-md w-[60%] disabled:bg-gray-600' onClick={handleClick} disabled={isPresent}>
                            {(isPresent) ? "Added to cart" : "Add to Cart"}
                        </button>
                        <button className='bg-zinc-100 w-[3.5rem] flex justify-center items-center rounded-md'>
                          {wish?<img src={love} className='w-8 h-8 hover:scale-110' onClick={handleWish}/>:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  onClick={handleWish} className="hover:scale-110 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>}
                        </button>
                    </div>

                    <hr className='my-4' />
{/* 
                    <p className='text-zinc-500'>Please enter PIN code to check delivery time</p>

                    <div className='py-4'>
                        <form className='flex justify-between items-center'>
                            <div className='w-[60%] h-[3.5rem]'>
                                <input type="text" name="pincode" id="pincode" placeholder='PIN code' className=' border p-5 w-[100%] h-[100%]' />
                            </div>

                            <div className='w-[35%] h-[3.5rem]'>
                                <button className='h-[100%] bg-black text-white font-semibold text-lg rounded-md w-[100%]'>
                                    CHECK
                                </button>
                            </div>
                        </form>
                    </div> */}

                </div>
            </div>

            <div className='w-[95%] m-auto bg-zinc-100 mb-[10rem]'>
                <div className='p-8'>
                    <h2 className='font-semibold text-xl'>
                        PRODUCT STORY
                    </h2>
                    <p className='py-3 text-gray-800'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laborum quod, dignissimos nisi rem ipsam id cum rerum? Rem odio et natus porro enim assumenda, sed debitis, facilis harum repudiandae quae beatae nihil? Deleniti fugiat consectetur, corporis ad fugit cupiditate beatae incidunt delectus alias eligendi eveniet dolorem et dignissimos natus dolore maxime qui ipsum fuga. Dolorum doloremque labore harum dicta tenetur repellat illum ipsum illo quo error numquam quaerat, nihil facere non facilis? Quasi beatae quia ipsum id, odit explicabo repudiandae dolorem animi veritatis sapiente eligendi qui ea, ullam error mollitia rem excepturi facere sit. Delectus excepturi eveniet obcaecati rerum!
                    </p>
                </div>

                <div className="p-8 pt-0 grid grid-cols-2 grid-row-2 gap-10">

                    <div>
                        <h2 className='font-semibold text-xl pb-2'>
                            FEATURES & BENEFITS
                        </h2>
                        <ul className='pl-5 text-gray-800'>
                            <li className='list-disc py-1'>PWRFRAME: Ultra-thin TPU frame, strategically placed in the high-stress areas on the upper, delivers lightweight support and increased stability</li>
                            <li className='list-disc py-1'>
                                PROFOAM: Lightweight EVA designed to cushion your landing and propel your next step
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-semibold text-xl pb-2'>
                            Manufacturer's Address
                        </h2>
                        <ul className='text-gray-800'>
                            <p className='max-w-md'>ALERON VIET NAM FOOTWEAR LIMITED FVNEC THANH HOA PROVINCE HOANG LONG INDUSTRIAL ZONE TAO XUYEN WARD - THANH HOA CITY</p>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-semibold text-xl pb-2'>
                            Country Of Origin
                        </h2>
                        <div className='text-gray-800'>
                            <p>IN</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                modal && <div className="h-[100vh] w-[100%] overflow-hidden top-0 bg-zinc-800/90 flex flex-col justify-center items-center z-[99999999] fixed">
                    <div className="w-[100%] m-auto flex justify-center items-center">

                        <div className="m-auto flex items-center justify-center mt-[-3rem]">
                            <img className='w-[95%] lg:w-[unset] md:w-[unset] h-[unset] md:h-[70vh]  lg:h-[70vh]' src={images[currentImg]} alt="dhgjjhgd" />
                        </div>

                        <div className="flex justify-center items-center m-auto gap-[1rem] absolute bottom-[10%]">
                            <button className='rounded-full h-[3rem] w-[3rem] flex justify-center items-center bg-zinc-300 text-zinc-700 hover:bg-zinc-400 shadow-md border-none cursor-pointer' onClick={() => {
                                if (currentImg === 0) {
                                    setCurrentImg(images.length - 1);
                                } else {
                                    setCurrentImg(currentImg - 1);
                                }
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>

                            </button>
                            <button className='rounded-full h-[3rem] w-[3rem] flex justify-center items-center bg-zinc-300 text-zinc-700 hover:bg-zinc-400 shadow-md border-none cursor-pointer' onClick={() => setModal(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                            <button className='rounded-full h-[3rem] w-[3rem] flex justify-center items-center bg-zinc-300 text-zinc-700 hover:bg-zinc-400 shadow-md border-none cursor-pointer' onClick={() => {
                                if (currentImg === images.length - 1) {
                                    setCurrentImg(0);
                                } else {
                                    setCurrentImg(currentImg + 1);
                                }
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDescription