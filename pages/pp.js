import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white h-full min-h-screen">
      <Head>
        <title>Porin Lukio - Privacy Policy</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 text-black content-center font-mono xl:w-2/4 text-xl">
        
        Tämä sivusto ei ketää tai tallenna dataa, jota voitaisiin liittää yksittäiseen käyttäjään.
        <br />
        Näemme ainoastaan sivun katsojakerrat, käyttäjämäärät, keskimääräisen vierailuajan sekä summittaisen sijainnin (noi kaupungin tarkkuudella).
        Näitä tietoja ei voi liittää yksittäiseen käyttäjään, emmekä voi tietää kuka olet tai mitä tietoja olet sivustolle syöttänyt tai katsellut.
        Sivuston kävijädata saadaan käyttämällä Googlen Analytics - palvelua.
        <br />
        <br />
        <br />
        <br />
        WHOIS:{" "}
        <a
          className="hover:underline"
          href="https://who.is/whois/porinlukio.fi"
        >
          https://who.is/whois/porinlukio.fi
        </a>
        <br />
        <br />
        <br />
        <br />
        Palveluntarjoaja: Vercel{" "}
        <a
          className="hover:underline"
          href="https://vercel.com/legal/privacy-policy"
        >
          https://vercel.com/legal/privacy-policy
        </a>
        <br />
        <br />
        <br />
        <br />
        Hyödynnämme myös Googlen tarjoamia fontteja:
        <br />
        <br />
        The Google Fonts API is designed to limit the collection, storage, and
        use of end-user data to only what is needed to serve fonts efficiently.
        <br />
        <br />
        Use of Google Fonts API is unauthenticated. No cookies are sent by
        website visitors to the Google Fonts API. Requests to the Google Fonts
        API are made to resource-specific domains, such as fonts.googleapis.com
        or fonts.gstatic.com. This means your font requests are separate from
        and don&apos;t contain any credentials you send to google.com while
        using other Google services that are authenticated, such as Gmail.
        <br />
        <br />
        In order to serve fonts quickly and efficiently with the fewest
        requests, responses are cached by the browser to minimize round-trips to
        our servers.
        <br />
        <br />
        Requests for CSS assets are cached for 1 day. This allows us to update a
        stylesheet to point to a new version of a font file when it’s updated,
        and ensures that all websites using fonts hosted by the Google Fonts API
        will be using the most updated version of each font within 24 hours of
        each release.
        <br />
        <br />
        The font files are cached for 1 year.
        <br />
        <br />
        Google Fonts logs records of the CSS and the font file requests, and
        access to this data is kept secure. Aggregate usage numbers track how
        popular font families are and are published on our analytics page. We
        use data from Google’s web crawler to detect which websites use Google
        fonts. To learn more about the information Google collects and how it is
        used and secured, see Google&apos;s Privacy Policy.
        <br />
        <br />
        <br />
        <br />
        <div>
          <Link href="/home">
            <a className="hover:underline">Kotiin</a>
          </Link>
        </div>
        <div className="">
          <Link href="mailto:eeruoh@gmail.com">
            <a className="hover:underline">Yhteydenotot</a>
          </Link>
        </div>
        <div className="">
          <Link href="https://github.com/eeme1i/fish">
            <a className="hover:underline">Lähdekoodi</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
