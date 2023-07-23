import { useEffect } from 'react'

import style from './Nav.module.css'

const arraySections = ['#AboutMe', '#Experience', '#Projects']

function Nav () {
  useEffect(() => {
    const handleScroll = () => {
      const objectSections = {}
      arraySections.map(section => document.querySelector(section)).forEach((section, index) => {
        objectSections[arraySections[index].slice(1)] = section.getBoundingClientRect()
      })
      function selectCurrentSection (objectSections) {
        arraySections.forEach(section => {
          const sectionCurrent = document.getElementsByName(section.slice(1))[0]
          const currentDiv = sectionCurrent.querySelector('div')
          if (objectSections[section.slice(1)].top <= 100 && objectSections[section.slice(1)].bottom > 100) {
            sectionCurrent.classList.add(style.currentSectionA)
            currentDiv.classList.add(style.currentSectionDiv)
          } else {
            sectionCurrent.classList.remove(style.currentSectionA)
            currentDiv.classList.remove(style.currentSectionDiv)
          }
        })
      }
      selectCurrentSection(objectSections)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToSection (sectionId) {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={style.Nav}>
      <ul>
        <li>
          <a name='AboutMe' onClick={() => scrollToSection('AboutMe')}>
            <div />
            <label>Sobre mi</label>
          </a>
        </li>
        <li>
          <a name='Experience' onClick={() => scrollToSection('Experience')}>
            <div />
            <label>Experiencia</label>
          </a>
        </li>
        <li>
          <a name='Projects' onClick={() => scrollToSection('Projects')}>
            <div />
            <label>Proyectos</label>
          </a>
        </li>
        {/* <li>
          <a name='Technologies' onClick={() => scrollToSection('Technologies')}>
            <div />
            <label>Habilidades</label>
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav
