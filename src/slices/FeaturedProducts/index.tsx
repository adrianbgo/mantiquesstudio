import ProductListings from "@/components/ProductListings";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css'
import { getFeaturedProducts } from "@/lib/getFeaturedProducts";
import { FaBars } from "react-icons/fa";
/**
 * Props for `FeaturedProducts`.
 */
export type FeaturedProductsProps =
  SliceComponentProps<Content.FeaturedProductsSlice>;

/**
 * Component for "FeaturedProducts" Slices.
 */
const FeaturedProducts = async ({ slice }: FeaturedProductsProps): Promise<React.JSX.Element> => {
  const data = await getFeaturedProducts();
  const listings = await data.json();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation == "centered" ? styles.productListingSectionCentered : styles.productListingSection}
    >
      <h2 className={styles.heading}>{slice.primary.title}</h2>
      <ProductListings count={listings.count} results={listings.results} featured={slice.variation == "centered"}/>
    </section>
  );
};

export default FeaturedProducts;
