import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LeftNav from './Components/LeftNav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="DASHBOARD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<LeftNav />

    </div>
  )
}
