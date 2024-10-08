import React from 'react'
import styles from './letstalk.module.scss'

export default function LetsTalk() {
  return (
    <>
    <section id="contact" className={`${styles.section} section`}>
        <div className="container">
            <div className={styles.content}>
                <h3 className={`${styles.title} section-title`}>Are you ready to plan your special day?</h3>
                <p className={styles.sub_text}>We will handle everything from event planning to the day of your wedding</p>
                <a href="https://calendly.com/thesouthernplanners/book-a-meeting-with-us" target="_blank" className={styles.contact_btn}>Lets Talk</a>
            </div>
        </div>
    </section>
    </>
  )
}
