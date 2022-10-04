import Footer from "../components/Footer";
import Header from "../components/Header";
import MekLinks from "../components/MekLinks";
import Head from "next/dist/shared/lib/head";
import Breaker from "../components/Breaker";
import LatexExample from "../components/LatexExample";
import DownLoadLink from "../components/DownloadLink";

// this link starts download of mek 3.1.7
const MekDownloadUrl =
  "https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/archive/refs/tags/v3.1.7.zip";

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
          <Row text="Matikkaeditorinkääntäjä kääntää matemaattisen LaTeX-tekstin laskentaohjelmistolle sopivaan muotoon." />
          <Row text="Erityisesti pitkään matematiikkaan ja fysiikkaan, joissa käytetään paljon pitkiä kaavoja." />
        </div>
        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-8">
          <a className="mx-auto text-2xl">Miksi?</a>

          <Row text="Pitkiä laskentakaavoja on uuvuttavaa kirjoittaa matikkaeditorista laskentaohjelmistoon." />
          <Row text="Oppitunneilla tulee vähemmän näpyttelyvirheitä, kun kaavoja ei tarvitse siirtää käsin." />
          <Row text="Nyt se hoituu automaattisesti!" />
        </div>
        <div className="bg-gray-800 my-8 mx-auto w-2/3 p-0.5 max-w-2xl">
          <div className="bg-nord3 md:flex p-5 space-y-5 md:space-y-0">
            <div className="my-auto mx-5 text-center">
              <a className="">Lataa Matikkaeditorinkääntäjä v3.1.7 (Windows)</a>
            </div>
            <div className="ml-auto ">
              <DownLoadLink text="Lataa (zip)" url={MekDownloadUrl} />
            </div>
          </div>
        </div>

        <div className="my-10">
          <LatexExample />
        </div>

        <div className="mx-auto w-1/2 h-1 mt-6 mb-10 bg-nord3"></div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-5">
          <a className="mx-auto text-2xl">Yleistä</a>
          <Row text="Toimii Windows 7/8.1/10/11 käyttöjärjestelmillä" />
          <Row text="Suunniteltu erityisesti Ti-Nspirelle ja Ytl:n matikkaeditorille" />
          <Row text="Täysin ilmainen!" />
          <Row text="Porilaista alkuperää" />
        </div>
      </div>

      <div className="mx-auto w-1/2 h-1 mt-6 mb-10 bg-nord3"></div>

      <MekLinks />
      <div className="w-1/2 mx-auto pt-4 pb-8">
        <Breaker />
        <Footer />
      </div>
    </div>
  );
}
