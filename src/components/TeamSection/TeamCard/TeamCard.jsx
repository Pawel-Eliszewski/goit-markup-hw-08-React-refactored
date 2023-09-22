import './TeamCard.css';
import { Socials } from 'components/Socials/Socials';

export const TeamCard = member => {
  return (
    <div className="team-card">
      <div className="team-card__img-wrapper">
        <img
          className="team-card__img"
          src={require(`../../../images/${member.img}`)}
          srcSet={require(`../../../images/${member.img_2x}`)}
          alt={member.alt}
        />
      </div>
      <h3 className="team-card__title">{member.name}</h3>
      <p className="team-card__subtitle">{member.position}</p>
      <Socials props={member} styles="--team-card" />
    </div>
  );
};
