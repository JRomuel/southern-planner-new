import React, {useRef} from 'react'
import styles from './services.module.scss'
import ParallaxImage from "../Misc/ParallaxImage"
import service_image_1 from '../../public/images/services_1.jpg'
import service_image_2 from '../../public/images/services_3.jpg'
import { PiFlowerTulip } from "react-icons/pi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { PiCalendarCheck } from "react-icons/pi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { RiCake3Line } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi2";
import { TbReportMoney } from "react-icons/tb";
import { PiDress } from "react-icons/pi";




export default function Services() {
  const container1 = useRef(null);
  const container2 = useRef(null);


  return (
    <div>
        <section id="services" className={`${styles.section} section`}>
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
                            <div className={styles.list}>
                                <ul>
                                    <li><span className={styles.icon}><PiFlowerTulip /></span> Creating a Bouquet</li>
                                    <li><span className={styles.icon}><PiCalendarCheck /></span> Day Of Coordination</li>
                                    <li><span className={styles.icon}><LiaEnvelopeOpenTextSolid /></span> Guests & Invitations</li>
                                    <li><span className={styles.icon}><MdOutlineAddAPhoto /></span> Photo Booth</li>
                                </ul>

                                <ul>
                                    <li><span className={styles.icon}><RiCake3Line /></span> Caterers and Desserts</li>
                                    <li><span className={styles.icon}><HiOutlineTruck /></span> Secure Supplier </li>
                                    <li><span className={styles.icon}><TbReportMoney /></span> Creating a budget</li>
                                    <li><span className={styles.icon}><PiDress /></span> Choosing a style</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
