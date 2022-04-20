import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/dist/shared/lib/head";
import Breaker from "../components/Breaker";

export default function Home() {
  return (
    <div className="bg-nord0 min-h-screen">
      <Head>
        <title>Porin Lukio - kansanbussi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />

      <div className="w-full text-5xl text-center py-64 text-nord3 my-auto">
        <span className="">Kansanbussi... Missä kansa, siellä palvelut!</span>
      </div>

      <Footer />
    </div>
  );
}
