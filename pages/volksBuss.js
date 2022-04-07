import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/dist/shared/lib/head";

export default function Home() {
  return (
    <div className="bg-nord0 min-h-screen">
      <Head>
        <title>Porin Lukio - kansanbussi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Footer />
    </div>
  );
}
