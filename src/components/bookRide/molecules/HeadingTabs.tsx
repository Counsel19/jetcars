import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface HeadingTabsProps {
  currentIndex: number;
  headings: string[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
const HeadingTabs: FC<HeadingTabsProps> = ({
  currentIndex,
  setCurrentIndex,
  headings,
}) => {
  return (
    <div className="w-[50%] mx-auto flex gap-8">
      {headings.map((heading, index) => (
        <button onClick={() => setCurrentIndex(index)} key={index}>
          <h3
            className={cn(
              "text-[3rem] text-gray-800",
              currentIndex == index && "border-primary border-b-[.7rem]"
            )}
          >
            {heading}
          </h3>
        </button>
      ))}
    </div>
  );
};

export default HeadingTabs;
