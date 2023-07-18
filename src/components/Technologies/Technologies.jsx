import style from './Technologies.module.css'

function Technologies () {
  return (
    <section className={style.TechnologiesContainer}>
      <h1>Estoy en Technologies</h1>
      <div>
        <ul className={style.TechnologiesFrontContainer}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScirpt</li>
          <li>React</li>
          <li>Redux</li>
          <li>Bootstrap</li>
        </ul>
        <ul className={style.TechnologiesBackContainer}>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>SequelizeJS</li>
          <li>PostgreSQL</li>
          <li>SQL</li>
        </ul>

        <ul className={style.TechnologiesOthersContainer}>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </section>
  )
}

export default Technologies
