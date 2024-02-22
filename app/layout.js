'use client'
import localFont from 'next/font/local'
import { Poppins, Great_Vibes } from 'next/font/google'
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

const great_vibes =  Great_Vibes({
  subsets: ['latin'],
  weight: ["400"],
  //👇 Add variable to our object
  variable: '--greate-vibes-font',
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${poppins.className} ${great_vibes.variable} ${breathing.variable}`}>
        {children}        
      </body>
    </html>
  )
}
