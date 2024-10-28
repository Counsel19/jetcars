import SectionHeading from "../shared/atoms/SectionHeading";
import ServiceCard from "./molecules/ServiceCard";

const Services = () => {
  return (
    <div className="pt-[25rem] w-frame ">
      <SectionHeading heading="Choose Your type of fun" classnames="text-center mb-[8rem]" />

      <div className="grid grid-cols-2 grid-rows-2 gap-[2rem] ">
        <ServiceCard
          link="/book-a-ride#one-hour"
          image="/images/services/one_hr_ride.svg"
          serviceName="1 Hour Jetcar Ride"
        />
        <div className="row-span-2">
          <ServiceCard
            link="/book-a-ride#thirty-mins"
            image="/images/services/thirty_mins_ride.png"
            serviceName="30 mins Jetcar Ride"
          />
        </div>
        <ServiceCard
          link="/book-a-ride#party"
          image="/images/services/party_ride.png"
          serviceName="Party Jet car Ride"
        />
      </div>
    </div>
  );
};

export default Services;
