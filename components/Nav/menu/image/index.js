import React from 'react';
import { opacity } from "../../anim";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from './image.module.scss'

function SideImage({src, isActive}) {
  return (
    <motion.div className={styles.imageContainer} variants={opacity} animate={isActive ? "open" : "closed"}>
        <Image
            src={src}
            fill={true}
            alt="image"
        />
    </motion.div>
  )
}

export default SideImage