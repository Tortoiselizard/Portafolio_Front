import style from './Nav.module.css'

function Nav () {
  return (
    <div className={style.Nav}>
      <ul>
        <li>Sobre mi</li>
        <li>Experiencia</li>
        <li>Proyectos</li>
      </ul>
    </div>
  )
}

export default Nav
