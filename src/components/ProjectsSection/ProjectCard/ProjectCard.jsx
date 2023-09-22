import './ProjectCard.css';

export const ProjectCard = project => {
  return (
    <div className="project-card">
      <div className="project-card__figure">
        <img
          className="project-card__img"
          src={require(`../../../images/${project.img}`)}
          srcSet={require(`../../../images/${project.img_2x}`)}
          alt={project.alt}
        />
        <div className="project-card__overlay">
          <p className="project-card__overlay-text">{project.info}</p>
        </div>
      </div>
      <div className="project-card__info">
        <p className="project-card__title">
          <strong>{project.title}</strong>
        </p>
        <p className="project-card__subtitle">{project.type}</p>
      </div>
    </div>
  );
};
