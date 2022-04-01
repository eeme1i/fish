import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";
import Breaker from "../components/Breaker";
import LargeButton from "../components/LargeButton";

export default function Home() {
  return (
    <div className="bg-nord0 h-full min-h-screen space-y-8">
      <Head>
        <title>Porin Lukio - Koti</title>
        <meta
          name="description"
          content="Porin Lukion (epä)viralliset kotisivut"
        />
        <link rel="icon" href="" />
      </Head>

      <div className="font-sans max-w-[48rem] mx-auto space-y-8">
        <Header />
        <div className="px-8 flex justify-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-nord4 flex justify-center">
              Porin Lukio
            </h1>
            <div className="text-xl font-bold text-nord4 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <LargeButton url="/login" value="Kirjautumissivu" />
              <LargeButton url="/trasureHunt" value="Aarrejahti" />
            </div>
          </div>
        </div>
        <Breaker />
        <List />
        <Breaker />
        <Footer />
      </div>
    </div>
  );
}

// test commit
