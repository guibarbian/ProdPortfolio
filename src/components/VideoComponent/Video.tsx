import styles from './style.module.css'

const Video = ({src, title}: React.VideoHTMLAttributes<HTMLVideoElement>) => {

  return (
    <iframe className={styles.muted} src={src} title={title}/>
  )
}

export default Video