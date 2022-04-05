import Footer from "../components/Footer";
import Header from "../components/Header";
import MekLinks from "../components/MekLinks";
import Head from "next/dist/shared/lib/head";

function Row({ text }) {
  return <a>&ndash; {text}</a>;
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
        <a className="mx-auto py-5 text-5xl underline">
          Matikkaeditorinkääntäjä
        </a>
        <div className="flex flex-col w-sm mx-auto">
          <a>Mikä?</a>
          <Row text="kääntää matemaattisen LaTeX -tekstin laskentaohjelmistolle sopivaan muotoon"></Row>
        </div>
      </div>

      <MekLinks />
      <Footer />
    </div>
  );
}
