import { Zap } from "lucide-react";
import SectionHeading from "../shared/atoms/SectionHeading";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="bg-[url('/images/bg_sea.png')] h-[64rem] grid  place-content-center">
      <div className="bg-[#00000033] z-10 absolute top-0 right-0 bottom-0 left-0" />
      <div className="grid gap-[2rem] w-[70%] mx-auto">
        <SectionHeading
          heading="Ready to Try?"
          classnames="text-primary text-center"
        />
        <SectionHeading
          heading="THE MOST EXCLUSIVE,ONE OF A KIND WATERSPORTS EXPERIENCE!"
          classnames="text-center text-white"
        />

        <Button className="gap-3 flex w-[40rem] z-20 mx-auto border font-semibold text-black  border-white">
          <Zap />
          Book a Ride Now
        </Button>
      </div>
    </div>
  );
};

export default CTA;