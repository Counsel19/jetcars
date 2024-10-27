import { FC, useState } from "react";
import { Button } from "../ui/button";
import { amountType } from "@/types/bookRide";
import HeadingTabs from "./molecules/HeadingTabs";
import PriceTable from "./molecules/PriceTable";
import RideBenefits from "./molecules/RideBenefits";
import ImageCarousel from "./molecules/ImageCarousel";
import CustomDialog from "../shared/CustomDialog";
import BookingsDialog from "./BookingsDialog";
import BookingDetailsDialog from "./BookingDetailsDialog";
import BookingSummaryDialog from "./BookingSummaryDialog";
import BookingSuccess from "./BookingSuccess";

interface BookRideCardProps {
  serviceName: string;
  about: string;
  prices: amountType[];
  images: string[];
}

const BookRideCard: FC<BookRideCardProps> = ({
  about,
  prices,
  serviceName,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookingStep, setBookingStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary z-10  rounded-[1rem] relative">
      <div className="grid h-full grid-rows-[1fr_5fr] p-[3rem]">
        <div className="flex justify-between gap-6 px-4">
          <h3 className="text-[4rem] leading-[4rem] text-white">
            {serviceName}
          </h3>

          <CustomDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            button={<Button className="bg-black text-white">Book Now</Button>}
            dialogElement={
              bookingStep == 1 ? (
                <BookingsDialog setStep={setBookingStep} />
              ) : bookingStep == 2 ? (
                <BookingDetailsDialog setStep={setBookingStep} />
              ) : bookingStep == 3 ? (
                <BookingSummaryDialog setStep={setBookingStep} />
              ) : <BookingSuccess />
            }
          />
        </div>
        <div className="bg-white space-y-12 rounded-[2rem] p-[3rem]">
          <HeadingTabs
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            headings={["About", "Prices"]}
          />

          {currentIndex === 0 ? (
            <p className="text-lg leading-[2.1rem] text-gray-700">{about}</p>
          ) : (
            <PriceTable prices={prices} serviceName={serviceName} />
          )}

          <RideBenefits />

          <ImageCarousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default BookRideCard;
