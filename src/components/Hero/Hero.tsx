import "./css/Hero.css";
import HeroPage1 from "./Pages/HeroPage1";
import HeroPage2 from "./Pages/HeroPage2";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center w-full min-h-screen">
      <HeroPage1 />
      <HeroPage2 />
    </div>
  );
};

export default Hero;
