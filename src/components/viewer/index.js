import style from './style.css'
import {useContext} from "preact/compat";

const Viewer = ({ code, transform }) => {
  const { cell } = useContext(code)

  return (
    <div class={style.viewer}>
      <textarea
        class={style.viewer}
        readOnly='true'
        autoComplete='off'
        value={transform(cell)}
      />
    </div>
  )
};

export default Viewer
