import Link from "next/link";

function List() {
  return (
    <div className="mx-auto text-nord4 font-mono text-xl md:text-xl px-8">
      <p className="flex mx-auto text-xl md:text-2xl pb-8 underline">
        Mielenkiintoisia tai hyödyllisiä linkkejä
      </p>
      <div className="sm:flex flex-col w-full m-auto space-y-2">
        <div className="sm:flex sm:flex-row">
          <p>Porin lukion viralliset nettisivut</p>
          <a
            className="ml-auto hover:underline"
            href="https://www.pori.fi/kasvatus-ja-koulutus/lukio/porin-lukio"
          >
            Linkki
          </a>
        </div>
        <div className="sm:flex sm:flex-row ">
          <p>Tutkimuksia internetkäyttäytymisesta</p>
          <a
            className="ml-auto hover:underline"
            href="https://jyx.jyu.fi/bitstream/handle/123456789/76926/URN%3aNBN%3afi%3ajyu-202107014114.pdf?sequence=1&isAllowed=y"
          >
            linkki
          </a>
        </div>
        <div className="sm:flex sm:flex-row">
          <p>Koulun ruokalista</p>
          <a
            className="ml-auto hover:underline"
            href="https://aromimenu.cgisaas.fi/SatakunnanSeutuAromieMenus/FI/Default/Pori/PoLukio/Restaurant.aspx"
          >
            linkki
          </a>
        </div>
        <div className="sm:flex sm:flex-row">
          <p>Opiskelijakortti</p>
          <a
            className="ml-auto hover:underline"
            href="https://www.feedcowboy.com/asiakkaat/slicefi/join/?porinlukio&secure"
          >
            linkki
          </a>
        </div>
        <div className="sm:flex sm:flex-row">
          <p>Matikkaeditorinkääntäjä</p>
          <a
            className="ml-auto hover:underline"
            href="https://github.com/henrivain/Matikkaeditorinkaantaja"
          >
            linkki
          </a>
        </div>
        <div className="sm:flex sm:flex-row">
          <p>Galleria</p>
          <Link href="/gallery">
            <a className="ml-auto hover:underline">linkki</a>
          </Link>
        </div>

        <div className="sm:flex sm:flex-row">
          <p>Kurssitarjotin</p>
          <Link href="/kurssitarjotin">
            <a className="ml-auto hover:underline">linkki</a>
          </Link>
        </div>
        <div className="sm:flex sm:flex-row">
          <p>Abikamaa</p>
          <a
            className="ml-auto hover:underline"
            href="https://clseifert.com/fi"
          >
            linkki
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
