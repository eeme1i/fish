import Footer from "../components/Footer";
import Header from "../components/Header";
import MekLinks from "../components/MekLinks";
import Head from "next/dist/shared/lib/head";
import MekLatex from "../components/MekLatex";

function Row({ text }) {
  return <a className="text-center">{text}</a>;
}

export default function Home() {
  return (
    <div className="bg-nord0 min-h-screen text-md">
      <Head>
        <title>Porin Lukio - Mek</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* add "suoraan lataamaan" btn on top and version info */}
      <div className="text-nord4 flex flex-col">
        <a className="text-nord3 p-2 text-xs text-center">
          Tämä sivu on vielä toistaiseksi työn alla
        </a>
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

        <div className=" flex flex-col pb-5 gap-5">
          {/* note: add arrows later for every step svg? */}
          <a className="mx-auto text-2xl">Esimerkki</a>
          <div className="flex flex-col gap-5">
            <a className="mx-auto underline">Näkymä matikkaeditorissa</a>
            <div className="pl-4 mx-auto text-2xl pb-5">
              {/* text size here resizes latex */}
              <MekLatex />
            </div>

            {/* add text area in future */}
            <span className="text-center underline">Kopioitu LaTeX-teksti</span>
            <span className="text-sm mx-auto text-center">
              \begin&#123;cases&#125; \frac&#123;3&#125;&#123;4&#125;x+y&=y^2\\
              <br />
              \ln 5+\log _53x&=\sqrt&#123;x^3&#125;\\
              <br />
              \sin \left(4\right)+\sqrt[3]&#123;4y&#125;&=9 \cdot
              e^&#123;\ln4&#125;
              <br /> \end&#123;cases&#125;
            </span>
            <div className="flex flex-col text-center">
              <span className="underline">
                Matikkaeditorinkääntäjän lopputulos
              </span>
              <span className="text-sm">(voi syöttää suoraan laskimeen)</span>
            </div>

            <span className="text-sm text-center">
              system(((3)/(4))*x+y=y^(2),
              <br />
              ln(5)+log(3*x,5)=√(x^(3)),
              <br />
              sin(4)+root(4*y,3)=9*e^(ln(4)))
            </span>

            <span className="underline text-center">
              Kaikki toimii kuin rasvattu!
            </span>
            <span className="text-center text-sm w-2/3 mx-auto 2xl:w-1/3">
              Kokeile vaikka kopioimalla LaTeX haluamaasi matikkaeditoriin ja
              lopputulos haluamaasi laskentaohjelmistoon. (suositus: Ti-nspire)
              Matikkaeditorinkääntäjä toimii haluttaessa vain yhden napin
              painalluksella!
            </span>
          </div>
        </div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-5">
          <a className="mx-auto text-2xl">Miksi?</a>
          <Row text="Pitkiä laskentakaavoja on uuvuttava kirjoittaa matikkaeditorista laskentaohjelmistoon. Nyt se hoituu automaattisesti!"></Row>
          <Row text="Oppitunneilla tulee vähemmän näpyttelyvirheitä, kun kaavoja ei tarvitse siirtää käsin."></Row>
        </div>

        <div className="flex flex-col w-2/3 mx-auto gap-2 pb-5">
          <a className="mx-auto text-2xl">Yleistä</a>
          <Row text="Toimii Windows 7/8.1/10/11 käyttöjärjestelmillä"></Row>
          <Row text="Suunniteltu Ti-nspirelle ja Ytl:n matikkaeditorille"></Row>
          <Row text="Täysin ilmainen!"></Row>
          <Row text="Porilaista alkuperää"></Row>
        </div>
      </div>

      <MekLinks />
      <Footer />
    </div>
  );
}
