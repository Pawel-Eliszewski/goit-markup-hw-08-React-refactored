import { TitleSmall } from 'components/Titles/TitleSmall/TitleSmall';
import icons from '../../../images/icons.svg';
import './FeatureCard.css';

export const FeatureCard = feature => {
  return (
    <div className="feature-card">
      <div className="feature-card__icon-wrapper">
        <svg className="feature-card__icon">
          <use href={icons + `#icon-${feature.img}`} />
        </svg>
      </div>
      <TitleSmall title={feature.name} />
      <p className="feature-card__text">{feature.info}</p>
    </div>
  );
};
