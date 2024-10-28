import { amountType } from "@/types/bookRide";
import { FC } from "react";
import BookRideCard from "./BookRideCard";
import { cn } from "@/lib/utils";

interface BookServiceWrapperProps {
  serviceName: string;
  about: string;
  prices: amountType[];
  image: string;
  gallery: string[];
  direction?: "right-to-left" | "left-to-right";
  slug: string;
}
const BookServiceWrapper: FC<BookServiceWrapperProps> = ({
  about,
  image,
  serviceName,
  gallery,
  prices,
  direction = "left-to-right",
  slug
}) => {
  return (
    <div
      className={cn(
        "grid mb-[6rem]",
        direction === "left-to-right"
          ? "grid-cols-[4fr_5fr]"
          : "grid-cols-[5fr_4fr]"
      )}
    >
      <img
        src={image}
        alt={image}
        className={cn(
          "rounded-[1.3rem] w-full h-[50rem] object-cover -translate-y-[4rem]",
          direction == "left-to-right"
            ? "order-0  translate-x-[4rem]"
            : "order-1  -translate-x-[4rem]"
        )}
      />
      <BookRideCard
        images={gallery}
        about={about}
        prices={prices}
        serviceName={serviceName}
        slug={slug}
      />

     
    </div>
  );
};

export default BookServiceWrapper;
