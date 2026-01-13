import '@/styles/ProjectGallery.css'
import ProjectCard from './ProjectCard'
import projects from "@/data/projects.json";

function ProjectGallery() {
  return (
    <section id='projects'>
      <header className='section-title'>
        <h2>O que eu faço?</h2>
        <h3 className="subtitle">Veja alguns dos meus projetos recentes &#8282;&#41;</h3>
      </header>
      <div className='projects-container'>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
      </div>
    </section>
  )
}

export default ProjectGallery