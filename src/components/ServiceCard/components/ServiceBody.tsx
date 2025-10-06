import styles from '../style.module.css'

const ServiceBody = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.cardBody}>
        {children}
    </ul>
  )
}

export default ServiceBody