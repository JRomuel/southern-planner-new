import React, { useEffect, useState } from 'react'
import styles from './nav.module.scss'
import Image from "next/image"
import logo from "../../public/southernplanner-logo-removebg-preview.png"
import icon from "../../public/southernplanner-icon-logo.png"
import { opacity } from "./anim"
import { motion, useMotionValue, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion'
import Menu from "./menu"

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150){
      setHidden(true);
    }else{
      setHidden(false);
    }
  })
  
  return (
    <motion.div
      className={`${styles.wrapper} ${hidden & !isActive ? styles.hidden : ''}`}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Image className={styles.icon_image} src={icon} alt="icon"/>
          </div>
          <motion.div 
            className={styles.menu_wrapper}>
            <div className={styles.logo}>
              <Image src={logo} style={{width:'auto', height:"100%"}} alt="logo"/>
            </div>
            <motion.div className={styles.menu} variants={opacity} animate={isActive ? "closed" : "open"}>
              <ul>
                <li><a href="">About</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Services</a></li>
              </ul>
            </motion.div>
          </motion.div>
          <div className={`${styles.hamburger} ${isActive ? styles.burgerActive : ''}`} onMouseDown={() => {setIsActive(!isActive); setHidden(false);}}> 
            <div className={styles.burger}>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && <Menu/>}
        </AnimatePresence>
        

    </motion.div>
  )
}
