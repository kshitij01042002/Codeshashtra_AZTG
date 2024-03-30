import { useEffect } from "react"
import { motion , useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
const animateText = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: {  opacity: 0, scale: 0.5 }
  };



export default animateText