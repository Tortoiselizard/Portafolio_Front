import style from './Projects.module.css'

function Projects ({ proyects }) {
  console.log('proyects:', proyects)
  return (
    <section id='Projects' className={style.ProjectsContainer}>
      <h2>Proyectos</h2>
      <ul>
        {
          proyects.map(item => (
            <li
              key={item.title}
              className={style.optionProyect}
            >
              <a href={item.link} target='_blank' rel='noreferrer'><img src={item.image.url} alt={item.image.alt} /></a>
              <div className={style.informationOptionContainer}>
                <header>
                  <a href={item.link} target='_blank' rel='noreferrer'><h3>{item.title}</h3></a>
                </header>
                <main>
                  {
                    item.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  }
                </main>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Projects
