import { TitleMedium } from 'components/Titles/TitleMedium/TitleMedium';
import { TeamCard } from 'components/TeamSection/TeamCard/TeamCard';
import { teamMembersList } from 'data/teamMembersList';
import './Team.css';

export const Team = () => {
  return (
    <section className="team__section section">
      <div className="container">
        <TitleMedium title="Our Team" />
        <ul className="team__list">
          {teamMembersList.map(member => {
            return (
              <li key={member.id} className="team__item">
                <TeamCard {...member} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
