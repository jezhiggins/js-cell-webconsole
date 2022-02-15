import {lex} from "cell-lang/lib/lexer";
import Viewer from "../viewer";
import {parse} from "cell-lang/lib/parser";

const parser = code => {
  let nodes = "";
  try {
    for (const node of parse(lex(code)))
      nodes += formatNode(node, 0);
    return nodes
  } catch(e) {
    return `${nodes}\n${e.message}`;
  }
}

function formatNode(node, indent = 0) {
  const print = line => `${pad(indent)}${line}\n`;
  const [type, ...args] = node
  switch (type) {
    case 'symbol':
      return print(`[ ${type}, ${args[0]} ]`);
    case 'number':
      return print(`[ ${type}, ${args[0]} ]`);
    case 'string':
      return print(`[ ${type}, '${args[0]}' ]`);
    case 'assignment': {
      let ret = print(`[ ${type}`)
      ret += formatNode(args[0], indent + 2)
      ret += formatNode(args[1], indent + 2)
      ret += print(']')
      return ret;
    }
    case 'call': {
      let ret = print(`[ ${type}`)
      ret += formatNode(args[0], indent + 2)
      if (args[1].length) {
        ret += print('  [')
        for (const n of args[1])
          ret += formatNode(n, indent + 4)
        ret += print('  ]')
      } else {
        ret += print('  [ ]')
      }
      ret += print(']')
      return ret;
    }
    case 'operation': {
      let ret = print(`[ ${type}, ${args[0]}`)
      ret += formatNode(args[1], indent + 2)
      ret += formatNode(args[2], indent + 2)
      ret += print(']')
      return ret;
    }
    case 'function': {
      let ret = print(`[ ${type}`)
      if (args[0].length) {
        ret += print('  [')
        for (const n of args[0])
          ret += formatNode(n, indent + 4)
        ret += print('  ]')
      } else {
        ret += print('  [ ]')
      }
      ret += print('  [')
      for (const n of args[1])
        ret += formatNode(n, indent + 4)
      ret += print('  ]')
      ret += print(']')
      return ret;
    }
  }
}

function pad(indent) {
  return "                                             ".substring(0, indent)
}

const AstViewer = ({ code }) => {
  return (
    <Viewer code={code} transform={parser}/>
  )
};

export default AstViewer
