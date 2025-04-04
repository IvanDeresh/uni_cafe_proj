import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import { Hit } from "../../types/Constant";

const OurHitsItem = ({
  id,
  image,
  name,
  price,
  description,
  quantity,
  categories,
}: Hit) => {
  const dispatch = useDispatch();
  const addToCart = (item: Hit) => {
    dispatch(addItem(item));
  };
  return (
    <li
      className="w-80 min-h-96 flex cursor-pointer hover:scale-95 transition-all duration-300 flex-col justify-between bg-white shadow-md rounded-xl overflow-hidden"
      key={id}
    >
      <img className="w-full h-60 object-cover" src={image} alt={name} />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{name}</span>
          <span className="text-green-600 font-semibold">
            ${price.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 text-sm">{description}</p>
          <button
            onClick={() =>
              addToCart({
                id,
                image,
                name,
                description,
                price,
                quantity,
                categories,
              })
            }
            className="min-w-8 min-h-8 cursor-pointer hover:bg-green-400 transition-all text-lg font-bold active:text-xl active:bg-green-600 active:scale-90 bg-green-500 rounded-full text-white"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default OurHitsItem;
