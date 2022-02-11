import {lex} from "cell-lang/lib/lexer";
import Viewer from "../viewer";
import {parse} from "cell-lang/lib/parser";

const parser = code => {
  let nodes = "";
  try {
    for (const node of parse(lex(code)))
      nodes += node + "\n"
    return nodes
  } catch(e) {
    return nodes + "\n" + e.message
  }
}

const AstViewer = ({ code }) => {
  return (
    <Viewer code={code} transform={parser} title="AST"/>
  )
};

export default AstViewer
