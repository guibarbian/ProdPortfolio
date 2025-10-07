import styles from '../styles.module.css'
import Section from '../../Section/Section'
import Formulario from '../../Form/Formulario'

const Contato = () => {

  return (
    <>
        <Section id='contato' titulo='SE INTERESSOU?' content='contato'>
            <ul className={styles.responsavel}>
                <li>Entre em contato e vamos conversar sobre o seu som!</li>
            </ul>
            <Formulario />
        </Section>
    </>
    
  )
}

export default Contato