import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  serviceName: string;
  link: string;
  image: string;
}
const ServiceCard: FC<ServiceCardProps> = ({ image, link, serviceName }) => {
  return (
    <div className="bg-primary  rounded-[1rem] ">
      <div className="grid h-full grid-rows-[1fr_5fr] p-[3rem]">
        <div className="flex justify-between gap-6 px-4">
          <h3 className="text-[4rem] leading-[4rem] text-white">{serviceName}</h3>
          <Link  to={link} className={cn(
            buttonVariants({
                className: "bg-black text-white"
            })
          )}>Book Now</Link>
        </div>
        <img
          src={image}
          alt={image}
          className="rounded-[1.3rem] object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
