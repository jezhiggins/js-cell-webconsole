import { h } from 'preact';

import style from './style.css';

export const Tab = ({ children, active }) => {
  const cssClass = active ? style.active : '';

  return (
    <div role="tabpanel" class={`${style.tabPane} ${cssClass}`}>
      {children}
    </div>
  );
};
