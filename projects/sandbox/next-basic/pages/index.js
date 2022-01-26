import Head from 'next/head' //allows adding to head
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return ( 
    //wrap in blank parent element because only one can be returned
    <> 
      <Head>
        <title>Simple Next.js App</title>
      </Head>

      <div className={styles.container}>
        
      </div>
    </>
  )
}
