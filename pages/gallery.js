import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div className="bg-nord0 min-h-screen w-full text-nord4">
      <Header />
      <p className="w-min mx-auto text-5xl underline p-10">Galleria</p>
      <div className=" w-3/4 md:max-w-4xl mx-auto flex flex-col  space-y-4 py-4 min-h-screen">
        <p className="">
          "Nyt Tuomas se peli pois, tai pääset seuraavaksi käytävään pelaamaan"
          <br />
          -Hanna välimäki 16.2.2022
        </p>
        <p>
          "Kirjoittakaapa tällanen 10 000 merkin essee huomiseksi" <br />
          -Kava, aina
        </p>
      </div>
      <Footer />
    </div>
  );
}
