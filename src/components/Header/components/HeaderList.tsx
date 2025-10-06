import React from 'react'
import styles from '../style.module.css'

const HeaderList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.header}>{children}</ul>
  )
}

export default HeaderList