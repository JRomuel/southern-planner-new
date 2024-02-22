'use client';
import styles from './page.module.scss'
import { useRef } from 'react';
import Header from '../components/header';
import StickyCursor from '../components/stickyCursor';

export default function Home() {


  return (
    <main className={styles.main}>
      <Header/>
      <StickyCursor/>
    </main>
  )
}