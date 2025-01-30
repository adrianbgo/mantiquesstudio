import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css';

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
export default function AboutSection({ slice }: AboutSectionProps): JSX.Element {
  return (
    <div className={styles.aboutSection}>
      <h1 className={styles.heading}>{slice.primary.heading}</h1>
      <p>
        {slice.primary.body}
      </p>
    </div>
  );
}
