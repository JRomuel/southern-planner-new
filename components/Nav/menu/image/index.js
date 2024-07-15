import React from 'react';
import { opacity } from "../../../Misc/anim";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from './image.module.scss'

function SideImage({src, isActive}) {
  return (
    <motion.div className={styles.imageContainer} variants={opacity}  custom={[0.2, 0]} initial="open" exit="closed" animate={isActive ? "open" : "closed"}>
        <Image
            src={src}
            fill={true}
            alt="image"
        />
    </motion.div>
  )
}

export default SideImage