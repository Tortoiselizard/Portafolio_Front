import style from './AboutMe.module.css'

function AboutMe () {
  return (
    <section className={style.AboutMeContainer}>
      <p>En marzo del 2022 un amigo me recomendó hacer un Bootcamp online de desarrollo web y no lo dudé ni un segundo. Cuatro meses despues pude dar mis primeros pasos con los lenguajes: HTML, CSS y JavaScript.</p>
      <br />
      <p>Aunque mi formación en <strong><span>ingeniería mecánica</span></strong> me ayudó mucho a lograr mis primeras metas, no fue hasta octubre de ese mismo año que pude empezar mis estudios formales en el desarrollo web y me di cuenta de lo mucho que me gustaba la programación. Ese impulso fué necesario para poder sobrellevar las exigencias del programa, que tuvo una extención de 4 meses.</p>
      <br />
      <p>Finalmente, el mes de febrero de este año pude terminar mi formación y graduarme como <strong><span>Desarrollador Web Full Stack</span></strong>. Pero también me di cuenta que el aprendizaje en el desarrollo web no termina nunca y que mi camino apenas empezaba.</p>
    </section>
  )
}

export default AboutMe
