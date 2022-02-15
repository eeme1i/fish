import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-nord0 h-screen">
      <Head>
        <title>Porin Lukio - Home</title>
        <meta name="description" content="Porin Lukion (epä)viralliset kotisivut" />
        <link rel="icon" href="" />
      </Head>
      <Header />

      <div className='font-sans w-3/4 md:max-w-4xl m-auto'>
        <div className='m-8'>
          <h1 className='text-4xl font-bold text-nord4'>Porin Lukio</h1>
        </div>
        <div className='my-16 text-xl font-bold flex justify-center space-x-8 text-nord4'>
          <div className='hover:scale-110 transition ease-in-out hover:bg-nord3'>
            <Link className="" href="/login">
              <a className='px-8 py-8 bg-nord1 rounded-2xl transition ease-in-out hover:bg-nord3'>
              kirjautumissivu
              </a>
            </Link>
          </div>
          <div className='hover:scale-110 transition ease-in-out hover:bg-nord3'>
            <Link className="" href="/treasureHunt">
              <a className='px-8 py-8 bg-nord1 rounded-2xl transition ease-in-out hover:bg-nord3'>
              aarrejahtipeli
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// test commit
