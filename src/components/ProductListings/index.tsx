import React from "react";
import Product from "../Product";
import styles from './index.module.css'
import { IEtsyInfo, Listing } from "@/types";

interface IProductListings {
  count: number,
  results: Listing[],
  featured: boolean
}

const ProductListings = ({count, results, featured=false}: IProductListings) => {
  return (
    <div className={`${styles.centered}`}>
      <div className={`${styles.productListings} ${featured ? styles.featuredProductListings : ""}`}>
          {results.map(r => (
              <Product title={r.title} url={r.url} description={r.description} images={r.images} price={r.price} key={r.title} />
          ))}
      </div>
    </div>
  );
};

export default ProductListings;
