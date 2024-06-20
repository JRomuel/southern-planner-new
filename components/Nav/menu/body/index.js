import React from 'react'
import styles from './body.module.scss'
import Link from "next/link"
import { motion } from "framer-motion";
import { translate } from "../../anim";

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
    ];

    const getChar = (title) => {
        let chars = [];
        title.split("").forEach((char, index) => {
            chars.push(
                <motion.span custom={[index * 0.02, (title.length - index) * 0.01]} variants={translate} initial="initial" animate="enter" exit="exit" key={`c_${index}`}>
                    {char}
                </motion.span>
            )
        });

        return chars;
    }


    return (
        <div className={styles.body}>
             {
                links.map((link,index) => {
                    const { title, href } = link;
                    return <Link href={link} key={`l_${index}`}>
                        <p>{getChar(title)}</p>
                    </Link>
                })
             }
        </div>
    )
}

export default Body