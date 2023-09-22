import icons from '../../../images/icons.svg';
import './ButtonClose.css';

export const ButtonClose = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button-close">
      <svg className="button-close__icon">
        <use href={icons + `#icon-close`} />
      </svg>
    </button>
  );
};
