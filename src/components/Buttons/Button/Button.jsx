import './Button.css';

export const Button = ({ name, icon, onClick, styles, type }) => {
  return (
    <button
      id={name}
      onClick={onClick}
      className={'btn btn' + styles}
      type={type}
    >
      {name}
      {icon}
    </button>
  );
};
