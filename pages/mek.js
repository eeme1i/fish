import Footer from "../components/Footer";
import Header from "../components/Header";
import MekLinks from "../components/MekLinks";
import Head from "next/dist/shared/lib/head";

function Row({ text }) {
  return <a className="text-center">{text}</a>;
}

export default function Home() {
  return (
    <div className="bg-nord0 min-h-screen">
      <Head>
        <title>Porin Lukio - Mek</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="text-nord4 flex flex-col">
        <div className="h-28 py-5 text-5xl">
          <div className="absolute w-full flex">
            <a className="mx-auto underline visible md:invisible">MEK</a>
          </div>
          <div className="absolute w-full flex">
            <a className="mx-auto underline break-all invisible md:visible">
              Matikkaeditorinkääntäjä
            </a>
          </div>
        </div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-5">
          <a className="mx-auto text-2xl">Mikä?</a>
          <Row text="Matikkaeditorinkääntäjä on ohjelmisto, joka kääntää matemaattisen LaTeX-tekstin laskentaohjelmistolle sopivaan muotoon."></Row>
          <Row text="Se on tarkoitettu lukiolaisten käyttöön ja sopii erityisen hyvin pitkään matematiikkaan ja fysiikkaan, joissa käytetään paljon pitkiä kaavoja."></Row>
        </div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-5">
          <a className="mx-auto text-2xl">Miksi?</a>
          <Row text="Pitkiä laskentakaavoja on uuvuttava kirjoittaa matikkaeditorista laskentaohjelmistoon. Nyt se hoituu automaattisesti!"></Row>
          <Row text="Oppitunneilla tulee vähemmän näpyttelyvirheitä, kun kaavoja ei tarvitse siirtää käsin."></Row>
        </div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-5">
          <a className="mx-auto text-2xl">Yleistä</a>
          <Row text="Toimii Windows 7/8.1/10/11 käyttöjärjestelmillä"></Row>
          <Row text="Täysin ilmainen"></Row>
          <Row text="Porilaista alkuperää"></Row>
        </div>
      </div>

      <MekLinks />
      <Footer />
    </div>
  );
}
