import React, { Dispatch, FC, useState } from "react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

interface BookingsDialogProps {
  setStep: Dispatch<React.SetStateAction<number>>;
}

const BookingsDialog: FC<BookingsDialogProps> = ({ setStep }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const availableDates = [
    {
      id: "1",
      from: "09:00",
      to: "10:00",
    },
    {
      id: "2",
      from: "09:00",
      to: "10:00",
    },
  ];

  const toggleSelectedSlot = (slotId: string) => {
    let tempSelectedSlots = [...selectedSlots];
    if (tempSelectedSlots.includes(slotId)) {
      tempSelectedSlots = tempSelectedSlots.filter((id) => id !== slotId);
    } else {
      tempSelectedSlots.push(slotId);
    }
    setSelectedSlots(tempSelectedSlots);
  };

  return (
    <div className="p-[2rem]  overflow-auto grid gap-[4rem]">
      <div className="space-y-[1rem]">
        <h2 className="text-[4rem] leading-[4.5rem] text-primary">
          30 Mins Jetcar Ride
        </h2>
        <p className="text-[#76767D] font-light text-[1.6rem] leading-[2.1rem]">
          you have the chance to start from 09:00 and come back till 09:30 -
          when the hottest hours begin. If it is more comfortable or even
          romantic for you to make a trip in the late afternoon hours - you can
          do it from 17:00 to 17:30.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[2rem]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-[2rem] shadow-[-3.79px_3.79px_0px_0px_#E87E133D] p-[2rem]"
        />
        <div className="rounded-[2rem] shadow-[-3.79px_3.79px_0px_0px_#E87E133D] p-[2rem]">
          <h5 className="font-semibold text-[#3F434A] text-[1.7rem] leading-[2.2rem]">
            Available Slots on
          </h5>
          <h6 className="font-semibold text-[#3F434A] text-[4.4rem] ">
            {date && format(date, "dd-MM-yyyy")}
          </h6>

          <div className="grid gap-[1rem] mt-[2rem]">
            {availableDates.map((slot, index) => (
              <button
                onClick={() => toggleSelectedSlot(slot.id)}
                key={index}
                className={cn(
                  "flex justify-between gap-[2rem] items-center h-[4.4rem] font-normal text-base  py-4 px-6 rounded-[2rem] bg-[#F8F8F8]",
                  selectedSlots.includes(slot.id)
                    ? "text-[#EC841E]"
                    : "text-[#33363F]"
                )}
              >
                {selectedSlots.includes(slot.id) ? <Check /> : null}
                <div className="w-full flex justify-between">
                  <span>{slot.from}</span>
                  <span>to</span>
                  <span>{slot.to}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={() => setStep(2)} className="bg-black">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default BookingsDialog;
