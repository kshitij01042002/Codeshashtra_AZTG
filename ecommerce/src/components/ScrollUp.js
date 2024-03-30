import React, { useEffect } from "react"
import { useState } from "react"



export const ScrollUp = () =>{

    const[scroll, setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        })
    },[])

    function handleClick(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        } )
    }

    return(
        <div className={`fixed transition ease-in-out transla duration-700 bottom-10 right-10  ${scroll ? `` : `translate-x-28`}`}>
                <button className={`flex justify-center items-center w-16 h-16 bg-gray-800 text-gray-100 rounded-full ease-in-out duration-[800ms] ${scroll ? `` : `-rotate-90`}`} onClick={handleClick}>
                ↑
                </button>
        </div>
    )

}

