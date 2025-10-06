import styles from './styles.module.css'

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
    <img src="public\GBP Logo.png" alt="Logo" className={classMap[size]}/>
  )
}

export default Logo