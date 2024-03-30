import React from 'react'
import First from "../components/First";
import { motion } from "framer-motion";
import Mid from "../components/Mid";
import Second from "../components/Second";
import CardBanner from './CardBanner';
import Third from "../components/Third";
import Fourth from './Fourth';
import Fifth from './Fifth';
import { ScrollUp } from './ScrollUp';



function Home() {
    
    return (
        <>
        <Mid /> 
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <ScrollUp />
        </>

    )
}

export default Home