import React from 'react'
import Image from "next/image"
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './parallax_image.module.scss'


export default function ParallaxImage({src, container, alt, label, label_position, type, custom_speed }) {

  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
  })
  const speed = useTransform(scrollYProgress, [0, 1], [0, custom_speed ?? 200]);

  return (
    <div className={`${styles.parallax_image} ${label ? styles.with_label : ''} ${label_position ? (label_position == 'left' ? styles.left_label :  styles.right_label) : ''} ${type ? (type == 'square' ? styles.square_type : '' ) : ''}` }>
        { label ? <div className={styles.label}><span>{label}</span></div> : ''}
     
        <figure className={styles.figure}>
          <motion.div 
            style={{scale: 1.4, y: speed}} 
            className={styles.image_wrapper}>
            <Image 
                className={styles.image}
                src={src} 
                placeholder="blur"
                alt={alt}/>
          </motion.div>
        </figure>
    </div>
  )
}
