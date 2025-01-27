import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css';
import { PrismicNextLink } from "@prismicio/next";
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
        <PrismicNextLink
          field={b.link}
          className={`${styles.button} ${b.style == "Fill" ? styles.buttonFilled : styles.buttonOutlined}`}
        >
          {b.text}
        </PrismicNextLink>
      ))}
    </section>
  );
};

export default Buttons;
