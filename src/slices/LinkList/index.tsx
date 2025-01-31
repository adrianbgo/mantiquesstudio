import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
/**
 * Props for `LinkList`.
 */
export type LinkListProps = SliceComponentProps<Content.LinkListSlice>;

/**
 * Component for "LinkList" Slices.
 */
const LinkList = ({ slice }: LinkListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.linkList}
    >
      <p className={styles.title}>Follow Us</p>
      <div className={styles.links}>
        <PrismicNextLink field={slice.primary.facebook}>
          <FaFacebook />
        </PrismicNextLink>
        <PrismicNextLink field={slice.primary.instagram}>
          <FaInstagram />
        </PrismicNextLink>
        <PrismicNextLink field={slice.primary.pinterest}>
          <FaPinterest />
        </PrismicNextLink>
        <PrismicNextLink field={slice.primary.twitter}>
          <FaXTwitter />
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default LinkList;
