import {lex} from "cell-lang/lib/lexer";
import Viewer from "../viewer";
import {parse} from "cell-lang/lib/parser";
import {evaluate} from "cell-lang/lib/evaluator";
import {topLevelEnvironment} from "cell-lang/lib/environment";

const allParse = code => {
  try {
    return [...parse(lex(code))];
  } catch (e) {
    return []
  }
}

let outputBuffer = "";
function webPrintFn(env, value) {
  outputBuffer += `${value}\n`;
  return ['none', null]
}

const env = topLevelEnvironment().newScope();
env.set("print", ['native', webPrintFn]);

const evalCell = code => {
  try {
    return evaluate(allParse(code), env);
  } catch(e) {
    return e.message
  }
}

const evaluator = code => {
  outputBuffer = "";
  const result = evalCell(code);
  return outputBuffer ? `${outputBuffer}\n${result}` : result;
}

const EvalViewer = ({ code }) => {
  return (
    <Viewer code={code} transform={evaluator} title="Evaluation"/>
  )
};

export default EvalViewer
