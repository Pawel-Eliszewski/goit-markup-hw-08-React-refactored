import { TitleSmall } from 'components/Titles/TitleSmall/TitleSmall';
import './WorkCard.css';

export const WorkCard = work => {
  return (
    <div className="work-card">
      <img
        className="work-card__img"
        src={require(`../../../images/${work.img}`)}
        srcSet={require(`../../../images/${work.img_2x}`)}
        alt={work.alt}
      />
      <div className="work-card__overlay">
        <TitleSmall title={work.title} />
      </div>
    </div>
  );
};
