import React, { useRef } from 'react'
import about_image from "../../public/images/about-image-new-2.jpg"
import styles from './about.module.scss'
import ParallaxImage from "../Misc/ParallaxImage";


export default function About() {
  const container = useRef(null);

  return (
    <section ref={container} id="about" className="section">
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.image_wrapper}>
              <ParallaxImage src={about_image} container={container} label='Who we are?' label_position='left' alt='Southern Planners'/>
            </div>
            <div className={styles.text_content}>
                <h3 className={`${styles.title} section-title`}>Southern Planners</h3>
                <p>SEstablished in 2018, Southern Planners is passionate about working with couples because we believe in the magic of bringing love stories to life. The privilege of being part of your special day and ensuring every detail is perfect fuels our dedication. We are excited to collaborate with you to turn your vision into reality. At Southern Planners, we are committed to helping you achieve all your goals for your special day.
                <br /><br />
                <strong>Your Perfect Day, Perfectly Planned.</strong></p>
            </div>
          </div>

        </div>
    </section>
  )
}
