import { cn } from "@/lib/utils";
import { FC } from "react";

interface SectionHeadingProps {
  heading: string;
  classnames?: string
}
const SectionHeading: FC<SectionHeadingProps> = ({ heading, classnames }) => {
  return (
    <h2 className={cn("text-[6.5rem] leading-[8rem] text-orange-800", classnames)}>{heading}</h2>
  );
};

export default SectionHeading;
