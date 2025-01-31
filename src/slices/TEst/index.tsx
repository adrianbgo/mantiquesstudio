import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TEst`.
 */
export type TEstProps = SliceComponentProps<Content.TEstSlice>;

/**
 * Component for "TEst" Slices.
 */
const TEst = ({ slice }: TEstProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for t_est (variation: {slice.variation}) Slices
    </section>
  );
};

export default TEst;
