import { Link } from "react-router-dom";
import SectionHeading from "../shared/atoms/SectionHeading";
import {  buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div className=" section-padding bg-orange-200 relative ">
      <div className=" w-frame grid grid-cols-[3fr_2fr] lg:gap-[5rem]">
        <div className="space-y-12 ">
          <SectionHeading heading="Experience adventure and fun with our Jetcars" />
          <p className="text-[2rem] leading-[3rem] w-[80%]">
            Jump into the driver's seat and ride the wave of fun with our
            awesome Jetcars – the only ones tearing up the scene in Nigeria.
            You've never had a blast like this before! These bad boys are a wild
            mashup of jet skis and sports cars, giving you the thrill of both
            worlds. Whether you're tearing up the roads or making waves, our
            Jetcars promise a joyride like no other. Get ready for a whole new
            level of adventure – because we guarantee you've never had fun like
            this!
          </p>

          <Link
            to={"/book-a-ride"}
            className={cn(
              buttonVariants({
                className: "bg-black text-white font-bold min-w-[20rem]",
              })
            )}
          >
            Book Now
          </Link>
        </div>
        <div className="relative">
          <img
            src="/images/about_jetcar.svg"
            alt="about_jetcar"
            className="w-full h-full object-cover rounded-lg "
          />
          <img
            src="/images/macaron.svg"
            alt="macaron"
            className="absolute -top-[4rem] -right-[4rem] w-[15rem] h-[15rem]"
          />
        </div>
      </div>
      <div className="absolute bottom-[9rem] right-0 left-0 ">
        <img
          src="/images/Rectangle1.svg"
          alt=""
          className="absolute top-0 w-screen"
        />
        <img
          src="/images/Rectangle2.svg"
          alt=""
          className="absolute top-8 w-screen"
        />
        <img
          src="/images/Rectangle2.svg"
          alt=""
          className="absolute top-16 w-screen"
        />
      </div>
    </div>
  );
};

export default About;
