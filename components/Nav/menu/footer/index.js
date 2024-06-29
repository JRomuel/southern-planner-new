import React from 'react'
import styles from './footer.module.scss'
import { motion } from "framer-motion"
import { translate } from "../../anim"

function Footer() {
  return (
    <div className={styles.footer}>
    <ul>
        <motion.li custom={[0.2, 0]} variants={translate} initial="initial" animate="enter" exit="exit"><strong>Made By:</strong> JR Mendoza</motion.li>
        <motion.li custom={[0.2, 0]} variants={translate} initial="initial" animate="enter" exit="exit"><strong>Typography:</strong> Google Fonts</motion.li>
        <motion.li custom={[0.2, 0]} variants={translate} initial="initial" animate="enter" exit="exit">Southern Planners - All Rights Reserve 2024</motion.li>
    </ul>
    </div>
  )
}

export default Footer