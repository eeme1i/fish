import Latex from "react-latex";

// using Katex from https://github.com/zzish/react-latex
// symbols https://katex.org/docs/supported.html
// for text reference see project/docs/LatexText.txt

export default function MekLatex() {
  return (
    <div>
      <Latex>
        $ \tiny \color&#123;black&#125; \begin&#123;cases&#125;
        y\left(3x+y\right)^2+5&=y^2\\ \ln 5+\log _53x&=\sqrt&#123;x^3&#125;\\
        \sin \left(2\pi \right)+\sqrt[3]&#123;4y&#125;&=9\cdot e^&#123;\ln
        4&#125; \end&#123;cases&#125; $
      </Latex>
    </div>
  );
}
