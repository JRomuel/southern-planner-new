import React, { useRef } from 'react'
import about_image from "../../public/images/about-image.jpg"
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
                <h3 className={`${styles.title} section-title`}>Southern Planner's</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
          </div>

        </div>
    </section>
  )
}
