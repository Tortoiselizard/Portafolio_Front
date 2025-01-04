import style from './Projects.module.css'
import noveltyBooks from '../../img/noveltyBooks.jpg'
import piDogs from '../../img/PI-Dogs.jpg'

function Projects ({ proyects }) {
  return (
    <section id='Projects' className={style.ProjectsContainer}>
      <h2>Proyectos</h2>
      <ul>
        {
          proyects.map(item => (
            <li className={style.optionProyect}>
              <a href={item.link}><img src={item.image.url} alt={item.image.alt} /></a>
              <div className={style.informationOptionContainer}>
                <header>
                  <a href={item.link}><h3>{item.title}</h3></a>
                </header>
                <main>
                  {
                    item.content.map(paragraph => (
                      <p>{paragraph}</p>
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
