import style from './Projects.module.css'
import noveltyBooks from '../../img/noveltyBooks.jpg'
import piDogs from '../../img/PI-Dogs.jpg'

function Projects () {
  return (
    <section id='Projects' className={style.ProjectsContainer}>
      <h2>Proyectos</h2>
      <ul>
        <li className={style.optionProyect}>
          <a href='https://novelty-books.vercel.app/'><img src={noveltyBooks} alt='Novelty-Books' /></a>
          <div className={style.informationOptionContainer}>
            <header>
              <a href='https://novelty-books.vercel.app/'><h3>Novelty Books</h3></a>
            </header>
            <main>
              <p>Novelty Books es un proyecto académico basado en un E-commerce de libros diseñado para tener acceso a una biblioteca virtual desde cualquier lugar. Con esta aplicación podrás buscar fácilmente tus libros preferidos o también encontrar uno nuevo. Podrás realizar compras y compartir tus comentarios con el resto de la comunidad y así ayudar a otros usuarios a conseguir el libro indicado. Podrás crear una cuenta personal que registrará todas tus compras y libros favoritos para buscarlos rápidamente en otra ocasión.</p>
              <p>Como administrador tendrás acceso a una serie de herramientas que te permitirán gestionar fácilmente el E-commerce. Podrás añadir nuevos libros al catálogo o eliminarlos en caso de haberse agotado en el inventario. También tendrás a disposición todas las órdenes de compra que se han registrado, los usuarios que las hicieron y los pedidos asociados. Además contarás con una sección de estadísticas que te ayudará a medir el progreso del negocio por medio de gráficas.</p>
              <p>Puedes ver un breve video del funcionamiento de esta app <a href='https://www.youtube.com/watch?v=6JF0WrhJlw0'>aquí</a></p>
            </main>
          </div>
        </li>
        <li className={style.optionProyect}>
          <a href='https://pi-dogs-front-mu.vercel.app/'><img src={piDogs} alt='PI-Dogs' /></a>
          <div className={style.informationOptionContainer}>
            <header>
              <a href='https://pi-dogs-front-mu.vercel.app/'><h3>PI-Dogs</h3></a>
            </header>
            <main>
              <p>PI-Dogs es un proyecto académico basado en una aplicación web tipo wiki, diseñada para la comunidad amante de los perros. Con esta aplicación podrás buscar fácilmente la información más relevante de cada raza, como: su tamaño, peso y años de vida, temperamentos, etc. También podrás añadir nuevas razas de perro que no se encuentre registradas y en caso de que veas que alguien ha cometido un error al registrar alguna, también podrás hacer las modificaciones necesarias.</p>
            </main>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
