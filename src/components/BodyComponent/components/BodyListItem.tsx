import styles from '../styles.module.css'

const BodyListItem = ({  children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.item}>
        {children}
    </li>
  )
}

export default BodyListItem