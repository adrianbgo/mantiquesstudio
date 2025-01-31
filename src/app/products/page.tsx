import React from 'react'
import { IEtsyInfo } from '../api/etsy/route'
import ProductListings from '@/components/ProductListings';



const ProductsPage = async () => {
    const data = await fetch(`${process.env.URL!}/api/etsy`);
    const listings = await data.json();

  return (
    <ProductListings count={listings.count} results={listings.results} />
  )
}

export default ProductsPage