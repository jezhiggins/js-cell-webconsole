import {lex} from "cell-lang/lib/lexer";
import Viewer from "../viewer";
import {parse} from "cell-lang/lib/parser";
import {evaluate} from "cell-lang/lib/evaluator";

const evaluator = code => {
  try {
    return evaluate(parse(lex(code)));
  } catch(e) {
    return e.message
  }
}

const EvalViewer = ({ code }) => {
  return (
    <Viewer code={code} transform={evaluator}/>
  )
};

export default EvalViewer
