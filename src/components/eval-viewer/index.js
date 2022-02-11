import {lex} from "cell-lang/lib/lexer";
import Viewer from "../viewer";
import {parse} from "cell-lang/lib/parser";
import {evaluate} from "cell-lang/lib/evaluator";

const allParse = code => {
  try {
    return [...parse(lex(code))];
  } catch (e) {
    return []
  }
}

const evaluator = code => {
  try {
    return evaluate(allParse(code));
  } catch(e) {
    return e.message
  }
}

const EvalViewer = ({ code }) => {
  return (
    <Viewer code={code} transform={evaluator} title="Evaluation"/>
  )
};

export default EvalViewer
