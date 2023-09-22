import { useState } from 'react';
import { projectsList } from 'data/projectsList';
import { Filters } from 'components/Filters/Filters';
import { ProjectsGrid } from 'components/ProjectsSection/ProjectsGrid/ProjectsGrid';
import './Projects.css';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const handleClick = e => {
    setFilter(e.currentTarget.id);
  };

  const uniqueProjects = () => {
    let list = new Set(projectsList.map(project => project.button));
    list.add('All');
    return [...list].reverse();
  };

  const filteredProjectsList = filter => {
    if (filter !== 'All') {
      return projectsList.filter(project => project.button === filter);
    } else {
      return projectsList;
    }
  };

  return (
    <section className="projects">
      <Filters items={uniqueProjects()} onClick={handleClick} />
      <ProjectsGrid projects={filteredProjectsList(filter)} />
    </section>
  );
};
