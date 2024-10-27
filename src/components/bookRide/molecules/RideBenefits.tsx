import { rideBenefits } from "@/lib/dummyDate";

const RideBenefits = () => {
  return (
    <div className="grid justify-between  grid-cols-4 gap-[2rem]">
      {rideBenefits.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center gap-4">
          <img className="w-[3.2rem] h-[3.2rem]" src={item.icon} alt={item.text} />
          <span className="text-lg">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default RideBenefits;
