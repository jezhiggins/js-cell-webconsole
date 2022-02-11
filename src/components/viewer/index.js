import style from './style.css'
import {useContext} from "preact/compat";

const Viewer = ({ code, transform }) => {
  const { cell } = useContext(code)

  return (
    <div class={style.editor}>
      <textarea
        rows='10'
        cols='80'
        readOnly='true'
        autoComplete='off'
        value={transform(cell)}
      />
    </div>
  )
};

export default Viewer
