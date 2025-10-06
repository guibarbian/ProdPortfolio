import React from 'react'
import style from '../style.module.css'

const HeaderListItem = ({  children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={style.item}>
        {children}
    </li>
  )
}

export default HeaderListItem