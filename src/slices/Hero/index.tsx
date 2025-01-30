import { asImageWidthSrcSet, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css';
import Buttons from "../Buttons";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.container}>
        <PrismicNextImage field={slice.primary.image} alt="" className={styles.image}/>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{slice.primary.title}</h1>
          <p className={styles.body}>{slice.primary.body}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
