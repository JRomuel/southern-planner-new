import React, {useEffect, useState} from 'react'
import styles from './hero.module.scss'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

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
      if (typeof window !== "undefined") {
        if(window.innerWidth >= 1400){
          return 85;
        }else if(window.innerWidth >= 1200 && window.innerWidth < 1400){
          return 60;
        }else if(window.innerWidth >= 768 && window.innerWidth < 1200){
          return 36;
        }else{
          return 0;
        }
      }else{
        return 85;
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

    const animation = {
      initial: {y: "100%"},
      enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
    }
  
    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });
  

    const padding = useTransform(scrollYProgress, [0, 1], [0, pad]);

    return (
        <>
             <section ref={container} className={styles.hero}>
                <div ref={ref} className={styles.content}>
                    <div className={styles.bg}>
                    <video autoPlay playsInline muted loop>
                        <source src="./videos/Hero_Cluadia_720.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className={styles.text_content}>
                        <div className="container">
                            <div className="lineMask">
                              <motion.h1 variants={animation} initial="initial" animate={inView ? "enter" : ""}>Wedding Planner</motion.h1>
                            </div>
                            <p>LET’S PLAN YOUR BIG DAY, STRESS FREE!</p>
                        </div>
                    </div>
                    <motion.div className={styles.mask} style={{borderWidth: padding}}></motion.div>
                </div>
            </section>
        
        </>
   
    )
}
