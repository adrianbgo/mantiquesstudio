import React from 'react'
import ProductListings from '@/components/ProductListings';
import { getAllProducts } from '@/lib/getAllProducts';



const ProductsPage = async () => {
    const data = await getAllProducts();
    const listings = await data.json();

  return (
    <ProductListings count={listings.count} results={listings.results} featured={false}/>
  )
}

export default ProductsPage