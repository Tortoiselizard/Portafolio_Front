import style from './AboutMe.module.css'

function AboutMe () {
  return (
    <section id='AboutMe' className={style.AboutMeContainer}>
      <p>Soy <strong><span>desarrollador web full-stack</span></strong> con más de 2 años de experiencia construyendo y optimizando plataformas de EdTech y e-commerce. Trabajo en el ecosistema TypeScript —React y Next.js en el frontend, Node, NestJS y TypeORM en el backend— con foco en llevar productos a producción y hacerlos fiables: rendimiento, seguridad, pagos e integraciones.</p>
      <p>Me integro rápido con arquitecturas existentes y bases de código heredadas, y disfruto resolviendo problemas técnicos concretos que mejoran la experiencia del usuario final.</p>
    </section>
  )
}

export default AboutMe
