import Nav from '../Nav/Nav'
import style from './Home.module.css'

function Home () {
  return (
    <section className={style.HomeContainer}>
      <h1>Troy Pernía</h1>
      <h2>Desarrollador Web Full Stack</h2>
      <p className={style.phraseHome}>Apacionado a la salud, educación y al <strong><span>Desarrollo Web</span></strong></p>
      <Nav />
    </section>
  )
}

export default Home
