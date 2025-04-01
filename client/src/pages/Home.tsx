import Blog from "../components/sections/Blog";
import Hero from "../components/sections/Hero";
import OurHits from "../components/sections/OurHits";
import Subscribe from "../components/sections/Subscribe";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <OurHits />
      <Blog />
      <Subscribe />
    </div>
  );
};

export default Home;
