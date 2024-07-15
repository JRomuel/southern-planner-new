import React, { useEffect, useState } from 'react'
import { animate, easeIn, motion } from "framer-motion"
import logo from "../../public/southernplanner-logo-removebg-preview.png"
import Image from "next/image"
import styles from "./loader.module.scss"
import { slideUp, opacity2 } from "../Misc/anim"

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]
export default function Loader({closeLoader}) {

  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({width: 0, height:0});

  useEffect( () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
  }, [])

  useEffect( () => {
    if(index == words.length - 1) return;
    setTimeout( () => {
        setIndex(index + 1)
    }, index == 0 ? 1000 : 150)
}, [index])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
      initial: {
          d: initialPath,
          transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
      },
      exit: {
          d: targetPath,
          transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
      }
  }


  return (
    <motion.div 
      variants={slideUp} initial="initial" exit="exit"
      className={styles.loader}
      >
        <motion.p variants={opacity2} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>

    </motion.div>

  )
}
