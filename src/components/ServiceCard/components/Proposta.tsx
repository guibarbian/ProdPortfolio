import styles from '../style.module.css'
import Titulo from "../../Titulo/Titulo"

type PropostaProps = {
    titleString:string,
    titleColor:string,
    descString:string,
    preco:string
}

const Proposta = ({titleString, titleColor, descString, preco}: PropostaProps) => {
  return (
    <ul className={styles.proposta}>
        <li><Titulo titulo={titleString} color={titleColor} size="medium" /></li>
        <li><p><i>{descString}</i></p></li>
        <li><h4>{preco}</h4></li>
    </ul>
  )
}

export default Proposta