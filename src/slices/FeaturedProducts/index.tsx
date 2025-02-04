import ProductListings from "@/components/ProductListings";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css'
/**
 * Props for `FeaturedProducts`.
 */
export type FeaturedProductsProps =
  SliceComponentProps<Content.FeaturedProductsSlice>;

/**
 * Component for "FeaturedProducts" Slices.
 */
const FeaturedProducts = async ({ slice }: FeaturedProductsProps): Promise<React.JSX.Element> => {
  const data = await fetch(`${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_URL : "https://localhost:3000"}/api/etsy/featured`)
  const listings = await data.json();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation == "centered" ? styles.productListingSectionCentered : styles.productListingSection}
    >
      <h2 className={styles.heading}>{slice.primary.title}</h2>
      <ProductListings count={listings.count} results={listings.results} centered={slice.variation == "centered"}/>
    </section>
  );
};

export default FeaturedProducts;
