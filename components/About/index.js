import React, { useRef } from 'react'
import about_image from "../../public/images/about-image-new.jpeg"
import styles from './about.module.scss'
import ParallaxImage from "../Misc/ParallaxImage";


export default function About() {
  const container = useRef(null);

  return (
    <section ref={container} className="section">
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.image_wrapper}>
              <ParallaxImage src={about_image} container={container} label='Who we are?' label_position='left' alt='Southern Planners'/>
            </div>
            <div className={styles.text_content}>
                <h3 className={`${styles.title} section-title`}>Southern Planners</h3>
                <p>Southern Planners was stablished since 2018, we adore working with couples because we believe in the magic of love stories coming to life. The privilege of being part of your special day, ensuring every detail is perfect, is what drives our passion.
                <br /><br />
                We’re excited to collaborate with you to turn your vision into reality. Southern Planners are here to help you accomplish whatever goals you have for your special day.</p>
            </div>
          </div>

        </div>
    </section>
  )
}
