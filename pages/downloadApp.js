import Head from "next/dist/shared/lib/head";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-blue-300">
      <Head>
        <title>Bruh</title>
        <meta
          name="description"
          content="Anna lisää tietoja, jotta voit kirjautua palveluun porinlukio.fi"
        />
        <link rel="icon" href="/FakeP.png" />
      </Head>
      <div className="w-full min-h-screen">
        <div className="h-64 w-64 m-auto pt-48">
          <div className="h-64 w-64 bg-[url('/textures/happyEmojiPng.jpg')] bg-cover "></div>
          <a className="text-5xl">Kaikki ok...</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
