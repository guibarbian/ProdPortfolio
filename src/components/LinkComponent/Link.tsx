import React from 'react'
import styles from './style.module.css'

type LinkComponentProps = {
    href:string,
    text?:string,
    type: "HeaderLink"
} & React.RefAttributes<HTMLAnchorElement>

const Link = ({ href, text, type="HeaderLink",  ...rest}: LinkComponentProps) => {
  const classMap = {
    HeaderLink: styles.HeaderLink
  }
  return (
    <a className={classMap[type]} href={href} {...rest}>{text}</a>
  )
}

export default Link