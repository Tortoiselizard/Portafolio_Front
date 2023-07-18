import style from './Nav.module.css'

function Nav () {
  return (
    <div className={style.Nav}>
      <ul>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Tecnologías</li>
        <li>Contacto</li>
      </ul>
    </div>
  )
}

export default Nav
