import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import GenderSection from "../components/GenderSection";
import Reviews from "../components/Reviews";
import { Reveal } from "../hooks/useReveal";


const Home = () => {
  return (
    <>
    
      <Hero />

      <Reveal>
        <Categories />
      </Reveal>

      <Reveal>
        <BestSellers />
      </Reveal>

      <Reveal>
        <GenderSection />
      </Reveal>

      <Reveal>
        <Reviews />
      </Reveal>
    </>
  );
};

export default Home;
