import styles from './style.module.css'

type TituloProps = {
    titulo:string,
    color?: string,
    size: 'small' | 'medium' | 'big' | 'huge'
} & React.HTMLAttributes<HTMLHeadingElement>

const Titulo = ({titulo, size='big', color="--light-blue"}: TituloProps) => {
    const classMap = {
        small: styles.small,
        medium: styles.medium,
        big: styles.big,
        huge: styles.huge
    }

  return (
    <h1 style={{color: `var(${color})` , textShadow: `0 0 0.5rem var(${color})`}} className={classMap[size]}>{titulo}</h1>
  )
}

export default Titulo