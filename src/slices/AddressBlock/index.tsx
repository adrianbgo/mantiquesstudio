import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css';

/**
 * Props for `AddressBlock`.
 */
export type AddressBlockProps = SliceComponentProps<Content.AddressBlockSlice>;

/**
 * Component for "AddressBlock" Slices.
 */
const AddressBlock = ({ slice }: AddressBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.addressBlock}
    >
      <p className={styles.title}>
        Address
      </p>
      <div className={styles.addressContainer}>
        <p>{slice.primary.address_line_1}</p>
        {slice.primary.address_line_2 && <p>{slice.primary.address_line_2}</p>}
        <p>{slice.primary.city}, {slice.primary.state} {slice.primary.zip_code}</p>
        <p>{slice.primary.phone_number}</p>
      </div>
    </section>
  );
};

export default AddressBlock;
