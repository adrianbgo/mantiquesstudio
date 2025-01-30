import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css';
import { PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";
/**
 * Props for `Buttons`.
 */
export type ButtonsProps = SliceComponentProps<Content.ButtonsSlice>;

/**
 * Component for "Buttons" Slices.
 */
const Buttons = ({ slice }: ButtonsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.buttons.map(b => (
        <Button link={b.link} text={b.text} style={b.style} />
      ))}
    </section>
  );
};

export default Buttons;
