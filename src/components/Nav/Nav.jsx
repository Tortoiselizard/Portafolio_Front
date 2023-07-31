import { useEffect } from 'react'

import style from './Nav.module.css'

const arraySections = ['#AboutMe', '#Experience', '#Projects']

function Nav () {
  useEffect(() => {
    const handleScroll = (n) => {
      const objectSections = {}
      arraySections.map(section => document.querySelector(section)).forEach((section, index) => {
        objectSections[arraySections[index].slice(1)] = section.getBoundingClientRect()
      })
      function selectCurrentSection (objectSections) {
        arraySections.forEach(section => {
          const sectionCurrent = document.getElementsByName(section.slice(1))[0]
          const currentDiv = sectionCurrent.querySelector('div')
          if (objectSections[section.slice(1)].top <= n && objectSections[section.slice(1)].bottom > n) {
            sectionCurrent.classList.add(style.currentSectionA)
            currentDiv.classList.add(style.currentSectionDiv)
          } else {
            sectionCurrent.classList.forEach(className => {
              if (className === style.currentSectionA) {
                sectionCurrent.classList.add(style.currentSectionContract)
                setTimeout(() => {
                  sectionCurrent.classList.remove(style.currentSectionA)
                  sectionCurrent.classList.remove(style.currentSectionContract)
                  currentDiv.classList.remove(style.currentSectionDiv)
                }, 300)
              }
            })
          }
        })
      }
      selectCurrentSection(objectSections)
    }
    function callSelectCurrentSection () {
      if (window.innerWidth > 480) handleScroll(100)
      else handleScroll(240)
    }

    if (window.innerWidth > 480) {
      window.addEventListener('scroll', callSelectCurrentSection)
      return () => {
        window.removeEventListener('scroll', callSelectCurrentSection)
      }
    } else {
      const mainScrollContianer = document.getElementById('main-scroll-Contianer')
      mainScrollContianer.addEventListener('scroll', callSelectCurrentSection)
      return () => {
        mainScrollContianer.removeEventListener('scroll', callSelectCurrentSection)
      }
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
            <label>Sobre mí</label>
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
      </ul>
    </nav>
  )
}

export default Nav
