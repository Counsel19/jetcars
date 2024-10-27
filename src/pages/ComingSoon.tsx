import SectionHeading from "@/components/shared/atoms/SectionHeading";

const ComingSoon = () => {
  return (
    <div className="bg-[url('/images/hero_1.png')] bg-cover bg-no-repeat relative h-screen">
          <div className="bg-[#00000033]  absolute top-0 right-0 bottom-0 left-0" />
      <div className="  h-full grid place-content-center">
        <SectionHeading heading="Coming Soon..." classnames="text-white" />
      </div>
    </div>
  );
};

export default ComingSoon;
