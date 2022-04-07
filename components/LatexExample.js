import MekLatex from "./MekLatex";
import FooterItem from "./FooterItem";

export default function LatexExample() {
  return (
    <div className=" flex flex-col pb-5 gap-5">
      {/* note: add arrows later for every step svg? */}
      <a className="mx-auto text-2xl">Esimerkki</a>
      <TranslationExample />
      <StraightFactsView />
    </div>
  );
}

function TextBlock({ elem }) {
  return (
    <div className="flex ">
      <div className="mx-auto p-3 bg-slate-400 rounded-xl text-black w-72">
        {elem}
      </div>
    </div>
  );
}

function TranslationExample() {
  return (
    <div className="flex-col lg:flex-row flex justify-center gap-5">
      {/* add text area in future */}
      <TextBlock elem={<MathEditorView />} />
      <TextBlock elem={<LatexView />} />
      <TextBlock elem={<MekOutputView />} />
    </div>
  );
}

function MathEditorView() {
  return (
    <div className="mx-auto  flex flex-col px-5">
      <a className="underline text-center">Näkymä matikkaeditorissa</a>
      <div className="pl-1.5 text-2xl pt-7">
        {/* text size here resizes latex */}
        <MekLatex />
      </div>
    </div>
  );
}

function LatexView() {
  return (
    <div className="mx-auto flex flex-col gap-5  pb-3">
      <span className="text-center underline">Kopioitu LaTeX-teksti</span>
      <span className="text-sm text-center">
        \begin&#123;cases&#125; y\left(3x+y\right)^2+5&=y^2\\
        <br />
        \ln 5+\log _53x&=\sqrt&#123;x^3&#125;\\
        <br />
        \sin \left(2\pi \right)+\sqrt[3]&#123;4y&#125;&=
        <br />9 \cdot e^&#123;\ln 4&#125; \end&#123;cases&#125;
      </span>
    </div>
  );
}

function MekOutputView() {
  return (
    <div className="flex flex-col mx-auto gap-5">
      <div className="flex flex-col text-center">
        <a className="underline">Matikkaeditorinkääntäjän lopputulos</a>
        <a className="text-sm">(voi syöttää suoraan laskimeen)</a>
      </div>

      <a className="text-sm text-center pt-1">
        system(y(3x+y)^2+5=y^2,
        <br />
        ln(5+log(3x,5))=sqrt(x^3),
        <br />
        sin(2pi)+root(4y,3)=9*@e^(ln(4)))
      </a>
    </div>
  );
}

function StraightFactsView() {
  return (
    <div className="flex flex-col mx-auto gap-5">
      <span className="underline text-center">
        Kaikki toimii kuin rasvattu!
      </span>
      <span className="text-center text-sm w-2/3 mx-auto">
        Kokeile vaikka kopioimalla LaTeX haluamaasi matikkaeditoriin ja
        lopputulos haluamaasi laskentaohjelmistoon. (suositus: Ti-nspire)
        Matikkaeditorinkääntäjä toimii haluttaessa vain yhden napin
        painalluksella!
      </span>
    </div>
  );
}
