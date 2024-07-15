import React, {useEffect, useState} from 'react'
import { motion } from "framer-motion"
import { height } from "../../Misc/anim"
import styles from './menu.module.scss'
import Body from "./body"
import SideImage from "./image"
import Footer from "./footer"

function Menu({closeNav}) {
  useEffect(() => {
      document.body.classList.add("no-scroll");
      document.body.dataset.lenisPrevent = "true";
      return ()=> {
        delete document.body.dataset.lenisPrevent;
        document.body.classList.remove("no-scroll");
      }
    
  }, []);

  const links = [
    { 
        title: "About",
        href: "#about",
        src: "/images/about-image.jpg"
    },
    {
        title: "Weddings",
        href: "#weddings",
        src: "/images/weddings-image.jpg"
    },
    {
        title: "Services",
        href: "#services",
        src: "/images/services_3.jpg"
    },
    {
        title: "Happy Clients",
        href: "#happy_clients",
        src: "/images/services_1.jpg"
    },
    {
        title: "Book Now",
        href: "#contact",
        src: "/images/services_4.jpg"
    },
  ];


  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0})

  return (
    <motion.div className={styles.menu} variants={height} initial="initial" animate="enter" exit="exit">
        <div className={styles.wrapper}>
            <div className={styles.menu_container}>
              <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} closeNav={closeNav}/>
              <Footer/>
            </div>
            <SideImage src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
        </div>

    </motion.div>
  )
}

export default Menu