import { h } from 'preact';

import style from './style.css';

export const TabHeaderItem = ({ children, active, onSelect = () => {} }) => {
  const className = active ? style.active : '';

  return (
    <li role="presentation" class={className} onClick={handleClick}>
      <a role="tab" data-toggle="tab">
        {children}
      </a>
    </li>
  );

  function handleClick() {
    onSelect();
  }
};
