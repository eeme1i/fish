import Link from "next/dist/client/link";

export default function MekLinks() {
  return (
    <div className="pb-8 text-xl text-nord4 flex flex-col gap-3 w-full">
      <a className="text-4xl underline mx-auto pb-4">Linkkejä</a>

      <Link href="https://github.com/matikkaeditorinkaantaja">
        <a className="hover:underline mx-auto">Github sivu</a>
      </Link>

      <Link href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/releases">
        <a className="hover:underline mx-auto">Uusin versio</a>
      </Link>

      <Link href="https://docs.google.com/document/d/1akGTKmWnCJrbmtH4gM1ucTExSKc3ipGZCM-l1wJatUQ/edit">
        <a className="hover:underline mx-auto">ohjeistus</a>
      </Link>

      <Link href="https://docs.google.com/spreadsheets/d/1bi-iejOZ7LSQXTja8hWFj7LcgKMt4z3Aa5pRelak9R8/edit?usp=sharing">
        <a className="hover:underline mx-auto">Listaus merkkimuutoksista</a>
      </Link>
    </div>
  );
}
