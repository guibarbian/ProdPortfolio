import styles from '../style.module.css'
import Titulo from '../../Titulo/Titulo'
import whats from '../../../../public/mdi_whatsapp.png'
import insta from '../../../../public/mdi_instagram.png'
import mail from '../../../../public/mdi_email-outline (1).png'

const Links = () => {
  return (
    <>
        <Titulo titulo='OU ME CONTATE DIRETAMENTE' size='medium'></Titulo>
        <ul className={styles.links}>
            <li><a href="https://wa.me/5551996600201"><img src={whats} alt="Icon Whats" /></a></li>
            <li><a href="https://www.instagram.com/gui.barbian/"><img src={insta} alt="Icon Insta" /></a></li>
            <li><a href="mailto:guiabarbian2@gmail.com"><img src={mail} alt="Icon Mail" /></a></li>
        </ul>
    </>
  )
}

export default Links