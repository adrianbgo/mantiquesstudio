import React from "react";
import Product from "../Product";
import styles from './index.module.css'
import { IEtsyInfo, Listing } from "@/types";

interface IProductListings {
  count: number,
  results: Listing[],
  centered: boolean
}

const ProductListings = ({count, results, centered=false}: IProductListings) => {
  return (
    <div className={centered ? styles.centered : ""}>
      <div className={`${styles.productListings} ${centered ? styles.productListingsCentered : ""}`}>
          {results.map(r => (
              <Product title={r.title} url={r.url} description={r.description} images={r.images} price={r.price} key={r.title} />
          ))}
      </div>
    </div>
  );
};

export default ProductListings;
