import React from 'react'
import styles from '../styles.module.css'

const FooterList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.list}>
        {children}
    </ul>
  )
}

export default FooterList