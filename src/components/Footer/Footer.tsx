import styles from './styles.module.css'
import FooterList from './components/FooterList'
import FooterListItem from './components/FooterListItem'
import Copyright from './components/Copyright'

const Footer = () => {
  return (
    <div className={styles.mainDiv}>
      <FooterList>
        <FooterListItem type='text'><a href="#home">Home</a></FooterListItem>
        <FooterListItem type='text'><a href="#sobre">Sobre</a></FooterListItem>
        <FooterListItem type='text'><a href="#porfolio">Portfolio</a></FooterListItem>
        <FooterListItem type='text'><a href="#servicos">Serviços</a></FooterListItem>
        <FooterListItem type='text'><a href="#contato">Contato</a></FooterListItem>
      </FooterList>
      <FooterList>
        <FooterListItem type='icon'><a href="https://www.instagram.com/gui.barbian/"><img src="../../../public/mdi_instagram.png" alt="Icon Insta"></img></a></FooterListItem>
        <FooterListItem type='icon'><a href="/"><img src="../../../public/mingcute_spotify-line.png" alt="Icon Spotify"></img></a></FooterListItem>
        <FooterListItem type='icon'><a href="https://www.youtube.com/@gb_producer"><img src="../../../public/mingcute_youtube-line.png" alt="Icon YouTube"></img></a></FooterListItem>
        <FooterListItem type='icon'><a href="https://www.linkedin.com/in/guilherme-augusto-barbian-12365b20b/"><img src="../../../public/mdi_linkedin.png" alt="Icon Linkedin"></img></a></FooterListItem>
      </FooterList>
      <Copyright />
    </div>
  )
}

export default Footer