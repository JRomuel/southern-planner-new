import React from 'react'
import styles from './asides.module.scss'

export default function Asides() {
  return (
    <>
        <aside className={`${styles.laside} ${styles.aside}`}>
            <a className={styles.aside_content} href="#about">
                <span className={styles.aside_link}><span><strong><span className="primary-color-accent">#</span></strong>SouthernPlanners</span></span>
            </a>
        </aside>
        <aside className={`${styles.raside} ${styles.aside}`}>
            <a className={styles.aside_content} href="#contact">
                <span className={styles.aside_link}><span><strong><span className="primary-color-accent">#</span></strong>BookNow</span></span>
            </a>
        </aside>
    </>
  )
}
