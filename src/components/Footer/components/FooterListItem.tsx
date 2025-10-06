import React from 'react'
import styles from '../styles.module.css'

type FooterListProps = {
    type: 'text' | 'icon'
} & React.LiHTMLAttributes<HTMLLIElement>

const FooterListItem = ({children, type='text'}: FooterListProps) => {
    const classMap={
        text: styles.text,
        icon: styles.icon
    }

  return (
    <li className={classMap[type]}>
        {children}
    </li>
  )
}

export default FooterListItem