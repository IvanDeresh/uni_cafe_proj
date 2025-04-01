import { hits } from "../../constant";

const OurHits = () => {
  return (
    <section className="mt-36 flex flex-col justify-center items-center">
      <h2 className="text-green-500 text-3xl font-bold mb-10">Our Hits!</h2>

      <ul
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-500 `}
      >
        {hits.slice(0, 4).map((el) => (
          <li
            className="w-80 min-h-[400px] flex flex-col justify-between bg-white shadow-md rounded-xl overflow-hidden"
            key={el.id}
          >
            <img
              className="w-full h-60 object-cover"
              src={el.image}
              alt={el.name}
            />
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{el.name}</span>
                <span className="text-green-600 font-semibold">
                  ${el.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{el.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-5 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        See More
      </button>
    </section>
  );
};

export default OurHits;
