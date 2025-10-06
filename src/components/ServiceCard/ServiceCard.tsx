import styles from './style.module.css'

const ServiceCard = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.card}>
      {children}
    </ul>
  )
}

export default ServiceCard