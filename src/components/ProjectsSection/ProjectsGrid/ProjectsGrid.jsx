import { ProjectCard } from 'components/ProjectsSection/ProjectCard/ProjectCard';
import './ProjectsGrid.css';

export const ProjectsGrid = ({ projects }) => {
  return (
    <div className="container">
      <ul className="projects__grid">
        {projects.map(project => {
          return (
            <li key={project.id} id={project.id} className="projects__item">
              <ProjectCard {...project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
