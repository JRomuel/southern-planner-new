import React, { useRef } from 'react'
import ParallaxImage from "../Misc/ParallaxImage"
import styles from './weddings.module.scss'
import weddings_image from "../../public/images/about-image.jpg"
import weddings_image_2 from "../../public/images/wedding-image-2.jpg"
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Weddings() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
  })
  const speed = useTransform(scrollYProgress, [0, 1], [0, -150]);


  return (
    <section id="weddings" ref={container} className="section">
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.left_content}>
                <h3 className={`${styles.title} section-title`}>Memorable Weddings</h3>
                <p className={styles.sub_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
    
                <ParallaxImage src={weddings_image} container={container} alt='Southern Planners'/>

            </div>
            <div className={styles.right_content}>
                <div style={{marginBottom: '70px'}}>
                    <ParallaxImage src={weddings_image_2} container={container} label='Weddings' label_position='right' alt='Southern Planners'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                <motion.div className={styles.floating_text} style={{x: '-50%', y: speed}}>
                  <span>Wedding Collections</span>
                </motion.div>
            </div>
          </div>

        </div>
    </section>
  )
}
