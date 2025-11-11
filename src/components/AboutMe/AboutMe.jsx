import style from './AboutMe.module.css'

function AboutMe () {
  return (
    <section id='AboutMe' className={style.AboutMeContainer}>
      <p>Soy <strong><span>desarrollador web fullstack</span></strong> con dos años de experiencia en la creación de soluciones digitales que abordan necesidades reales. Me especializo en diseñar y desarrollar herramientas funcionales y eficaces que optimizan procesos y mejoran la experiencia del usuario.</p>
      <p>Además de mi interés por el <strong><span>desarrollo web</span></strong>, me entusiasma el mundo de los videojuegos y sueño con crear experiencias interactivas que combinen tecnología y creatividad.</p>
    </section>
  )
}

export default AboutMe
