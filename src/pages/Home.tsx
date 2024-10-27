import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <CTA />
    </div>
  );
};

export default Home;
