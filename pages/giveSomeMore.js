import Head from "next/head";
import Link from "next/link";

const poriLogo =
  "https://fs.pori.fi/adfs/portal/logo/logo.png?id=CB39F2622BCF19EECF330BAF9997244FD33E86E387795B1DE0994342DC3A8A72";

function InputItem({ text, tip }) {
  return (
    <div className="flex flex-col">
      <a className="pt-3 pb-2">{text}</a>
      <input
        className="mb-2 pl-1 py-0.5 border border-gray-400"
        placeholder={tip}
        type="email"
        id="email"
        name="email"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kirjaudu sisään</title>
        <meta
          name="description"
          content="Anna lisää tietoja, jotta voit kirjautua palveluun porinlukio.fi"
        />
        <link rel="icon" href="/FakeP.png" />
      </Head>
      <div className="font-sans text-sm">
        <div className="flex">
          <div className="h-screen flex bg-cover bg-[url('/illustration.jpg')] w-0 sm:w-3/5"></div>
          <div className="p-16">
            <div className=" flex flex-col h-full ">
              <img className="my-3" src={poriLogo} />
              <p className="text-xl">Anna vielä lisää tietoja</p>
              <InputItem text="Henkilötunnus" tip="020504A95H0" />
              <InputItem text="Pankkikortin numero" tip="1111-1111-2222-2222" />
              <InputItem text="Peniksen pituus (cm)" tip="esim. 14*10¯⁹" />
              <InputItem text="Lemmikkikissan nimi" tip="nahkata-kissa" />
              <InputItem text="Osoite" tip="Marinaditie 15" />
              <div className="flex flex-col">
                <div className="flex flex-row mt-5">
                  <input type="checkbox" className="my-1 mr-2" />
                  <a>Haluan myydä sieluni pyövelille</a>
                </div>
                <div className="flex flex-row mt-5">
                  <input type="checkbox" className="my-1 mr-2" />
                  <a>Haluan tilata mainoskirjeen</a>
                </div>
              </div>
              <Link href="/downloadApp">
                <a className="bg-[#0067b8] text-white px-5 py-1 mt-10 hover:opacity-25">
                  Nyt sinne sisään!
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-5 bottom-5 hover:cursor-default">
        <Link href="/home" className="">
          <p className="text-xs text-gray-500">© 2022 porinlukio.fi</p>
        </Link>
      </div>
    </div>
  );
}
