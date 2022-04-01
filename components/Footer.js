import Link from "next/link";
import Breaker from "./Breaker";
import FooterItem from "./FooterItem";

function Footer() {
  return (
    <div className="font-monospace m-auto ">
      <div className="">
        <div className="flex-wrap flex justify-center mb-4">
          <FooterItem url="/home" value="Koti" />
          <FooterItem url="/login" value="Kirjautumissivu" />
          <FooterItem url="/treasureHunt" value="Aarrejahti" />
          <FooterItem url="/404" value="404" />
          <FooterItem url="/message" value="Viesti" />
          <FooterItem
            url="/https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/releases"
            value="MEK"
          />
          <FooterItem url="/https://github.com/eeme1i/fish" value="Github" />
        </div>
      </div>

      <div className="mx-8 pb-8 text-nord4">
        <Link href="/home">
          <a className="hover:underline">porinlukio.fi</a>
        </Link>
        <div className="">
          <Link href="mailto:eeruoh@gmail.com">
            <a className="hover:underline">Yhteydenotot</a>
          </Link>
        </div>
        <div className="">
          <Link href="/pp">
            <a className="hover:underline">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
