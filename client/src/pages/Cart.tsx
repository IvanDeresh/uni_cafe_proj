import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../store/slices/cartSlice";
import { Hit } from "../types/Constant";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(
    (state: { cart: { items: Hit[]; totalPrice: number } }) => state.cart
  );

  const removeFromCart = (id: number) => {
    dispatch(removeItem(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-[70vh]">
      <h2>Shopping Cart</h2>
      <div>
        {cart.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.items.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>Price: ${item.price}</div>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove from cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p>Total Price: ${cart.totalPrice.toFixed(2)}</p>
        <button onClick={clearCartHandler}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
