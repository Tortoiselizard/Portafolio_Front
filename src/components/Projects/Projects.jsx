import style from './Projects.module.css'
import noveltyBooks from '../../img/noveltyBooks.jpg'
import piDogs from '../../img/PI-Dogs.jpg'

function Projects () {
  return (
    <section className={style.ProjectsContainer}>
      <h2>Proyectos</h2>
      <ul>
        <li>
          <img src={noveltyBooks} alt='Novelty-Books' />
          <div className={style.informationOptionContainer}>
            <header>
              <a href='https://novelty-books.vercel.app/'><h3>Novelty Books</h3></a>
            </header>
            <main>
              <p>Participé en el desarrollo de la aplicación Novelty Books, un E-commers de libros físicos. Trabajé en el desarrollo de las herramientas que permiten gestionar la aplicación, facilitando al administrador la búsqueda de información almacenada en la base de datos, además de añadir un apartado de estadísticas relevantes donde se pueden visualizar gráficas y tablas referentes a los usuarios, libros, ordenes de compra y ventas de los libros.</p>
              <p>Entre otras actividades, también participé en la integración del sistema de filtrados combinados y ordenado de los libros en el Front-end de la aplicación, pudiendo ejecutarlos individualmente o en conjunto para hacer búsquedas más precisas.</p>
            </main>
          </div>
        </li>
        <li>
          <img src={piDogs} alt='PI-Dogs' />
          <div className={style.informationOptionContainer}>
            <header>
              <a href='https://pi-dogs-front-mu.vercel.app/'><h3>PI-Dogs</h3></a>
            </header>
            <main>
              <p>Diseñé y desarrollé una aplicación web donde puedes hacer búsquedas de diferentes razas de perros, visualizando el detalle de cada raza y consultar las características físicas y psicológicas del canino, como: temperamento, altura, años de vida, etc. En este proyecto desarrolle un sistema de filtrados combinados que te permite hacer búsquedas más precisas, además de diseñar y desarrollar un servidor que puede buscar información tanto de una API externa como de la base de datos propia.</p>
            </main>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
