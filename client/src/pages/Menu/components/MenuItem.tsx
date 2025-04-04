import { MenuItemProps } from "../../../types/Props";

const MenuItem: React.FC<MenuItemProps> = ({
  el,
  view,
  hoveredItemId,
  setHoveredItemId,
  addToCart,
}) => {
  return (
    <li
      key={el.id}
      onMouseEnter={() => setHoveredItemId(el.id)}
      onMouseLeave={() => setHoveredItemId(null)}
      className={`cursor-pointer relative ${
        view === "grid" ? "max-w-80" : "flex items-center w-full"
      }`}
    >
      <div className="relative">
        <img className="min-w-80 max-h-52" src={el.image} alt="image" />
        <ul
          className={`${
            hoveredItemId === el.id ? "flex animate-fromTop" : "hidden"
          } flex-wrap gap-4 transition-all duration-200 absolute top-4 left-4`}
        >
          {el.categories.map((category, index) => {
            const bgColors: Record<string, string> = {
              hits: "bg-red-300",
              breakfast: "bg-yellow-300",
              dinner: "bg-gray-300",
              "without lactose": "bg-purple-300",
            };

            return (
              <li
                key={index}
                className={`flex text-white gap-2 py-1 w-auto px-4 rounded-lg ${
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
      </div>
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
        <div className="flex justify-between items-end">
          <p className="text-gray-600">{el.description}</p>
          <button
            onClick={() => addToCart(el)}
            className="min-w-8 min-h-8 cursor-pointer hover:bg-green-400 transition-all text-lg font-bold active:text-xl active:bg-green-600 active:scale-90 bg-green-500 rounded-full text-white"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
