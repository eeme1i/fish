import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-red-500 h-screen">
      <Head>
        <title>Porin Lukio - Viesti</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 text-white content-center font-mono xl:w-2/4 text-xl">
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
            className="hover:underline"
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
          <a className="hover:underline" href="https://github.com/eeme1i/fish">
            https://github.com/eeme1i/fish
          </a>
          <br />
          <br />
          <Link href="/home">
            <a className="hover:underline">- porinlukio.fi</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
