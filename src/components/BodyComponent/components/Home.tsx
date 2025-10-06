import styles from '../styles.module.css'
import Section from '../../Section/Section'
import Titulo from '../../Titulo/Titulo'
import Video from '../../VideoComponent/Video'

const Home = () => {
  return (
    <>
      <Section id='home' content='home' titulo='MOSTRE SUAS IDEIAS PARA O MUNDO'>
        <ul className={styles.subtitulo}>
          <li>Gravação</li>
          <li>Edição</li>
          <li>Mixagem</li>
          <li>Masterização</li>
        </ul>
        <ul className={styles.provas}>
          <a href="#portfolio"><li><Titulo size='big' titulo='OUÇA MEU TRABALHO' /></li></a>
          <a href="#servicos"><li><Titulo size='big' titulo='SOLICITE ORÇAMENTO' /></li></a>
        </ul>
        <ul className={styles.videos}>
          <li><Video title='Crazy Heat - Feel Your Fire' src='https://player.vimeo.com/video/1124711799?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
          <li><Video title='Crazy Heat - You Give Love a Bad Name' src='https://player.vimeo.com/video/1124670984?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
        </ul>
      </Section>
    </>
  )
}

export default Home