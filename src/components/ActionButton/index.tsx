import { KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import React from 'react'
import styles from './index.module.css';

interface IActionButton {
    action: () => void,
    style: KeyTextField,
    text: KeyTextField
}

const ActionButton: React.FC<IActionButton> = ({action,style,text}) => {
  return (
    <button type="button" className={`${styles.button} ${style=="Fill" ? styles.buttonFilled : styles.buttonOutlined}`} onClick={action}>
      {text}
    </button>
  )
}

export default ActionButton