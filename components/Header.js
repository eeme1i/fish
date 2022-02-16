import Link from "next/link";

function Header() {
  return (
    <div className="font-sans  m-auto w-3/4 md:max-w-4xl">
      <div className="pt-8 px-8 pb-8 flex justify-between text-nord4">
        <Link href="/">
          <a className="px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3">
            porinlukio.fi
          </a>
        </Link>
        <div className="flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/eeme1i/fish"
            className="px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/releases"
            className="px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3"
          >
            MEK
          </a>
        </div>
      </div>
      <div className="w-full h-0.5 bg-nord3"></div>
    </div>
  );
}

export default Header;
