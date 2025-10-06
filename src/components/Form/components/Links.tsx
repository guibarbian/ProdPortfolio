import styles from '../style.module.css'
import Titulo from '../../Titulo/Titulo'

const Links = () => {
  return (
    <>
        <Titulo titulo='OU ME CONTATE DIRETAMENTE' size='medium'></Titulo>
        <ul className={styles.links}>
            <li><a href="https://wa.me/5551996600201"><img src="../../../../public/icons/mdi_whatsapp.png" alt="Icon Whats" /></a></li>
            <li><a href="https://www.instagram.com/gui.barbian/"><img src="../../../../public/icons/mdi_instagram.png" alt="Icon Insta" /></a></li>
            <li><a href="mailto:guiabarbian2@gmail.com"><img src="../../../../public/icons/mdi_email-outline (1).png" alt="Icon Mail" /></a></li>
        </ul>
    </>
  )
}

export default Links