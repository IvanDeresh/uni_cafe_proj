import cartReducer, {
  addItem,
  removeItem,
  changeQuantity,
  clearCart,
} from "../store/slices/cartSlice";
import { Hit } from "../types/Constant";
import { describe, it, expect } from "@jest/globals";

describe("cartSlice", () => {
  const initialState = {
    items: [],
    totalQuantity: 0,
  };

  const newItem: Hit = {
    id: 102,
    image: "https://example.com/images/item102.jpg",
    name: "Vegan Breakfast Bowl",
    description:
      "A healthy breakfast bowl with a variety of fruits and oats, lactose-free.",
    price: 12.99,
    quantity: 30,
    categories: [
      {
        title: "breakfast",
        icon: "https://example.com/icons/breakfast-icon.png",
      },
      {
        title: "without lactose",
        icon: "https://example.com/icons/lactose-free-icon.png",
      },
    ],
  };

  const existingItem: Hit = {
    id: 1,
    image: "https://example.com/images/item1.jpg",
    name: "Item 1",
    description: "This is item 1.",
    price: 100,
    quantity: 1,
    categories: [],
  };

  it("should handle addItem action", () => {
    const nextState = cartReducer(initialState, addItem(newItem));

    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0]).toEqual({ ...newItem, quantity: 1 });
    expect(nextState.totalQuantity).toBe(1);
  });

  it("should handle addItem action when item already exists", () => {
    const stateWithItem = {
      items: [existingItem],
      totalQuantity: 1,
    };

    const nextState = cartReducer(stateWithItem, addItem(newItem));

    expect(nextState.items[0].quantity).toBe(1);
    expect(nextState.totalQuantity).toBe(2);
  });

  it("should handle removeItem action", () => {
    const stateWithItem = {
      items: [existingItem],
      totalQuantity: 1,
    };

    const nextState = cartReducer(stateWithItem, removeItem(1));

    expect(nextState.items).toHaveLength(0);
    expect(nextState.totalQuantity).toBe(0);
  });

  it("should handle changeQuantity action for increase", () => {
    const stateWithItem = {
      items: [existingItem],
      totalQuantity: 1,
    };

    const action = changeQuantity({ id: 1, type: "increase" });

    const nextState = cartReducer(stateWithItem, action);

    expect(nextState.items[0].quantity).toBe(2);
    expect(nextState.totalQuantity).toBe(2);
  });

  it('should handle changeQuantity action for removing item when quantity is 1 and type is "decrease"', () => {
    const stateWithItem = {
      items: [existingItem],
      totalQuantity: 1,
    };

    const action = changeQuantity({ id: 1, type: "decrease" });

    const nextState = cartReducer(stateWithItem, action);

    expect(nextState.items).toHaveLength(0);
    expect(nextState.totalQuantity).toBe(0);
  });

  it("should handle clearCart action", () => {
    const stateWithItems = {
      items: [
        {
          id: 1,
          name: "Item 1",
          price: 100,
          quantity: 1,
          categories: [],
          image: "",
          description: "",
        },
        {
          id: 2,
          name: "Item 2",
          price: 200,
          quantity: 2,
          categories: [],
          image: "",
          description: "",
        },
      ],
      totalQuantity: 3,
    };

    const nextState = cartReducer(stateWithItems, clearCart());

    expect(nextState.items).toHaveLength(0);
    expect(nextState.totalQuantity).toBe(0);
  });
});
