import { IEtsyInfo, Listing } from '@/app/api/etsy/route'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import styles from "./index.module.css"

const Product: React.FC<Listing> = ({title,description,images,price,url }) => {
  return (
    <div className={styles.product}>
        <div className={styles.image}>
            <Image src={images[0].url_fullxfull} alt={title} layout='fill' objectFit='cover' />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price.amount.toFixed(2)}</p>
        <p className={styles.description}>{description}</p>
        <Button link={url} style="Fill" text={"Buy Now"} />
    </div>
  )
}

export default Product