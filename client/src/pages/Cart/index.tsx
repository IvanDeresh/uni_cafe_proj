import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/slices/cartSlice";
import { Hit } from "../../types/Constant";
import { cart } from "../../assets/img";
import { useState } from "react";
import CartItem from "./components/CartItem";
import CartModalWindow from "./components/CartModalWindow";

const Cart = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const cartItems = useSelector(
    (state: { cart: { items: Hit[]; totalPrice: number } }) => state.cart
  );

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  function handleFieldClose(e: React.FormEvent) {
    e.stopPropagation();
    setModalOpen(false);
  }

  const totalPrice = cartItems.items
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-[70vh] mb-40 mt-20 flex flex-col items-center w-full">
      <h2 className="text-3xl uppercase text-green-500 mb-24">Shopping Cart</h2>
      <div className="flex w-full max-[90rem]:px-4 justify-center max-[42rem]:flex-col-reverse max-[42rem]:px-10">
        <div className="w-8/10 border-r-4 mr-24 pr-24 max-[66.25rem]:pr-[4vw] max-[66.25rem]:mr-[4vw]   max-[42rem]:w-full max border-green-500 max-[42rem]:border-none max-[42rem]:mr-0 max-[42rem]:pr-0">
          {cartItems.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center  max-[42rem]:pt-10">
              <span className="text-2xl flex justify-center font-bold text-green-500">
                Your cart is empty.
              </span>
              <img className="w-10 h-10 mt-10" src={cart} alt="cart" />
            </div>
          ) : (
            <ul className="flex flex-col gap-8 max-[66.25rem]:items-center max-[66.25rem]:justify-center max-[66.25rem]:flex-wrap">
              {cartItems.items.map((item) => (
                <CartItem key={item.id} dispatch={dispatch} {...item} />
              ))}
            </ul>
          )}
        </div>
        <div className=" max-[42rem]:mb-10 max-[42rem]:border-b-4 max-[42rem]:border-green-500 max-[42rem]:w-full max-[42rem]:pb-10 max-[42rem]:flex max-[42rem]:flex-col max-[42rem]:justify-center max-[42rem]:items-center">
          <p className="text-xl uppercase text-green-500">
            Total Price: ${totalPrice}
          </p>
          <div className="flex gap-4 mt-8 items-center">
            <button
              onClick={clearCartHandler}
              className="px-4 cursor-pointer py-2 min-w-max bg-black text-white font-bold rounded-xl "
            >
              Clear Cart
            </button>
            <button
              className="px-4 py-1.5 cursor-pointer bg-green-400 border border-b-4 border-green-500 text-white font-bold rounded-xl "
              onClick={() => setModalOpen((prev) => !prev)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={handleFieldClose}
        className={`${
          modalOpen ? "flex justify-center items-center" : "hidden"
        } w-full h-[100%] bg-black/40 fixed top-0`}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <CartModalWindow
            totalPrice={Number(totalPrice)}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
