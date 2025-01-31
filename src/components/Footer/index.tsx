import React from 'react'
import styles from "./index.module.css";
import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';
import * as Slices from "../../slices";


const Footer = async () => {
    const client = createClient();
    const footer = await client.getByUID("footer","main-footer");
  return (
    <footer className={styles.footer}>
        <SliceZone slices={footer.data.slices} components={Slices.components}/>
    </footer>
  )
}

export default Footer