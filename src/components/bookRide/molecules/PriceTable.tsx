import { amountType } from "@/types/bookRide";
import { FC } from "react";

interface PriceTableProps {
  prices: amountType[];
  serviceName: string;
}
const PriceTable: FC<PriceTableProps> = ({ prices, serviceName }) => {
  return (
    <div>
      {prices.map((price, index) => (
        <div key={index} className="border-b py-6 flex justify-between items-center">
          <div className="flex gap-8 ">
            <span className="text-lg">{serviceName}</span>

            <div className="flex gap-3">
              {new Array(price.numberOfPersons).fill(1).map((_, index) => (
                <img
                  key={index}
                  src={"/images/face_vector.svg"}
                  alt="face_vector"
                  className="w-[2.4rem] h-[2.4rem]"
                />
              ))}
            </div>
          </div>

          <span></span>
        </div>
      ))}
    </div>
  );
};

export default PriceTable;
