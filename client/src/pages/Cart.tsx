import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearCart,
  changeQuantity,
} from "../store/slices/cartSlice";
import { Hit } from "../types/Constant";
import { cart } from "../assets/img";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: { cart: { items: Hit[]; totalPrice: number } }) => state.cart
  );

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const submitForm = () => {
    //;
  };

  return (
    <div className="min-h-[70vh] mb-40 mt-20 flex flex-col items-center w-full">
      <h2 className="text-3xl uppercase text-green-500 mb-24">Shopping Cart</h2>
      <div className="flex w-full justify-center max-[42rem]:flex-col-reverse max-[42rem]:px-20">
        <div className="w-8/10 border-r-4 mr-24 pr-24 max-xl:w-3/5 max-[42rem]:w-full max border-green-500 max-[42rem]:border-none max-[42rem]:mr-0 max-[42rem]:pr-0">
          {cartItems.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center max-[42rem]:mt-10 max-[42rem]:border-t-4 max-[42rem]:border-green-500 max-[42rem]:pt-10">
              <span className="text-2xl flex justify-center font-bold text-green-500">
                Your cart is empty.
              </span>
              <img className="w-10 h-10 mt-10" src={cart} alt="cart" />
            </div>
          ) : (
            <ul className="flex flex-col gap-8">
              {cartItems.items.map((item) => {
                return (
                  <li key={item.id} className="flex gap-16 w-full">
                    <div className="">
                      <img
                        className="min-w-80 max-h-52"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="text-lg uppercase text-green-500">
                        {item.name}
                      </div>
                      <div className="text-sm mt-4 uppercase text-green-500">
                        {item.description}
                      </div>
                      <div className="flex justify-between mt-2 text-sm uppercase">
                        <div className="flex gap-2">
                          Quantity:
                          <span className="text-green-400">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          Price:
                          <span className="text-green-400">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between w-full mt-10">
                        <button
                          className="min-w-8 min-h-8 cursor-pointer hover:bg-red-400 transition-all text-lg font-bold active:text-xl active:bg-red-600 active:scale-90 bg-red-500 rounded-full text-white"
                          onClick={() =>
                            dispatch(
                              changeQuantity({ id: item.id, type: "decrease" })
                            )
                          }
                        >
                          -
                        </button>
                        <button
                          className="min-w-8 min-h-8 cursor-pointer hover:bg-green-400 transition-all text-lg font-bold active:text-xl active:bg-green-600 active:scale-90 bg-green-500 rounded-full text-white"
                          onClick={() =>
                            dispatch(
                              changeQuantity({ id: item.id, type: "increase" })
                            )
                          }
                        >
                          +
                        </button>
                        <button
                          className="min-w-8 min-h-8 cursor-pointer hover:bg-purple-400 transition-all text-md px-4 active:text-xl active:bg-purple-600 active:scale-90 bg-purple-500 rounded-full text-white"
                          onClick={() => dispatch(removeItem(item.id))}
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="w-2/10 max-xl:w-2/5 max-[42rem]:w-full max-[42rem]:flex max-[42rem]:flex-col max-[42rem]:justify-center max-[42rem]:items-center">
          <p className="text-xl uppercase text-green-500">
            Total Price: $
            {cartItems.items
              .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
              .toFixed(2)}
          </p>
          <div className="flex gap-4 mt-8">
            <button
              onClick={clearCartHandler}
              className="px-4 cursor-pointer py-2 bg-black text-white font-bold rounded-xl "
            >
              Clear Cart
            </button>
            <button
              className="px-4 py-1.5 cursor-pointer bg-green-400 border border-b-4 border-green-500 text-white font-bold rounded-xl "
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
