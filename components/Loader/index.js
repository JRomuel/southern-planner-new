import React, { useEffect, useState } from 'react'
import { animate, easeIn, motion } from "framer-motion"
import logo from "../../public/southernplanner-logo-removebg-preview.png"
import Image from "next/image"
import styles from "./loader.module.scss"
import { slideUp, loaderOpacity } from "../Misc/anim"

const words = ["0", "20", "45", "60", "70", "80", "88",'92', '99',"100"]
export default function Loader() {

  const [index, setIndex] = useState(0);

  useEffect( () => {
      if(index == words.length - 1) return;
      setTimeout( () => {
          setIndex(index + 1)
      }, index == 0 ? 1000 : 150)
  }, [index])



  return (
    <motion.div 
      variants={slideUp} initial="initial" exit="exit"
      className={styles.loader}
      >
       <motion.p variants={loaderOpacity} initial="initial" animate="enter">{words[index]}%</motion.p>,
    </motion.div>

  )
}
