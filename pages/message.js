import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer.js";


export default function Home() {
  return (
    <div className='bg-red-500 min-h-screen w-full '>
      <Head>
        <title>Porin Lukio - Viesti</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-row min-h-screen'>
        <div className="p-8 text-white content-center font-mono w-2/3 md:w-1/2 text-xl">
          <p className="">
            Olisit juuri voinut lähettää sähköpostiosoitteesi ja salasanasi
            hakkerille. Meitä se ei kuitenkaan kiinnosta, mutta toivoisimme, että
            pitäisitte paremmin huolta tietoturvastanne.
            <br />
            <br />
            Ainoa oikea kirjautumissivu on{" "}
            <span className="underline">pori.fi</span>
            <br />
            <br />
            Tietojen kalastelulta suojautuminen:{" "}
            <a
              className="hover:underline  break-words"
              href="https://support.microsoft.com/fi-fi/windows/tietojen-kalastelulta-suojautuminen-0c7ea947-ba98-3bd9-7184-430e1f860a44"
            >
              https://support.microsoft.com/fi-fi/windows/tietojen-kalastelulta-suojautuminen-0c7ea947-ba98-3bd9-7184-430e1f860a44
            </a>
            <br />
            <br />
            Tämä sivusto ei kerää tai tallenna minkäänlaista dataa sinusta.
            <br />
            <br />
            Sivuston lähdekoodi:{" "}
            <a className="hover:underline break-words" href="https://github.com/eeme1i/fish">
              https://github.com/eeme1i/fish
            </a>
            <br />
            <br />
            <Link href="/home">
              <a className="hover:underline">- porinlukio.fi</a>
            </Link>
          </p>
        </div>

        <div className='md:w-1/2 w-1/3 flex flex-col'>
          <div className=' w-full'>
            <div className='flex flex-col md:flex-row mx-auto max-w-2xl'>
              <div className="w-5/6 max-w-xs  mx-auto">
                  <div className="aspect-h-4 aspect-w-5 bg-[url('/images/tulee20e.png')] bg-cover"></div>
              </div>
              <div className=" w-5/6 max-w-xs mt-10 mx-auto">
                  <div className="aspect-h-4 aspect-w-5 bg-[url('/images/mo-es.png')] bg-cover"></div>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-10 max-w-3xl w-5/6 '>
              <div className="aspect-h-4 aspect-w-7 bg-[url('/images/chad04.png')] bg-cover"/>
            </div>
        </div>
      </div>

      <div className='h-10'/> {/* set a gap between */}
      <Footer/>
      <p className='mx-auto w-32 text-red-400'>nice footer thou</p>
    </div>
  );
}
