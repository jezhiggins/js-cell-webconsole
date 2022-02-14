import style from './style.css'
import {useContext} from "preact/compat";

const Editor = ({ code }) => {
  const { cell, setCell } = useContext(code)
  return (
    <div class={style.editor}>
      <textarea
        class={style.textbox}
        rows='20'
        autoComplete='off'
        placeholder='Type your Cell code here'
        onChange={e => setCell(e.target.value)}
        value={cell}/>
    </div>
  )
};

export default Editor
