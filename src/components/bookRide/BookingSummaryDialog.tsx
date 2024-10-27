import React, { Dispatch, FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { formatToNaira } from "@/lib/formatToNiara";

interface BookingSummaryDialogProps {
  setStep: Dispatch<React.SetStateAction<number>>;
}
const BookingSummaryDialog: FC<BookingSummaryDialogProps> = ({ setStep }) => {
  const handlePayment = () => {
    setStep(4);
  };

  return (
    <div className="p-[2rem] grid gap-[2rem] h-[90vh] overflow-auto">
      <div className="">
        <h2 className="text-[4rem] leading-[4.5rem] text-primary">
          30 Mins Jetcar Ride
        </h2>
        <p className="text-[#76767D] font-light text-[1.6rem] leading-[2.1rem]">
          You selected a booking for{" "}
          <span className="font-semibold">
            JetCar Rental 30 mins HR CARD (N20,000 for one person)
          </span>{" "}
          at <span className="font-semibold">1:45 pm on February 6, 2024</span>{" "}
          .Please provide your details in the form below to proceed with
          booking.
        </p>
      </div>

      <div className="p-[2rem] rounded-[1.2rem] border">
        <h5 className="text-[2.4rem] leading-[2.8rem] font-semibold  ">
          Payment Summary
        </h5>

        <hr className="w-[40%] my-[2rem]" />

        <div className="bg-[#F9FAFB] p-[2rem] grid grid-cols-2 gap-[2rem]">
          <div className="space-y-[2rem]">
            <h6 className="text-[#101928] text-[1.6rem] font-semibold">
              Apply Discount
            </h6>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
              <Input
                placeholder="Enter Code"
                className="h-[3.8rem] border-none ring-0 "
              />
              <Button className="rounded-[2rem] bg-[#222222] w-fit px-[2rem]">
                Apply
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <p className="text-[1.4rem] text-[#475367] font-normal">
                Sub Total
              </p>
              <p className="text-[1.4rem] font-semibold text-[#475367] ">
                {formatToNaira.format(50000)}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[1.4rem] text-[#475367] font-normal">
                Tax (10%)
              </p>
              <p className="text-[1.4rem] font-semibold text-[#475367] ">
                {formatToNaira.format(1000)}
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[40%] my-[2rem]" />
        <div className="w-[40%] flex justify-between items-center">
          <p className="text-[1.4rem] text-[#475367] font-normal">Total</p>
          <p className="text-[1.4rem] font-semibold text-[#475367] ">
            {formatToNaira.format(500000)}
          </p>
        </div>

        <Button
          onClick={handlePayment}
          className="rounded-[2rem] w-[40%] mt-[2rem] bg-[#222222]"
        >
          Pay {formatToNaira.format(500000)}
        </Button>
      </div>
    </div>
  );
};

export default BookingSummaryDialog;
