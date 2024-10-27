import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface ImageCarouselProps {
  images: string[];
}
const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {images
          .slice((currentSlide - 1) * 4, currentSlide * 4)
          .map((image, index) => (
            <div
              key={index}
              className=" w-[12.3rem] h-[12.3rem] overflow-hidden rounded-[1.2rem]"
            >
              <img
                src={image}
                alt={image}
                className="object-cover w-[12.3rem] h-[12.3rem]"
              />
            </div>
          ))}
      </div>
      <div className="flex w-fit gap-8 mx-auto">
        {new Array(Math.ceil(images.length / 4)).fill(1).map((_, index) => (
          <button
            onClick={() => setCurrentSlide(index + 1)}
            key={index}
            className={cn(
              "w-[1.2rem] h-[1.2rem] rounded-full",
              currentSlide == index + 1 ? " bg-primary " : "bg-gray-500"
            )}
          />
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
