import BookServiceWrapper from "@/components/bookRide/BookServiceWrapper";
import Hero from "@/components/home/Hero";
import { servicesInfo } from "@/lib/dummyDate";


const BookRide = () => {
  return (
    <div>
      <Hero />
      {servicesInfo.map((item, index) => (
        <div className="relative" key={item.id}>
          <div className="w-frame py-[2rem] px-[5rem]">
            <BookServiceWrapper
              gallery={item.gallery}
              image={item.showImage}
              about={item.about}
              prices={item.prices}
              serviceName={item.name}
              direction={index == 1 ? "right-to-left" : "left-to-right"}
            />
          </div>
          <div className="absolute top-[35%] -z-10 right-0 left-0 ">
            <img
              src="/images/vectorBgs/blue_vector_1.svg"
              alt=""
              className="absolute top-0 w-screen"
            />
            <img
              src="/images/vectorBgs/blue_vector_2.svg"
              alt=""
              className="absolute top-8 w-screen"
            />
            <img
              src="/images/vectorBgs/blue_vector_1.svg"
              alt=""
              className="absolute top-16 w-screen"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookRide;
