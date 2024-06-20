import React from 'react'
import styles from './body.module.scss'
import Link from "next/link"

function Body() {
    const links = [
        {
            title: "About",
            link: "#",
            src: "images/about-image.jpg"
        },
        {
            title: "Weddings",
            link: "#",
            src: "images/services_1.jpg"
        },
        {
            title: "Services",
            link: "#",
            src: "images/services_1.jpg"
        },
        {
            title: "Happy Clients",
            link: "#",
            src: "images/services_2.jpg"
        },
        {
            title: "Book Now",
            link: "#",
            src: "images/services_2.jpg"
        },
    ]
    return (
        <div className={styles.body}>
             {
                links.map((link,index) => {
                    const { title, href } = link;
                    return <Link href={link} key={`l_${index}`}>
                        <p>{title}</p>
                    </Link>
                })
             }
        </div>
    )
}

export default Body