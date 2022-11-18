function LinkElement({ link, text }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="hover:underline mx-auto"
    >
      {text}
    </a>
  );
}

export default function MekLinks() {
  return (
    <div className="pb-8 p-5 text-xl text-nord4 flex flex-col gap-3 w-full">
      <a className="text-4xl underline mx-auto pb-4">Linkkejä</a>

      <LinkElement
        link="https://github.com/henrivain/Matikkaeditorinkaantaja"
        text="Github sivu"
      />

      <LinkElement
        link="https://github.com/henrivain/Matikkaeditorinkaantaja/releases"
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

      <LinkElement
        link="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/issues"
        text="Ilmoita bugeista"
      />
      <div className="mx-auto flex flex-col">
        <LinkElement
          link="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/blob/main/README.md"
          text="Kehittäjän yhteystiedot"
        />
        <span className="text-xs text-center">
          (katso avautuvan tiedoston alaosa)
        </span>
      </div>
    </div>
  );
}
