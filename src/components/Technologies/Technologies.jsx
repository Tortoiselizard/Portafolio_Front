import style from './Technologies.module.css'

import htmlLogo from '../../img/html5LogoWhite.png'
import cssLogo from '../../img/css3logoWhite.png'
import javascriptLogo from '../../img/javascriptLogoWhite.png'
import reactLogo from '../../img/reactLogoWhite.png'
import reduxLogo from '../../img/reduxLogoWhite.png'
import bootstrapLogo from '../../img/BootstrapLogoWhite.png'
import nodeJSLogo from '../../img/nodejsLogoWhite.png'
import expressLogo from '../../img/expressJSLogo.png'
import sequelizeLogo from '../../img/sequelizeLogoWhite.png'
import postgreSQLLogo from '../../img/postgreSQLLogoWhite2.png'
import sqlLogo from '../../img/SQLLogoWhite.png'
import gitLogo from '../../img/GitLogoWhite.png'
import githubLogo from '../../img/githubLogoWhite.png'

function Technologies () {
  return (
    <section id='Technologies' className={style.TechnologiesContainer}>
      <h2>Habilidades</h2>
      <div>
        <ul className={style.TechnologiesFrontContainer}>
          <li><img src={htmlLogo} alt='HTML' /></li>
          <li><img src={cssLogo} alt='CSS' /></li>
          <li><img src={javascriptLogo} alt='JavaScript' /></li>
          <li><img src={reactLogo} alt='React' /></li>
          <li><img src={reduxLogo} alt='Redux' /></li>
          <li><img src={bootstrapLogo} alt='Bootstrap' /></li>
        </ul>
        <ul className={style.TechnologiesBackContainer}>
          <li><img src={nodeJSLogo} alt='NodeJS' /></li>
          <li><img src={expressLogo} alt='Express' /></li>
          <li><img src={sequelizeLogo} alt='Sequelize' /></li>
          <li><img src={postgreSQLLogo} alt='PostgreSQL' /></li>
          <li><img src={sqlLogo} alt='SQL' /></li>
        </ul>

        <ul className={style.TechnologiesOthersContainer}>
          <li><img src={gitLogo} alt='GIT' /></li>
          <li><img src={githubLogo} alt='GitHub' /></li>
        </ul>
      </div>
    </section>
  )
}

export default Technologies
