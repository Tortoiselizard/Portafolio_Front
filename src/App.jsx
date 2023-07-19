import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

import './App.css'

function App () {
  return (
    <main className='main-Container'>
      <section className='main-fixed-Container'>
        <Home />
        <Contact />
      </section>
      <section className='main-scroll-Contianer'>
        <AboutMe />
        <Experience />
        <Projects />
      </section>
    </main>
  )
}

export default App
