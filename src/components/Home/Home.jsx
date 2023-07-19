import Nav from '../Nav/Nav'
import style from './Home.module.css'

function Home () {
  return (
    <section className={style.HomeContainer}>
      <h1>Troy Pernía</h1>
      <h2>Desarrollador Web Full Stack</h2>
      <p>Apacionado de la salud, educación y del desarrollo web</p>
      <Nav />
    </section>
  )
}

export default Home
