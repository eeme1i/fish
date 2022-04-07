import Link from "next/link";
import Breaker from "./Breaker";

function Header() {
  return (
    <div className="font-sans mx-auto ">
      <div className="pt-8 px-8 pb-8 flex justify-between text-nord4">
        <Link href="/home">
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

          <a className="px-4 py-2 bg-nord1 rounded-2xl transition ease-in-out hover:scale-110 hover:bg-nord3">
            <Link href="/mek">MEK</Link>
          </a>
        </div>
      </div>
      <Breaker />
    </div>
  );
}

export default Header;
