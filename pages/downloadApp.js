import Head from "next/dist/shared/lib/head";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-blue-300">
      <div>
        <Head>
          <title>Bruh</title>
          <meta
            name="description"
            content="Anna lisää tietoja, jotta voit kirjautua palveluun porinlukio.fi"
          />
          <link rel="icon" href="/FakeP.png" />
        </Head>
      </div>
      <div className="m-auto  h-64 w-64 bg-[url('/textures/happyEmojiPng.jpg')] bg-cover"></div>
      <a></a>
    </div>
  );
}
