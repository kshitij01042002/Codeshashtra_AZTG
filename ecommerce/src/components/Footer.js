import React from 'react';
import logo from "../assets/logo.png";
import githubFavicon from "../assets/github-favicon.png";
import twitterFavicon from "../assets/twitter-favicon.png";
import instagramFavicon from "../assets/instagram-favicon.png";

function Footer() {
    return (
        <div className='flex flex-col bg-black text-gray-300 font-dmsans shadow-t-lg'>
            <div className='flex justify-center items-center bg-gray-200 shadow-b-2xl'>
            <img
                  src="https://res.cloudinary.com/atharva7/image/upload/v1664640503/samples/plantifylogo_ez5l1p.png"
                  className="mr-3 h-12 animate-pulse sm:h-24"
                  height={95}
                  width={95}
                  alt="KHETI Logo"
                />
            </div>
            <div className='w-4/5 mx-auto my-10 text-center'>
            <h1 className= 'text-5xl text-blue-gray-100 my-3'>KHETI</h1>
            
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className= 'text-2xl text-pink-400'>POLICIES</h1>
                        <h1 className='text-base my-1'>Privacy Policy</h1>
                        <h1 className='text-base my-1'>Return Policy</h1>
                        <h1 className='text-base my-1'>Terms & Conditions</h1>
                    </div>
                    <div className='flex flex-col'>
                        <span  className='my-2'>Store </span><span  className='my-2'>       Newsletter  </span><span  className='my-2'>   Cookies</span>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className= 'text-2xl text-pink-400'>FOLLOW US</h1>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img className='my-1 w-8 h-8' src={githubFavicon} alt="GitHub" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img className='my-1 w-8 h-8 self-start' src={twitterFavicon} alt="Twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img className='my-1 w-8 h-8' src={instagramFavicon} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
