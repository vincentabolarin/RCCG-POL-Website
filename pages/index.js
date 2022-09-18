import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RCCG, Path of Lfie</title>
        <meta name="description" content="Website of RCCG, Path of Life Parish" />
        <link rel="icon" href="/rccg-logo.png" />
      </Head>
      
      <Navbar />
    </div>
  )
}
