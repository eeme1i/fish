import Head from "next/head";
import Breaker from "../components/Breaker";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Image from "next/dist/client/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-nord0">
      <Head>
        <title>Porinlukio - Vilautus</title>
        <meta
          name="description"
          content="Vähän esimakua kulttipäivän videoon"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />

      <div className="py-10 mx-auto w-1/2 sm:w-1/3 md:w-1/4">
        <div className="aspect-w-1 aspect-h-1 m-auto">
          {/* <div className="w-full h-1/2 flex aspect-w-1 aspect-h-1 my-auto bg-[url('/images/poor.png')] bg-cover"></div> */}
          <Image
            src="/images/poor.png"
            alt="kunnon kansalainen lyö spurgua."
            layout="fill"
          ></Image>
        </div>
      </div>
      <Breaker />
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto pt-4 pb-8">
        <Footer />
      </div>
    </div>
  );
}
