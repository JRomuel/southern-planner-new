import React, {useEffect} from 'react'
import { motion } from "framer-motion"
import { height } from "../anim"
import styles from './menu.module.scss'
import Body from "./body"

function Menu() {
  useEffect(() => {
      document.body.classList.add("no-scroll");
      document.body.dataset.lenisPrevent = "true";
      return ()=> {
        delete document.body.dataset.lenisPrevent;
        document.body.classList.remove("no-scroll");
      }
    
  }, []);
  return (
    <motion.div className={styles.menu} variants={height} initial="initial" animate="enter" exit="exit">
        <div className={styles.wrapper}>
            <div className={styles.menu_container}>
              <Body/>
              {/* <Footer/> */}
            </div>
            {/* <Image/> */}
        </div>

    </motion.div>
  )
}

export default Menu