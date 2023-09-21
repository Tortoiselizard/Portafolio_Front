import style from './Experience.module.css'

function Experience ({ experiences }) {
  return (
    <section id='Experience' className={style.ExperienceContainer}>
      <h2>Experiencia</h2>
      <ul className={style.listExperiencecontainer}>
        {
          experiences.map((experience) => (
            <li className={style.OptionExperiencecontainer} key={experience.company}>
              <p className={style.dateOption}>{experience.date.join(' - ').replaceAll('/', '. ')}</p>
              <div>
                <header>
                  <h3>{experience.company}</h3>
                  <h4>{experience.position}</h4>
                </header>
                <main>
                  {
                    experience.content.map((paragraph, index) => (
                      <p key={'paragraph' + index}>{paragraph}</p>
                    ))
                  }
                </main>
                <footer>
                  <p>Las tecnologías con las que se trabajaron fueron:</p>
                  <ul className={style.listSkills}>
                    {
                      experience.footer.map(technology => (
                        <li key={technology}>{technology}</li>
                      ))
                    }
                  </ul>
                </footer>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Experience
