import React from 'react'
import ProductListings from '@/components/ProductListings';



const ProductsPage = async () => {
    const data = await fetch(`${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_URL : "http://localhost:3000"}/api/etsy`);
    const listings = await data.json();

  return (
    <ProductListings count={listings.count} results={listings.results} centered={false}/>
  )
}

export default ProductsPage