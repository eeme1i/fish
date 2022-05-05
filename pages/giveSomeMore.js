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

function CheckBoxItem({ text }) {
  return (
    <div className="flex my-1">
      <input type="checkbox" className="my-1 mr-2" />
      <a>{text}</a>
    </div>
  );
}

function InputFields() {
  return (
    <div>
      <p className="text-xl">Anna vielä lisää tietoja</p>
      <InputItem text="Henkilötunnus" tip="020504A95H0" />
      <InputItem text="Pankkikortin numero" tip="1111-1111-2222-2222" />
      <InputItem text="Peniksen pituus (cm)" tip="esim. 14*10¯⁹" />
      <InputItem text="Lemmikkikissan nimi" tip="nahkata-kissa" />
      <InputItem text="Osoite" tip="Marinaditie 15" />
      <div className="flex flex-col space-y-2 mt-2">
        <CheckBoxItem text="Haluan myydä sieluni pyövelille" />
        <CheckBoxItem text="Haluan tilata mainoskirjeen" />
      </div>
    </div>
  );
}

function LogicBoxes() {
  return (
    <div className="space-y-3">
      <img className="" src={poriLogo} />
      <InputFields />
      <div className="flex flex-col">
        <span className="pb-5 text-xs">
          Vastasithan kaikkeen totuudenmukaisesti?
        </span>
        <div>
          <Link href="/everythingOk">
            <a className="bg-[#0067b8] text-white px-5 py-1 hover:opacity-25">
              Nyt sinne sisään!
            </a>
          </Link>
        </div>
      </div>
      <div className="pt-2">
        <Link href="/home">
          <p className="text-xs text-gray-500">© 2022 porinlukio.fi</p>
        </Link>
      </div>
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
        <link rel="icon" href="/fakeP.png" />
      </Head>

      <div className="font-sans text-sm flex">
        <div className="sm:w-full min-h-screen bg-cover bg-[url('/illustration.jpg')]"></div>
        <div className="pt-16 px-16 sm:min-w-[500px] min-w-full">
          <LogicBoxes />
        </div>
      </div>
    </div>
  );
}
