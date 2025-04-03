import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hit } from "../../types/Constant";
import { PayloadChangeQuantity } from "../../types/Store";

interface CartState {
  items: Hit[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Hit>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    removeItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const existingItem = state.items.find((item: Hit) => item.id === itemId);

      if (existingItem) {
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
        state.items = state.items.filter((item: Hit) => item.id !== itemId);
      }
    },

    changeQuantity(state, action: PayloadAction<PayloadChangeQuantity>) {
      const { id, type } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (type === "increase") {
          existingItem.quantity += 1;
          state.totalQuantity++;
          state.totalPrice += existingItem.price;
        } else if (type === "decrease" && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
        }
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, changeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
