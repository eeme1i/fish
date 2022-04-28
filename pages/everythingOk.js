import Head from "next/dist/shared/lib/head";
import Footer from "../components/Footer.js";
import Link from "next/link";

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
      <div className="w-full min-h-screen flex flex-col">
        <div>
          <div className="h-64 w-64 m-auto pt-24 ">
            <div className="h-64 w-64 bg-[url('/textures/happyEmojiPng.jpg')] bg-cover "></div>
            <a className="text-5xl">Kaikki ok...</a>
            <div className="w-full mx-auto p-12">
              <Link href="/message">
                <a className="bg-[#0067b8] text-2xl text-white mt-10 px-5 py-1 hover:opacity-25 mx-auto">
                  Hiano juttu
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
