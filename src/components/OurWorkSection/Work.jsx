import { TitleMedium } from 'components/Titles/TitleMedium/TitleMedium';
import { WorkCard } from './WorkCard/WorkCard';
import { workList } from 'data/workList';
import './Work.css';

export const Work = () => {
  return (
    <section className="work__section">
      <div className="work__container container">
        <TitleMedium title="Our Work" />
        <ul className="work__list">
          {workList.map(work => {
            return (
              <li key={work.id} className="work__item">
                <WorkCard {...work} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
