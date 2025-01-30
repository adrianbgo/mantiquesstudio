"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './index.module.css';
import Button from "@/components/Button";
import ActionButton from "@/components/ActionButton";
import { useState } from "react";
/**
 * Props for `NewsletterSignUp`.
 */
export type NewsletterSignUpProps =
  SliceComponentProps<Content.NewsletterSignUpSlice>;

/**
 * Component for "NewsletterSignUp" Slices.
 */
const NewsletterSignUp = ({ slice }: NewsletterSignUpProps): JSX.Element => {
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    console.log(email);
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.newsletterSignUp}
    >
      <p className={styles.heading}>
        {slice.primary.title}
      </p>
      <label className={styles.emailLabel} htmlFor="email">
        Email
      </label>        
      <input type="email" className={styles.email} id="email" onChange={e => setEmail(e.target.value)}/>
      <ActionButton
        text={"Sign Up"}
        style={"Fill"}
        action={onSubmit}
      />
    </section>
  );
};

export default NewsletterSignUp;
