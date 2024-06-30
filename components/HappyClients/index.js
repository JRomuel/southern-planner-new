import React, {useRef} from 'react'
import styles from './happyclients.module.scss'
import ParallaxImage from "../Misc/ParallaxImage"
import client_image_1 from '../../public/images/happy-clients-6.jpg'
import client_image_2 from '../../public/images/client_4.jpeg'
import client_image_3 from '../../public/images/happy-clients-7.jpeg'

export default function HappyClients() {
const container = useRef(null);
const container2 = useRef(null);
const container3 = useRef(null);

  return (
    <div>
        <section id="happy_clients" className={`${styles.section} section`}>
            <div className="container">
                <div ref={container} className={`${styles.review} ${styles.review_1}`}>
                    <div className={styles.image_wrapper}>
                        <ParallaxImage src={client_image_2} container={container} type="rectangle"/>
                    </div>
                    
                    <div className={styles.text_content}>
                        <h3 className={`${styles.title} section-title`}>Happy Clients</h3>
                        <div className={styles.comment}>
                            <p>... Everything went well that day despite of the weather condition and we really appreciate everything that you guys did for us. Nakapaka hands on po. ❤️Especially sa nagassisst sa akin. Another thing po was may bouquet it was so beautiful same with the boutonniere and mini bouquets for the whole entourage.. Super love ko 💐💐 plus free wedding car bouquet. Thank you. I will be sure to recommend you to others in the future!</p>
                        </div>
                   
                    </div>
                </div>
                <div className={styles.comment_below}>
                    <div ref={container2} className={`${styles.review} ${styles.review_2}`}>
                        <div className={styles.image_wrapper}>
                            <ParallaxImage src={client_image_1} container={container2} type="square" />
                        </div>
                        <div className={styles.comment}>
                            <p>Thank you so much Mam Hecel ang Southern Planners Team!!! ♥️♥️♥️ Beyond expectations 💯 Highly recommend ⭐️⭐️⭐️⭐️⭐️ worry and stress free talaga 😍😍😍 </p>
                        </div>
                    </div>
                    <div ref={container3} className={`${styles.review} ${styles.review_3}`}>
                        <div className={styles.image_wrapper}>
                            <ParallaxImage src={client_image_3} container={container3} type="square"/>
                        </div>
                        <div className={styles.comment}>
                            <p>Hello po Ma'am Hecel and team maraming salamat po sa inyong assistance sa aming wedding. Achieve na achieve ang stress free na bride at groom. Kakakilig para kaming artista haha. 🩷🩷🩷 </p>
                        </div>
                    </div>
                </div>
       
            </div>
        </section>
  
    </div>
  )
}
