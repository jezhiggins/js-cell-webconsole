import style from './style.css'
import {useContext} from "preact/compat";

const Viewer = ({ code, transform, title }) => {
  const { cell } = useContext(code)

  return (
    <div class={style.editor}>
      <h2>{title}</h2>
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
