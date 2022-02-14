import { h } from 'preact';

import style from './style.css';

export const TabContent = ({ children }) => {
  return (
    <div class={style.tabContent}>
      {children}
    </div>
  );
};
