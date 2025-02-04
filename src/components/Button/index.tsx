import { KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import React from 'react'
import styles from './index.module.css';
import Link from 'next/link';

interface IButton {
    link: LinkField | string,
    style: KeyTextField | string,
    text: KeyTextField | string,
    key: KeyTextField | string
}

const Button: React.FC<IButton> = ({link,style,text,key}) => {
  return (
    <div key={key!.toString()}>
    {
      (typeof link === "string") ? (
        <Link 
          href={link}             
          className={`${styles.button} ${style == "Fill" ? styles.buttonFilled : styles.buttonOutlined}`}
        >
          {text}
        </Link>
      ) : (
        <PrismicNextLink 
            field={link}
            className={`${styles.button} ${style == "Fill" ? styles.buttonFilled : styles.buttonOutlined}`}
        >
            {text}
        </PrismicNextLink>
      )
    }
    </div>
  )
}

export default Button