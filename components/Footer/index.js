import React from 'react'
import styles from './footer.module.scss'
import { AiFillFacebook, AiFillInstagram  } from "react-icons/ai";
import Image from "next/image";
import partners_balar from "../../public/images/partner-balar.png"
import partners_raza from "../../public/images/partner-raza.png"
import partners_rrc from "../../public/images/partner-rrc.png"

export default function Footer() {
  return (
    <footer className={styles.section}>
        <div className={styles.sticky}>
          <div className={styles.stick_wrapper}>
              <div className="container">
                <div className={styles.content_wrapper}>
                    <div className={styles.brand}>
                        <p className={styles.title}>Southern Planners</p>
                        <p className={styles.sub_text}>Event Planner and Stylist</p>
                    </div>
                    <div className={styles.contact_wrapper}>
                        <div className={styles.contact_details}>
                          <p className="mb-4"><strong>Address</strong></p>
                          <p>Buliasnin, Boac, Marinduque</p>
                        </div>
                        <div className={styles.contact_details}>
                          <p className="mb-4"><strong>Contact</strong></p>
                          <p>+63 9634146451</p>
                          <p><a href="mailto:thesouthernplanners@gmail.com">thesouthernplanners@gmail.com</a></p>
                        </div>
                        <div className={styles.contact_details}>
                          <p className="mb-4"><strong>Follow</strong></p>
                          <ul>
                            <li><a href="https://www.facebook.com/southernplanners" target="_blank"><AiFillFacebook/></a></li>
                            <li><a href="https://www.instagram.com/the_southern_planners/" target="_blank"><AiFillInstagram/></a></li>
                          </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.bottom_spacer}>

            </div>
          </div>
        </div>

    </footer>
  )
}
