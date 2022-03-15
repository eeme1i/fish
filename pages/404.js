import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <div className="w-screen h-screen bg-white">
      <Head>
        <title>404 ei löydy!!!! </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen justify-center h-screen items-center">
        <Link href="/home">
          <a>
            <img src="/logo.png" />
            <p className="text-green-600 font-bold w-full justify-center flex">
              404 ei löydy!!!!
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
