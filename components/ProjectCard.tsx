type ProjectCardProps = {
  title: string;
  description: string;
  url: URL | string;
  thumbnailPath: string;
  id: number;
};

function ProjectCard({
  title,
  description,
  url,
  thumbnailPath,
  id
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className={`project-info-container ${id % 2 == 1? 'reverse-order': ''}`}>
        <div className="project-info">
          <h1 className="project-title subtitle">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <img
          className="project-thumbnail"
          src={`${thumbnailPath}`}
          alt={`${title}`}
        />
      </div>
      <a className="action-button" rel="external" target="_blank" href={`${url}`}>
        Ver projeto
      </a>
    </article>
  );
}

export default ProjectCard;
