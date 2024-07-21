'use client'
import localFont from 'next/font/local'
import { Poppins, Playfair_Display } from 'next/font/google'
import Head from "../components/Head"
import './globals.css'


// Font files can be colocated inside of `pages`
const breathing = localFont({ 
  src: '../public/fonts/Breathing.ttf',
  variable: '--breathings-font',
})


const poppins =  Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair_Display =  Playfair_Display({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
  //👇 Add variable to our object
  variable: '--playfair-display-font',
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head/>
      <body className={`${poppins.className} ${playfair_Display.variable} ${breathing.variable}`}>
        {children}        
      </body>
    </html>
  )
}
