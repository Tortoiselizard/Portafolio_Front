import style from './AboutMe.module.css'

function AboutMe () {
  return (
    <section id='AboutMe' className={style.AboutMeContainer}>
      <p>El año pasado un amigo me recomendó incursionar en el mundo del <strong><span>desarrollo web</span></strong>. Después de hacer un curso corto me di cuenta que realmente me gustaba escribir código, así que dejé mi trabajo como técnico de ascensores y decidí redireccionar mi rumbo profesional.</p>
      <p>Un año despues logré graduarme como <strong><span>Full Stack Web Developer</span></strong> y me doy cuenta que aunque mi carrera como <strong><span>Ingeniero Mecánico</span></strong> aún me sigue gustando, definitivamente he encontrado otra pación en mi vida.</p>
    </section>
  )
}

export default AboutMe
