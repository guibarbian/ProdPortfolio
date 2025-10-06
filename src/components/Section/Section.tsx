import styles from "./styles.module.css"
import Titulo from "../Titulo/Titulo"

type SectionProps = {
    id: string,
    titulo:string,
    content: 'home' | 'sobre' | 'portfolio' | 'servicos' | 'contato'
} & React.HTMLAttributes<HTMLElement>

const Section = ({id, titulo, content, children}: SectionProps) => {
  const classMap = {
    home: styles.home,
    sobre: styles.sobre,
    portfolio: styles.portfolio,
    servicos: styles.servicos,
    contato: styles.contato
  }
  return (
    <section id={id} className={classMap[content]}>
        <Titulo titulo={titulo} size="big"/> 
        {children}
    </section>
  )
}

export default Section