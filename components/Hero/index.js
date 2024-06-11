import React, {useEffect, useState} from 'react'
import styles from './hero.module.scss'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';


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


export default function Hero() {
    
    const checkWindoWidth = () => {
        if(window.innerWidth >= 1400){
            return 85;
          }else if(window.innerWidth >= 1200 && window.innerWidth < 1400){
            return 60;
          }else if(window.innerWidth >= 768 && window.innerWidth < 1200){
            return 36;
          }else{
            return 0;
          }
      }; 

    const [pad, setpad] = useState(checkWindoWidth());


    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setpad(checkWindoWidth());
        }, 1000);
    
        window.addEventListener("resize", debouncedHandleResize);
        return () => {
          window.removeEventListener("resize", debouncedHandleResize);
        };
      });

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })


    const padding = useTransform(scrollYProgress, [0, 1], [0, pad]);

    return (
        <>
             <section ref={container} className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.bg}>
                    <video autoPlay playsInline muted loop>
                        <source src="./videos/Hero_Cluadia_720.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className={styles.text_content}>
                        <div className="container">
                            <h1>Wedding Planner</h1>
                            <p>LET’S PLAN YOUR BIG DAY, STRESS FREE!</p>
                        </div>
                    </div>
                    <motion.div className={styles.mask} style={{borderWidth: padding}}></motion.div>
                </div>
            </section>
        
        </>
   
    )
}
