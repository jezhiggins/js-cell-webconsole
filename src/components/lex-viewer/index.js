import {lex} from "cell-lang/lib/lexer";
import Viewer from "../viewer";

const lexer = code => {
  let tokens = "";
  for (const token of lex(code))
    tokens += token + "\n"
  return tokens
}

const LexViewer = ({ code }) => {
  return (
    <Viewer code={code} transform={lexer} title="Lex"/>
  )
};

export default LexViewer
