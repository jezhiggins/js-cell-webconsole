import style from './style.css'
import {useContext} from "preact/compat";

const Viewer = ({ code }) => {
  const { cell } = useContext(code)

  return (
    <div class={style.editor}>
      <textarea
        rows='20'
        cols='80'
        readOnly='true'
        autoComplete='off'
        value={cell}
      />
    </div>
  )
};

export default Viewer
