type ProjectCardProps = {
  title: string;
  description: string;
  url: URL | string;
  thumbnailPath: string;
};

function ProjectCard({
  title,
  description,
  url,
  thumbnailPath,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-info-container">
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
        <a className="action-button" href={`${url}`}>Ver projeto</a>
    </article>
  );
}

export default ProjectCard;
