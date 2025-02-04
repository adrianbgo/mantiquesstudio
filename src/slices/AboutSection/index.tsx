import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.css";
import Button from "@/components/Button";
/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.aboutSection}
    >
      <h2 className={styles.title}>{slice.primary.title}</h2>
      <p className={styles.body}>{slice.primary.body}</p>
      <Button link={slice.primary.about_page} style={"Fill"} text={"Learn More"} key={""} />
    </section>
  );
};

export default AboutSection;
