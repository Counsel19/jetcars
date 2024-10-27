import { Zap } from "lucide-react";
import {  buttonVariants } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-[url('/images/hero_1.png')] bg-cover bg-no-repeat relative h-screen">
      <div className="bg-[#00000033]  absolute top-0 right-0 bottom-0 left-0" />
      <div className="max-w-[60%] h-full mx-auto grid gap-[2rem] place-content-center relative">
        {pathname.includes("book-a-ride") ? (
          <h2 className="text-[6rem] text-white text-center leading-[7.2rem]">
            Book Your Thrilling Ride Today
          </h2>
        ) : (
          <h2 className="text-[6rem] text-white text-center leading-[7.2rem]">
            We Guarantee you've never had fun like this
          </h2>
        )}

        {!pathname.includes("book-a-ride") ? (
          <Link
            to={"/book-a-ride"}
            className={cn(
              buttonVariants({
                className: "gap-3 flex w-[40rem]  mx-auto border border-white",
              })
            )}
          >
            <Zap />
            Book a Ride
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
