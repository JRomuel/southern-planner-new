import React from 'react'
import styles from './asides.module.scss'
import { slide_right, slide_left } from "../Misc/anim"
import { motion } from 'framer-motion'

export default function Asides() {
  return (
    <>
        <motion.aside className={`${styles.laside} ${styles.aside}`} custom={[3.5]} variants={slide_right} initial="initial" animate="enter">
            <a className={styles.aside_content} href="#about">
                <span className={styles.aside_link}><span><strong><span className="primary-color-accent">#</span></strong>SouthernPlanners</span></span>
            </a>
        </motion.aside>
        <motion.aside className={`${styles.raside} ${styles.aside}`} custom={[3.5]} variants={slide_left} initial="initial" animate="enter">
            <a className={styles.aside_content} href="#contact">
                <span className={styles.aside_link}><span><strong><span className="primary-color-accent">#</span></strong>BookNow</span></span>
            </a>
        </motion.aside>
    </>
  )
}
