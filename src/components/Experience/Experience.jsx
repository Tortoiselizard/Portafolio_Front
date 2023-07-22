import style from './Experience.module.css'

function Experience () {
  return (
    <section className={style.ExperienceContainer}>
      <h2>Experiencia</h2>
      <ul className={style.listExperiencecontainer}>
        <li className={style.OptionExperiencecontainer}>
          <p className={style.dateOption}>ene. 2023 - feb. 2023</p>
          <div>
            <header>
              <h3><a href='https://novelty-books.vercel.app/'>Novelty Books</a></h3>
              <h4>Desarrollador web</h4>
            </header>
            <main>
              <p>Participé en el desarrollo de la aplicación Novelty Books, un E-commers de libros físicos. Trabajé en el desarrollo de las herramientas que permiten gestionar la aplicación, facilitando al administrador la búsqueda de información almacenada en la base de datos, además de añadir un apartado de estadísticas relevantes donde se pueden visualizar gráficas y tablas referentes a los usuarios, libros, ordenes de compra y ventas de los libros.</p>
              <p>Entre otras actividades, también participé en la integración del sistema de filtrados combinados y ordenado de los libros en el Front-end de la aplicación, pudiendo ejecutarlos individualmente o en conjunto para hacer búsquedas más precisas.</p>
            </main>
            <footer>
              <ul className={style.listSkills}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Next Auth</li>
                <li>Stripe</li>
                <li>Chart.js</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Cloudinary</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>Nodemailer</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </footer>
          </div>
        </li>
        <li className={style.OptionExperiencecontainer}>
          <p className={style.dateOption}>dic. 2022 - ene. 2023</p>
          <div>
            <header>
              <h3><a href='https://pi-dogs-front-mu.vercel.app/'>PI-Dogs</a></h3>
              <h4>Desarrollador web</h4>
            </header>
            <main>
              <p>Diseñé y desarrollé una aplicación web donde puedes hacer búsquedas de diferentes razas de perros, visualizando el detalle de cada raza y consultar las características físicas y psicológicas del canino, como: temperamento, altura, años de vida, etc. En este proyecto desarrolle un sistema de filtrados combinados que te permite hacer búsquedas más precisas, además de diseñar y desarrollar un servidor que puede buscar información tanto de una API externa como de la base de datos propia.</p>
            </main>
            <footer>
              <ul className={style.listSkills}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </footer>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Experience
