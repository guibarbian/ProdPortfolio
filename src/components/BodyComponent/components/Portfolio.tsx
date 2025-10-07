import Section from '../../Section/Section'
import Video from '../../VideoComponent/Video'
import styles from '../styles.module.css'

const Portfolio = () => {
  return (
    <>

    <div className={styles.homePropsDesktop}>
      <Section id='portfolio' titulo='PORTFOLIO' content='portfolio'>
            <ul className={styles.responsavel}>
                <li>Veja aqui algumas das produções das quais fui responsável</li>
            </ul>
            <br /><br /><br />
            <ul className={styles.videos}>
                <li><Video title='Crazy Heat - Feel Your Fire' src='https://player.vimeo.com/video/1124711799?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
                <li><Video title='Crazy Heat - You Give Love a Bad Name' src='https://player.vimeo.com/video/1124670984?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
                <li><Video title='Crazy Heat - Is This Love' src='https://player.vimeo.com/video/1124711923?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
            </ul>
        </Section>
    </div>

    <div className={styles.homePropsMobile}>
      <Section id='portfolio' titulo='PORTFOLIO' content='portfolio'>
            <ul className={styles.responsavel}>
                <li>Veja aqui algumas das produções das quais fui responsável</li>
            </ul>
            <ul>
                <li><Video title='Crazy Heat - Feel Your Fire' src='https://player.vimeo.com/video/1124711799?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
                <li><Video title='Crazy Heat - You Give Love a Bad Name' src='https://player.vimeo.com/video/1124670984?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
                <li><Video title='Crazy Heat - Is This Love' src='https://player.vimeo.com/video/1124711923?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2cd43efeef&s=68a4521783511e8e0a00ac55b322abdae31c51d2_1759821161'/></li>
            </ul>
        </Section>
    </div>
        
    </>
  )
}

export default Portfolio