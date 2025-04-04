import Blog from "../sections/Blog";
import Hero from "../sections/Hero";
import OurHits from "../sections/OurHits";
import Subscribe from "../sections/Subscribe";

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
