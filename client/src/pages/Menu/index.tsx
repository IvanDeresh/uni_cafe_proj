import { useState } from "react";
import { categories, hits } from "../../constant";

const Menu = () => {
  const [view, setView] = useState("grid");
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  return (
    <div className="min-h-[60vh] flex flex-col w-full items-center mb-20">
      <h2 className="text-3xl text-green-400 font-bold mt-5">Menu</h2>
      <div className="flex w-full gap-24">
        <div className="w-1/5">
          <h3 className="text-xl text-green-400 font-bold mt-5 uppercase">
            Filter
          </h3>
          <ul className="flex flex-col gap-5">
            {categories.map(({ id, label, image, alt }) => (
              <li
                key={id}
                className="flex text-green-500 justify-between text-lg items-center"
              >
                <input
                  type="checkbox"
                  className="w-6 h-6 border-2 cursor-pointer border-green-500 rounded-md appearance-none checked:bg-green-500 checked:border-green-500 transition-all duration-200 
              checked:before:content-['✔'] checked:before:text-white checked:before:text-lg flex justify-center items-center pb-1 checked:before:flex checked:before:items-center checked:before:justify-center"
                />
                <span>{label}</span>
                <img className="w-10 h-10" src={image} alt={alt} />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-4/5">
          <div className="flex items-center mt-5 justify-between">
            <h3 className="text-xl text-green-400 font-bold uppercase">View</h3>
            <ul className="flex gap-5 pr-16">
              <li
                onClick={() => setView("grid")}
                className="grid grid-cols-2 max-h-5 max-w-5 grid-rows-2 gap-1 cursor-pointer"
              >
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-[2px] ${
                      view === "grid"
                        ? "bg-green-500"
                        : "bg-white border border-green-500"
                    }`}
                  ></div>
                ))}
              </li>
              <li
                onClick={() => setView("rows")}
                className="grid grid-cols-1 max-h-5 max-w-9 grid-rows-1 gap-1 cursor-pointer"
              >
                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-2 rounded-[2px] ${
                      view === "rows"
                        ? "bg-green-500"
                        : "bg-white border border-green-500"
                    }`}
                  ></div>
                ))}
              </li>
            </ul>
          </div>

          <ul
            className={`${
              view === "grid" ? "" : "flex-col"
            } flex flex-wrap gap-8 w-full mt-5`}
          >
            {hits.map((el) => (
              <li
                key={el.id}
                onMouseEnter={() => setHoveredItemId(el.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className={`cursor-pointer relative ${
                  view === "grid" ? "max-w-80" : "flex items-center w-full"
                }`}
              >
                <img className="min-w-80 max-h-52" src={el.image} alt="image" />
                <ul
                  className={`${
                    hoveredItemId === el.id ? "flex animate-fromTop" : "hidden"
                  } flex-wrap gap-4 transition-all duration-200 absolute top-4 left-4`}
                >
                  {el.categories.map((category, index) => {
                    const bgColors: Record<string, string> = {
                      hit: "bg-red-400",
                      breakfest: "bg-yellow-400",
                      dinner: "bg-gray-500",
                      "without lactose": "bg-purple-500",
                    };

                    return (
                      <li
                        key={index}
                        className={`flex text-white gap-2 max-h-min w-auto py-2 px-4 rounded-lg ${
                          bgColors[category.title] || ""
                        }`}
                      >
                        <span>{category.title}</span>
                        <img
                          className="w-6 h-6"
                          src={category.icon}
                          alt={category.title}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div
                  className={`${
                    view === "grid"
                      ? "rounded-md mt-2"
                      : "w-full h-52 gap-5 flex rounded-r-md flex-col px-10"
                  } shadow-2xl p-4 bg-white`}
                >
                  <div className="flex justify-between">
                    <h5 className="text-lg font-bold">{el.name}</h5>
                    <span className="text-green-500 font-medium">
                      ${el.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600">{el.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
