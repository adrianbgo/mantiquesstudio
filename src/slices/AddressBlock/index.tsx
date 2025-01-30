import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for address_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AddressBlock;
