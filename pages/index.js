import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// commit & push test to dev branch.
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kirjaudu sisään</title>
        <meta name="description" content="Kirjaudu palveluun" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="font-sans text-sm">
        <div className="flex">
          <div className=" w-full h-screen flex bg-cover bg-[url('/illustration.jpg')]"></div>
          <div className="p-16 min-w-[500px]">
            <img
              className="pb-28"
              src="https://fs.pori.fi/adfs/portal/logo/logo.png?id=CB39F2622BCF19EECF330BAF9997244FD33E86E387795B1DE0994342DC3A8A72"
            />
            <div>
              <p className="pb-10">Kirjaudu sisään</p>
              <div className="pb-10">
                <input
                  className="mb-2 pl-1 py-0.5 border border-gray-400 w-full"
                  placeholder="joku@example.com"
                  type="email"
                  id="email"
                  name="email"
                />
                <input
                  className="border pl-1 py-0.5 border-gray-400 w-full"
                  placeholder="Salasana"
                  type="password"
                  id="password"
                  name="password"
                />
              </div>
              <Link href="/message">
                <a className="bg-[#0067b8] text-white px-5 py-1 hover:opacity-25">
                  Kirjaudu sisään
                </a>
              </Link>
            </div>
            <div className="absolute bottom-5 hover:cursor-default">
              <Link href="/home" className="">
                <p className="text-xs text-gray-500">© 2022 porinlukio.fi</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
