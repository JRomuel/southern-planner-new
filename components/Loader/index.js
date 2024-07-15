import React from 'react'
import { animate, easeIn, motion } from "framer-motion"
import logo from "../../public/southernplanner-logo-removebg-preview.png"
import Image from "next/image"
import styles from "./loader.module.scss"
import { slideUp } from "../Misc/anim"


export default function Loader({closeLoader}) {
  return (
    <motion.div 
      variants={slideUp} initial="initial" exit="exit"
      className={styles.loader}
      >
    </motion.div>

  )
}
