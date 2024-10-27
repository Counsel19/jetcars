import { cn } from "@/lib/utils";
import SectionHeading from "../shared/atoms/SectionHeading";

const gallery = [
  "/images/gallery/jet_car_front_large.svg",
  "/images/gallery/jet_car_back.svg",
  "/images/gallery/jet_car_back.svg",
  "/images/gallery/jet_car_side.svg",
  "/images/gallery/lady_stand_in_jetcar.svg",
  "/images/gallery/jet_car_large_mid.svg",
  "/images/gallery/jet_car_side.svg",
  "/images/gallery/jet_car_side.svg",
  "/images/gallery/jet_car_side.svg",
];

const Gallery = () => {
  return (
    <div className="w-frame section-padding">
      <SectionHeading
        heading="What fun looks like for us"
        classnames="text-center mb-[8rem]"
      />
      <div className="grid grid-cols-4 grid-rows-3 gap-[2rem]">
        {gallery.map((item, index) => (
          <div
            key={index}
            className={cn(
              "w-full h-full",
              index == 0 && "col-span-2",
              index == 4 && "row-span-2",
              index == 5 && "col-span-2"
            )}
          >
            <img className=" object-contain w-full h-full" src={item} alt={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
