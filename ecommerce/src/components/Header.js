import React from 'react'
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import user from "../assets/user.png"
import cart from "../assets/cart.png"
import favorite from "../assets/favorite.png"
import { Link, } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Login from '../Login'

function Header() {


    return (
        <div className='flex justify-between items-center h-[155px] w-full px-12 font-dmsans border-b border-gray-800  '>
            <div>
                <a href='http://192.168.189.180:3000/'>
                    <img
                        className='object-contain w-36 h-36 cursor-pointer'
                        src={logo} alt="logo" />
                </a>
            </div>
            <div className='flex justify-center items-center font-bold space-x-12'>
                <Link to='/men'>
                    <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 '>Men</h1>
                </Link>
                <Link to='/women'>
                    <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 '>Women</h1>
                </Link>
                <Link to='/kids'>
                    <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 '>Kids</h1>
                </Link>
                <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 '>Customise</h1>
                <Link to='/sales'>
                    <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 '>Sale</h1>
                </Link>
                <Link to='/shoes'>
                    <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 '>Shoes</h1>
                </Link>
            </div>
            <div className='flex justify-center items-center border border-gray-800 py-2 px-4'>
                <input type="text" placeholder='What are you looking for?' className='w-64 placeholder-black font-medium outline-none' />
                <img
                    className='object-contain w-5 h-5'
                    src={search} alt="search" />
            </div>
            <div className='flex justify-around items-center space-x-8'>
                <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer'>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
                <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer'>
                    <img
                        className='object-contain w-5 h-5'
                        src={favorite} alt="favorite" />
                </div>
                <Link to="/login">
                    <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer'>
                        <img
                            className='object-contain w-5 h-5'
                            src={user} alt="user" />
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header