import style from './Experience.module.css'

function Experience () {
  return (
    <section id='Experience' className={style.ExperienceContainer}>
      <h2>Experiencia</h2>
      <ul className={style.listExperiencecontainer}>
        <li className={style.OptionExperiencecontainer}>
          <p className={style.dateOption}>ene. 2023 - feb. 2023</p>
          <div>
            <header>
              <h3>Novelty Books</h3>
              <h4>Desarrollador web</h4>
            </header>
            <main>
              <p>Participé en la elaboración de la aplicación Novelty Books, un E-commers de libros. Trabajé en el desarrollo de las herramientas de gestión de la aplicación, facilitando la administración de información en la base de datos. Además diseñé el apartado estadístico donde se muestran gráficas y tablas referentes a los usuarios, libros, y órdenes de compra-venta.</p>
              <p>Entre otras actividades, también participé en la integración del sistema de filtrados combinados, pudiendo ejecutarlos individualmente o en conjunto para hacer búsquedas más precisas.</p>
            </main>
            <footer>
              <p>Las tecnologías con las que se trabajaron fueron:</p>
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
              <h3>PI-Dogs</h3>
              <h4>Desarrollador web</h4>
            </header>
            <main>
              <p>Diseñé y desarrollé una aplicación web donde puedes hacer búsquedas de diferentes razas de perros, visualizando el detalle de cada raza y consultar las características físicas y psicológicas más relevantes del canino, como: temperamento, altura, años de vida, etc. Para este proyecto fue necesario desarrollar un servidor que busca información en una base de datos propia y en una API externa. Uno de mis mayores retos fue crear el sistema de filtrados combinados para poder hacer búsquedas más precisas.</p>
            </main>
            <footer>
              <p>Las tecnologías con las que se trabajaron fueron:</p>
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
