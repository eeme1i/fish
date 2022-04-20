import Footer from "../components/Footer";
import Header from "../components/Header";
import MekLinks from "../components/MekLinks";
import Head from "next/dist/shared/lib/head";
import Breaker from "../components/Breaker";
import LatexExample from "../components/LatexExample";

function Row({ text }) {
  return <a className="text-center">{text}</a>;
}

export default function Home() {
  return (
    <div className="bg-nord0 min-h-screen text-md">
      <Head>
        <title>Porin Lukio - Mek</title>
        <meta
          name="description"
          content="Matikkaeditorinkääntäjä on ohjelmisto, joka kääntää matemaattisen LaTeX-tekstin laskentaohjelmistolle sopivaan muotoon. 
                  Korvaamaton apu lukiolaiselle fysiikkaan ja matematiikkaan!"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      {/* add "suoraan lataamaan" btn on top and version info */}
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
          <Row text="Matikkaeditorinkääntäjä on ohjelmisto, joka kääntää matemaattisen LaTeX-tekstin laskentaohjelmistolle sopivaan muotoon." />
          <Row text="Se on tarkoitettu lukiolaisten käyttöön ja sopii erityisen hyvin pitkään matematiikkaan ja fysiikkaan, joissa käytetään paljon pitkiä kaavoja." />
        </div>

        <LatexExample />

        <div className="w-1/2 mx-auto pt-5 pb-8">
          <Breaker />
        </div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-8">
          <a className="mx-auto text-2xl">Miksi?</a>
          <Row text="Pitkiä laskentakaavoja on uuvuttavaa kirjoittaa matikkaeditorista laskentaohjelmistoon." />
          <Row text="Nyt se hoituu automaattisesti!" />
          <Row text="Oppitunneilla tulee vähemmän näpyttelyvirheitä, kun kaavoja ei tarvitse siirtää käsin." />
        </div>

        <div className="w-1/2 mx-auto pb-5">
          <Breaker />
        </div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-5">
          <a className="mx-auto text-2xl">Yleistä</a>
          <Row text="Toimii Windows 7/8.1/10/11 käyttöjärjestelmillä" />
          <Row text="Suunniteltu erityisesti Ti-Nspirelle ja Ytl:n matikkaeditorille" />
          <Row text="Täysin ilmainen!" />
          <Row text="Porilaista alkuperää" />
        </div>
      </div>

      <div className="w-1/2 mx-auto py-4">
        <Breaker />
      </div>

      <MekLinks />
      <div className="w-1/2 mx-auto pt-4 pb-8">
        <Breaker />
      </div>
      <Footer />
    </div>
  );
}
