import { changeQuantity, removeItem } from "../../../store/slices/cartSlice";
import { CartItemProps } from "../../../types/Props";

const CartItem = ({
  id,
  name,
  image,
  dispatch,
  description,
  quantity,
  price,
}: CartItemProps) => {
  return (
    <li
      key={id}
      className="flex gap-16 max-[66.25rem]:gap-4 w-full max-[66.25rem]:flex-col max-[66.25rem]:max-w-80"
    >
      <div className="">
        <img
          className="min-w-80 max-[24rem]:min-w-auto max-h-52"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="text-lg max-[24rem]:text-sm uppercase text-green-500">
          {name}
        </div>
        <div className="text-sm max-[24rem]:text-[12px] mt-4 uppercase text-green-500">
          {description}
        </div>
        <div className="flex justify-between mt-2 text-sm max-[24rem]:text-[12px] uppercase">
          <div className="flex gap-2">
            Quantity:
            <span className="text-green-400">{quantity}</span>
          </div>
          <div className="flex gap-2">
            Price:
            <span className="text-green-400">
              ${(price * quantity).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex justify-between w-full mt-10">
          <button
            className="min-w-8 min-h-8 cursor-pointer hover:bg-red-400 transition-all text-lg font-bold active:text-xl active:bg-red-600 active:scale-90 bg-red-500 rounded-full text-white"
            onClick={() => dispatch(changeQuantity({ id, type: "decrease" }))}
          >
            -
          </button>
          <button
            className="min-w-8 min-h-8 cursor-pointer hover:bg-green-400 max-[24rem]:text-[12px] transition-all text-lg font-bold active:text-xl active:bg-green-600 active:scale-90 bg-green-500 rounded-full text-white"
            onClick={() => dispatch(changeQuantity({ id, type: "increase" }))}
          >
            +
          </button>
          <button
            className="min-w-8 min-h-8 cursor-pointer hover:bg-purple-400 transition-all text-md max-[24rem]:text-[10px] px-4 active:text-xl active:bg-purple-600 active:scale-90 bg-purple-500 rounded-full text-white"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
