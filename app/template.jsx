'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Nav from "../components/Nav"
import Lenis from '@studio-freight/lenis'
import Asides from "../components/Asides"
import StickyCursor from "../components/StickyCursor"

export default function Template({ children }) {

    useEffect( () => {
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
        <StickyCursor/>
        <Nav/>
        <Asides/>
      {children}
    </motion.div>
  )
}