import '@/styles/ProjectGallery.css'
import ProjectCard from './ProjectCard'

function ProjectGallery() {
  return (
    <section id='projects'>
      <header className='section-title'>
        <h2>O que eu faço?</h2>
        <h3 className="subtitle">Veja alguns dos meus projetos recentes &#8282;&#41;</h3>
      </header>
      <div className='projects-container'>
        <ProjectCard
          title='Título'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eveniet tempore itaque voluptatem temporibus quo! Architecto at quod asperiores nam. Ea ipsum quis similique optio! Commodi corporis ducimus libero veniam!'
          url='#'
          thumbnailPath='https://placehold.co/500x400'
        ></ProjectCard>
        <ProjectCard
          title='Título'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eveniet tempore itaque voluptatem temporibus quo! Architecto at quod asperiores nam. Ea ipsum quis similique optio! Commodi corporis ducimus libero veniam!'
          url='#'
          thumbnailPath='https://placehold.co/500x400'
        ></ProjectCard>
        <ProjectCard
          title='Título'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eveniet tempore itaque voluptatem temporibus quo! Architecto at quod asperiores nam. Ea ipsum quis similique optio! Commodi corporis ducimus libero veniam!'
          url='#'
          thumbnailPath='https://placehold.co/500x400'
        ></ProjectCard>
      </div>
    </section>
  )
}

export default ProjectGallery