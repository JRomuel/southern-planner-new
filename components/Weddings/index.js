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
                <p className={styles.sub_text}>Planning a wedding can be quite the adventure, and one standout experience was organizing three weddings in one day. Despite facing challenges such as weather issues, power interruptions, and last-minute changes, we stayed calm and ensured everything ran smoothly. Working with these couples was amazing, as their love and commitment made the celebrations stunning and unforgettable. It was a privilege to support them and see their love come to life so beautifully.</p>
    
                <ParallaxImage src={weddings_image} container={container} alt='Southern Planners'/>

            </div>
            <div className={styles.right_content}>
                <div style={{marginBottom: '70px'}}>
                    <ParallaxImage src={weddings_image_2} container={container} label='Weddings' label_position='right' alt='Southern Planners'/>
                </div>
                <p>From the moment I met Tantine and Cha, I could tell their wedding was destined to be extraordinary. Their vision was clear: a celebration of love, laughter, and the unique bond they share.Their Filipina-themed wedding exuded elegance, romance, and a cozy, homey atmosphere. Every element, from the stunning floral designs to the personal touches, showcased their unique personalities and the strong connection they share. It has been a true privilege to help bring their dream wedding to life and to see the genuine happiness on their faces as they began this new chapter together.</p>
                <motion.div className={styles.floating_text} style={{x: '-50%', y: speed}}>
                  <span>Wedding Collections</span>
                </motion.div>
            </div>
          </div>

        </div>
    </section>
  )
}
