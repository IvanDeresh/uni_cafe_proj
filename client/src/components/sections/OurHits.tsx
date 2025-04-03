import { hits } from "../../constant";
import { Link } from "react-router-dom";
import OurHitsItem from "./components/OurHitsItem";
const OurHits = () => {
  return (
    <section className="mt-36 flex flex-col justify-center items-center">
      <h2 className="text-green-500 text-3xl font-bold mb-10">Our Hits!</h2>

      <ul
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-500 `}
      >
        {hits.slice(0, 4).map((el) => (
          <OurHitsItem {...el} />
        ))}
      </ul>

      <Link
        className="mt-5 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        to="/menu"
      >
        See more
      </Link>
    </section>
  );
};

export default OurHits;
