import { hits } from "../constant";
import { Link } from "react-router-dom";
import OurHitsItem from "./components/OurHitsItem";
import { useEffect, useState } from "react";
import ItemSkeleton from "../helpers/skeletons/ItemSkeleton";
const OurHits = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section className="mt-36 flex flex-col justify-center items-center px-4">
      <h2 className="text-green-500 text-3xl font-bold mb-10">Our Hits!</h2>

      <ul
        className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-500 `}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ItemSkeleton key={index} />
            ))
          : hits.slice(0, 4).map((el) => <OurHitsItem {...el} />)}
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
