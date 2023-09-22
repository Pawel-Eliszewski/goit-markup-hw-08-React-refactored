import icons from '../../../images/icons.svg';
import './ButtonBurger.css';

export const ButtonBurger = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mobile__burger-btn"
      aria-expanded="false"
      aria-controls="mobile-menu"
      type="button"
    >
      <svg className="mobile__burger-icon">
        <use href={icons + `#icon-burger`} />
      </svg>
    </button>
  );
};
