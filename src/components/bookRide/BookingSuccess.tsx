import { Link } from "react-router-dom";
import {  buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const BookingSuccess = () => {
  return (
    <div className=" p-[4rem]">
      <div className="flex flex-col justify-center items-center gap-[3rem]">
        <h2 className="text-[4.3rem] text-primary leading-[4.5rem]">
          Congratulations!!!
        </h2>

        <p className="text-black font-thin text-center text-[3rem] leading-[4.5rem]">
          Your thrilling tide is booked! Get ready for an unforgettable
          experience!
        </p>

        <Link
          to={"/"}
          className={cn(
            buttonVariants({
              className: "bg-black w-[200px]",
            })
          )}
        >
          Continue Browsing
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
