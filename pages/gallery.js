import Head from "next/head";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div className="bg-nord0 min-h-screen w-full text-nord4">
      <Head>
        <title>Porinlukio - Galleria</title>
        <meta name="description" content="Otteita oppitunneilta" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <p className="w-min mx-auto text-5xl underline p-10">Galleria</p>
      <div className=" w-3/4 md:max-w-4xl mx-auto flex flex-col  space-y-4 py-4 min-h-screen">
        <p className="underline text-3xl">Uudet</p>
        <p>
          Eräs äidinkielenopettaja: Kirja on huono käyttöliittymä. Hipelöin
          usein kirjoja.
        </p>

        <p className="underline text-3xl">Vanhat</p>

        <p className="">
          Nyt [oppilas] se peli pois, tai pääset seuraavaksi käytävään pelaamaan
          <br />
          -Nimeltä mainitsematon opo 16.2.2022
        </p>
        <p>
          Kirjoittakaapa tällanen 10 000 merkin essee huomiseksi
          <br />
          -Joku äidinkielenopettaja, aina
        </p>
        <p>
          <span className="text-lg">Tuntimerkintä, Oppitunnin häirintä</span>
          <br />
          Tiedoksi kotiväelle, [opettaja] kälätti tänään matematiikan tunnilla
          niin paljon, että kukaan ei pystynyt opiskelemaan. Toivomme teidän
          keskustelevan asiasta kotona [opettajan] kanssa, ettei sama toistuisi.
          <br />
          -Terveisin, vittuntunut lukiolainen
        </p>
        <p>
          [oppilas]! Riisu!
          <br />
          -Ruotsintunnilla
        </p>
        <p>
          Nyt mää kyllä tarttisin jonkun lampun teijän pään päälle, että mää
          näkisin, että syttyykö se, vai sammuuko lopullisesti.
          <br />
          -Matikka 12
        </p>
        <p>(eräät) nimet sensuroitu yksityisyyden suojaamiseksi</p>
      </div>
      <Footer />
    </div>
  );
}
