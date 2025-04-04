import { useEffect, useState } from "react";
import { categories, hits } from "../../constant";
import { addItem } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Hit } from "../../types/Constant";
import MenuItem from "./components/MenuItem";
import ItemSkeleton from "../../helpers/skeletons/ItemSkeleton";

const Menu = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState<"grid" | "rows">("grid");
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const addToCart = (item: Hit) => {
    dispatch(addItem(item));
  };

  const filteredHits = selectedCategories.length
    ? hits.filter((hit) =>
        hit.categories.some((cat) => selectedCategories.includes(cat.title))
      )
    : hits;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col w-full items-center mb-20">
      <h2 className="text-3xl uppercase text-green-500 mb-24">Menu</h2>
      <div className="flex w-full gap-24 max-[75rem]:flex-col max-[75rem]:items-center max-[75rem]:justify-center max-[75rem]:px-8">
        <div className="w-1/5 max-[92rem]:pl-4 max-[75rem]:w-full max-[75rem]:px-[10vw]">
          <h3 className="text-xl text-green-400 font-bold mt-5 uppercase">
            Filter
          </h3>
          <ul className="flex flex-col gap-5 max-[75rem]:flex-row max-[75rem]:w-full max-[75rem]:gap-10 max-[40rem]:gap-5 max-[75rem]:flex-wrap">
            {categories.map(({ id, label, image, alt }) => (
              <li
                onClick={() => toggleCategory(label)}
                key={id}
                className="flex text-green-500 justify-between text-lg items-center max-[75rem]:gap-5"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(label)}
                  readOnly
                  className="w-6 h-6 border-2 cursor-pointer border-green-500 rounded-md appearance-none checked:bg-green-500 checked:border-green-500 transition-all duration-200 
              checked:before:content-['✔'] checked:before:text-white checked:before:text-lg flex justify-center items-center pb-1 checked:before:flex checked:before:items-center checked:before:justify-center"
                />
                <span>{label}</span>
                <img className="w-10 h-10" src={image} alt={alt} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-4/5 max-[75rem]:w-full">
          <div className="flex items-center mt-5 justify-between max-[75rem]:px-[10vw]">
            <h3 className="text-xl text-green-400 font-bold uppercase">View</h3>
            <ul className="flex gap-5 pr-6 ">
              <li
                onClick={() => setView("grid")}
                className={`grid grid-cols-2 max-h-5 max-w-5 grid-rows-2 gap-1 cursor-pointer`}
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
                className="grid grid-cols-1 max-h-5 max-w-9 grid-rows-1 gap-1 cursor-pointer max-[42rem]:hidden"
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
            } flex flex-wrap gap-8 w-full mt-5 justify-center items-center`}
          >
            {loading
              ? Array.from({ length: filteredHits.length }).map((_, index) => (
                  <ItemSkeleton key={index} />
                ))
              : filteredHits.map((el) => (
                  <MenuItem
                    el={el}
                    view={view}
                    hoveredItemId={hoveredItemId}
                    setHoveredItemId={setHoveredItemId}
                    addToCart={addToCart}
                  />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
