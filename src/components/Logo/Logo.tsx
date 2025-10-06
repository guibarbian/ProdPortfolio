import styles from './styles.module.css'
import logoImage from '../../../public/Logo de Produtor-Photoroom.png'

type LogoProps = {
    size: 'small' | 'medium' | 'big'
}

const Logo = ({size = 'medium'}: LogoProps) => {
    const classMap = {
        small: styles.small,
        medium: styles.medium,
        big: styles.big
    }
  return (
    <img src={logoImage} alt="Logo" className={classMap[size]}/>
  )
}

export default Logo