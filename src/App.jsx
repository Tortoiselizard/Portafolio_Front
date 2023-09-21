import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Contact from './components/Contact/Contact'

import './App.css'

import data from '../data.json'

const { experiences } = data

function App () {
  return (
    <main className='main-Container'>
      <section className='main-fixed-Container'>
        <Home />
        <Contact />
      </section>
      <section id='main-scroll-Contianer' className='main-scroll-Contianer'>
        <AboutMe />
        <Experience experiences={experiences} />
        <Projects />
        <Technologies />
      </section>
    </main>
  )
}

export default App
