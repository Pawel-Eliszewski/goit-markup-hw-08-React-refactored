import { Button } from 'components/Buttons/Button/Button';
import './Filters.css';

export const Filters = ({ items, onClick }) => {
  return (
    <div className="filters__wrapper">
      <ul className="filters__list">
        {items.map(item => {
          return (
            <li key={item}>
              <Button
                onClick={onClick}
                name={item}
                styles="--filters"
                type="button"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
