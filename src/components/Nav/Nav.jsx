import style from './Nav.module.css'

function Nav () {
  function scrollToSection (sectionId) {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={style.Nav}>
      <ul>
        <li>
          <a onClick={() => scrollToSection('AboutMe')}>
            <div />
            <label>Sobre mi</label>
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection('Experience')}>
            <div />
            <label>Experiencia</label>
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection('Projects')}>
            <div />
            <label>Proyectos</label>
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection('Technologies')}>
            <div />
            <label>Habilidades</label>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
