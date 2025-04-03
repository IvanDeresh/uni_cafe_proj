import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hit } from "../../types/Constant";

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
      const existingItem = state.items.find(
        (item: Hit) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.price += newItem.price;
      } else {
        state.items.push(newItem);
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

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
