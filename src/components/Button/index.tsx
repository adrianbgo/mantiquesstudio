import { KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import React from 'react'
import styles from './index.module.css';

interface IButton {
    link: LinkField,
    style: KeyTextField,
    text: KeyTextField
}

const Button: React.FC<IButton> = ({link,style,text}) => {
  return (
    <PrismicNextLink 
        field={link}
        className={`${styles.button} ${style == "Fill" ? styles.buttonFilled : styles.buttonOutlined}`}
    >
        {text}
    </PrismicNextLink>
  )
}

export default Button