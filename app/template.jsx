'use client'

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Nav from "../components/Nav"
import Lenis from '@studio-freight/lenis'
import Asides from "../components/Asides"
import StickyCursor from "../components/cursor"
import Loader from "../components/Loader"


export default function Template({ children }) {

    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        setTimeout( () => {
          setLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0,0);
        }, 1000)
    }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && <Loader/>}
      </AnimatePresence>
      <StickyCursor/>
      <Nav/>
      <Asides/>
      {children}
    </>




  
  )
}