import { IEtsyInfo } from "@/app/api/etsy/route";
import React from "react";
import Product from "../Product";
import styles from './index.module.css'

const ProductListings = ({ count, results }: IEtsyInfo) => {
  return (
    <div className={styles.productListings}>
        {results.map(r => (
            <Product title={r.title} url={r.url} description={r.description} images={r.images} price={r.price} key={r.title} />
        ))}
    </div>
  );
};

export default ProductListings;
