import React, {useEffect, useState} from 'react'
import Image from "next/image"
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './parallax_image.module.scss'

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}


export default function ParallaxImage({src, container, alt, label, label_position, type, custom_speed }) {

    
  const checkWindoWidth = () => {

      if (typeof window !== "undefined") {
        if(window.innerWidth >= 1400){
          return 200;
        }else if(window.innerWidth >= 1200 && window.innerWidth < 1400){
          return 150;
        }else if(window.innerWidth >= 768 && window.innerWidth < 1200){
          return 100;
        }else{
          return 100;
        }
      }else{
        return 200;
      }
  }; 

const [spd, setspd] = useState(checkWindoWidth());


useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
        setspd(checkWindoWidth());
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const { scrollYProgress } = useScroll({
      layoutEffect: false,
      target: container,
      offset: ['start end', 'end start']
  })
  const speed = useTransform(scrollYProgress, [0, 1], [0, custom_speed ?? spd]);

  return (
    <div className={`${styles.parallax_image} ${label ? styles.with_label : ''} ${label_position ? (label_position == 'left' ? styles.left_label :  styles.right_label) : ''} ${type ? (type == 'rectangle' ? styles.rectangle_type : '' ) : ''} ${type ? (type == 'square' ? styles.square_type : '' ) : ''}` }>
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
