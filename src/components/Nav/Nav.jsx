import style from './Nav.module.css'

function Nav () {
  return (
    <nav className={style.Nav}>
      <ul>
        <li><a>Sobre mi</a></li>
        <li><a>Experiencia</a></li>
        <li><a>Proyectos</a></li>
      </ul>
    </nav>
  )
}

export default Nav
