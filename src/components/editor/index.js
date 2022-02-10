import {useState} from "preact/hooks";
import style from './style.css'

const Editor = () => {
  const [cell, setCell] = useState("");

  return (
    <div class={style.editor}>
      <textarea
        rows='20'
        cols='80'
        autoComplete='off'
        placeholder='Type your Cell code here'
        onChange={e => setCell(e.target.value)}
        value={cell}/>
    </div>
  )
};

export default Editor
