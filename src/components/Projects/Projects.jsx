import style from './Projects.module.css'
import noveltyBooks from '../../img/noveltyBooks.jpg'
import piDogs from '../../img/PI-Dogs.jpg'

function Projects () {
  return (
    <section className={style.ProjectsContainer}>
      <h2>Proyectos</h2>
      <ul>
        <li className={style.optionProyect}>
          <img src={noveltyBooks} alt='Novelty-Books' />
          <div className={style.informationOptionContainer}>
            <header>
              <a href='https://novelty-books.vercel.app/'><h3>Novelty Books</h3></a>
            </header>
            <main>
              <p>Novelty Books es un E-commerce de libros diseñado para tener acceso a una biblioteca virtual desde cualquier lugar. Con esta aplicación podrás buscar facilmente tus libros preferidos o también encontrar uno nuevo. Podrás realizar compras fácilmente y compartir tus comentarios con el resto de la comunidad y así ayudar a otros usuarios a conseguir el libro indicado. Podrás crear una cuenta personal que registrará todas tus compras y libros faboritos para buscarlos rápidamente en otra ocación.</p>
              <p>Como administrador tendrás acceso a una serie de herramientas que te permitirán gestionar facilmente el E-commerce. Podrás añadir nuevos libros al catálogo o eliminarlos en caso de haberse agotado en el inventario. También tedras a disposición todas las ordenes de compra que se han registrado, los usuarios que las hicieron y los pedidos asociados. Además contarás con una sección de estadísticas que te ayudará a medir el progreso del negocio por medio de gráficas.</p>
            </main>
            {/* <footer>
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
            </footer> */}
          </div>
        </li>
        <li className={style.optionProyect}>
          <img src={piDogs} alt='PI-Dogs' />
          <div className={style.informationOptionContainer}>
            <header>
              <a href='https://pi-dogs-front-mu.vercel.app/'><h3>PI-Dogs</h3></a>
            </header>
            <main>
              <p>PI-Dogs es una aplicación web diseñada para la comunidad amante de los perros. Con esta aplicción podrás buscar fácilmente la información más relevante de cada raza, como: su tamaño, peso y años de vida, temperamentos, etc. También podrás añadir nuevas razas de perro que no se encuentre registradas y en caso de que veas que alguien ha cometido un error al registrar alguna, también podrás hacer las modificaciones necesarias.</p>
            </main>
            {/* <footer>
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
            </footer> */}
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
