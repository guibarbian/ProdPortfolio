import styles from '../styles.module.css'

const BodyList = ({ children }: React.HTMLAttributes<HTMLUListElement> )=> {
  return (
    <ul className={styles.corpo}>{children}</ul>
  )
}

export default BodyList