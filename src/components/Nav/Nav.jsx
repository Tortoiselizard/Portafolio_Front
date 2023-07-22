import style from './Nav.module.css'

function Nav () {
  return (
    <nav className={style.Nav}>
      <ul>
        <li>
          <a>
            <div />
            <label>Sobre mi</label>
          </a>
        </li>
        <li>
          <a>
            <div />
            <label>Experiencia</label>
          </a>
        </li>
        <li>
          <a>
            <div />
            <label>Proyectos</label>
          </a>
        </li>
        <li>
          <a>
            <div />
            <label>Habilidades</label>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
