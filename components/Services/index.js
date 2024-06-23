import React, {useRef} from 'react'
import styles from './services.module.scss'
import ParallaxImage from "../Misc/ParallaxImage"
import service_image_1 from '../../public/images/services_1.jpg'
import service_image_2 from '../../public/images/services_3.jpg'
export default function Services() {
  const container1 = useRef(null);
  const container2 = useRef(null);


  return (
    <div>
        <section className={`${styles.section} section`}>
            <div className="container">
                <div className={styles.contents}>
             
                    <div className={styles.r_content}>
                        <div ref={container2} className={styles.image_wrapper}>
                            <ParallaxImage src={service_image_1} container={container2} type="square" label='Services' label_position='right'/>
                        </div>
                    </div>

                    <div ref={container1} className={styles.l_content}>
                        <div className={styles.image_wrapper}>
                            <ParallaxImage src={service_image_2} container={container1}/>
                        </div>
                        <div className={styles.text_content}>
                            <h3 className={`${styles.title} section-title`}>We Gotcha Covered!</h3>
                            <div className={styles.comment}>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, repudiandae commodi labore officiis aut expedita quae explicabo impedit rem quos eos tempore voluptate mollitia eligendi temporibus ipsam nihil iusto harum!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
