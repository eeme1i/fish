import Link from "next/link";

function LinkElement({ link, text }) {
  return (
    <Link href={link}>
      <a className="hover:underline mx-auto">{text}</a>
    </Link>
  );
}

export default function MekLinks() {
  return (
    <div className="pb-8 p-5 text-xl text-nord4 flex flex-col gap-3 w-full">
      <a className="text-4xl underline mx-auto pb-4">Linkkejä</a>

      <LinkElement
        link="https://github.com/matikkaeditorinkaantaja"
        text="Github sivu"
      />

      <LinkElement
        link="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/releases"
        text="Uusin versio"
      />

      <LinkElement
        link="https://docs.google.com/document/d/1akGTKmWnCJrbmtH4gM1ucTExSKc3ipGZCM-l1wJatUQ/edit"
        text="Ohjeistus"
      />

      <LinkElement
        link="https://docs.google.com/spreadsheets/d/1bi-iejOZ7LSQXTja8hWFj7LcgKMt4z3Aa5pRelak9R8/edit?usp=sharing"
        text="Listaus merkkimuutoksista"
      />
    </div>
  );
}
