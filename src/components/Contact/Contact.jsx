import style from './Contact.module.css'

function Contact () {
  function copyGmail () {
    const footer = document.getElementsByName('footerContainer')[0]
    const textArea = document.createElement('input')
    const message = document.createElement('lable')
    textArea.value = 'troy00pernia@gmail.com'
    message.textContent = 'Copiado'
    footer.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    footer.appendChild(message)
    message.classList.add(style.labelGmail)
    setTimeout(() => message.remove(), 2000)
  }

  return (
    <footer name='footerContainer' className={style.ContactContainer}>
      <ul>
        <li><a href='https://github.com/Tortoiselizard' /></li>
        <li><a href='https://www.linkedin.com/in/troy-dj-pernia/' /></li>
        <li><a onClick={copyGmail} /></li>
      </ul>
    </footer>
  )
}

export default Contact
