import {h} from 'preact'

import style from './style.css';

export const TabHeader = ({ children }) => {
  return (
    <ul class={`${style.nav} ${style.navTabs}`} role="tablist">
      {children}
    </ul>
  )

}
