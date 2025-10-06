import styles from '../styles.module.css'
import Section from '../../Section/Section'
import Titulo from '../../Titulo/Titulo'

const About = () => {
  return (
    <>
        <Section id='sobre' titulo='QUEM SOU EU?' content='sobre'>
            <ul>
                <li>
                    <p>Sempre fui apaixonado pelo audiovisual, mas em 2018 descobri na produção fonográfica meu verdadeiro caminho. Comecei de forma autodidata, produzindo para colegas e criando covers com VSTs, e logo percebi que transformar ideias em música era o que realmente me movia.
Em 2024 tive a oportunidade de trabalhar em um estúdio profissional, onde aprendi ainda mais sobre gravação, mixagem e masterização. Hoje, ajudo artistas e criadores a darem vida às suas músicas com qualidade, identidade e emoção. Se você tem algo a dizer através da música </p>
                </li>
                <li>
                    <a className={styles.juntos} href="#contato">
                        <Titulo titulo='VAMOS FAZER ISSO JUNTOS!' size='huge'></Titulo>
                    </a>
                </li>
            </ul>
        </Section>
    </>
  )
}

export default About