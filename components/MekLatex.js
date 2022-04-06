import Latex from "react-latex";

// using Katex from https://github.com/zzish/react-latex
// symbols https://katex.org/docs/supported.html
// for text reference see project/docs/LatexText.txt

export default function MekLatex() {
  return (
    <Latex>
      $\tiny \color&#123;white&#125;\begin&#123;cases&#125;
      \tfrac&#123;3&#125;&#123;4&#125;x+y&=y^2\\ \ln 5+\log
      _53x&=\sqrt&#123;x^3&#125;\\ \sin \left(4\right)+\sqrt[3]&#123;4y&#125;&=9
      \cdot e^&#123;\ln4&#125; \end&#123;cases&#125; $
    </Latex>
  );
}
