import icons from '../../../images/icons.svg';
import './ClientsItem.css';

export const ClientsItem = ({ client }) => {
  return (
    <svg className="clients__svg">
      <use href={icons + `#icon-${client.img}`} />
    </svg>
  );
};
