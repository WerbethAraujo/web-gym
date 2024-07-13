import HeroSlider from "./heroSlider";

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container max-auto h-full">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
