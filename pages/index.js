import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>

    <div className='font-sans'>

      <div className=''>
        <div>
          <Link href="/login">
            <a className=''>
            kirjautumissivu
            </a>
          </Link>
        </div>
        <div>
          <Link href="/message">
            <a className=''>
            viesti
            </a>
          </Link>
        </div>
        <div>
          <Link href="/treasureHunt">
            <a className=''>
              aarrejahtipeli
            </a>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
