import React, {useRef} from 'react'
import styles from './happyclients.module.scss'
import ParallaxImage from "../Misc/ParallaxImage"
import client_image_1 from '../../public/images/client_1.jpg'
import client_image_2 from '../../public/images/client_2.jpg'
import client_image_3 from '../../public/images/client_3.jpg'

export default function HappyClients() {
const container = useRef(null);
const container2 = useRef(null);
const container3 = useRef(null);

  return (
    <div>
        <section className={`${styles.section} section`}>
            <div className="container">
                <div ref={container} className={`${styles.review} ${styles.review_1}`}>
                    <div className={styles.image_wrapper}>
                        <ParallaxImage src={client_image_2} container={container} type="square"/>
                    </div>
                    
                    <div className={styles.text_content}>
                        <h3 className={`${styles.title} section-title`}>Happy Clients</h3>
                        <div className={styles.comment}>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae commodi labore officiis aut expedita quae explicabo impedit rem quos eos tempore voluptate mollitia eligendi temporibus ipsam nihil iusto harum!</p>
                        </div>
                   
                    </div>
                </div>
                <div className={styles.comment_below}>
                    <div ref={container2} className={`${styles.review} ${styles.review_2}`}>
                        <div className={styles.image_wrapper}>
                            <ParallaxImage src={client_image_1} container={container2} type="square"  custom_speed="100"/>
                        </div>
                        <div className={styles.comment}>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae commodi labore </p>
                        </div>
                    </div>
                    <div ref={container3} className={`${styles.review} ${styles.review_3}`}>
                        <div className={styles.image_wrapper}>
                            <ParallaxImage src={client_image_3} container={container3} type="square"/>
                        </div>
                        <div className={styles.comment}>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae commodi labore officiis aut expedita</p>
                        </div>
                    </div>
                </div>
       
            </div>
        </section>
  
    </div>
  )
}
