import {
  brakfest_hit,
  breakfest,
  cappucino_hit,
  cheescake_hit,
  coffee,
  crossaint_hit,
  crossaints,
  dinner,
  espresso,
  frenchtost_hit,
  lactose_free,
  latte_vanilla,
  matcha,
  plant_coffee,
  sandwich,
  top,
} from "../assets/img";
import { Blog, Hit } from "../types/Constant";

export const blogs: Blog[] = [
  {
    icon: coffee,
    title: "The Art of Brewing Coffee",
    desc: "Discover the secrets of making the perfect cup of coffee at home.",
    author: "John Doe",
    date: "2024-04-01",
  },
  {
    icon: crossaints,
    title: "Why Fresh Pastries Matter",
    desc: "Learn why freshly baked pastries make all the difference in your breakfast experience.",
    author: "Jane Smith",
    date: "2024-03-28",
  },
  {
    icon: plant_coffee,
    title: "Sustainable Coffee Sourcing",
    desc: "How we ensure our coffee beans come from ethical and sustainable sources.",
    author: "Emily Brown",
    date: "2024-03-20",
  },
];

export const hits: Hit[] = [
  {
    id: 1,
    image: crossaint_hit,
    name: "Classic Croissant",
    description: "Flaky, buttery, and freshly baked every morning.",
    price: 3.5,
    categories: [
      { title: "hit", icon: top },
      { title: "dinner", icon: dinner },
    ],
  },
  {
    id: 2,
    image: cappucino_hit,
    name: "Cappuccino",
    description: "A perfect balance of espresso, steamed milk, and foam.",
    price: 4.0,
    categories: [
      { title: "breakfest", icon: breakfest },
      { title: "without lactose", icon: lactose_free },
    ],
  },
  {
    id: 3,
    image: brakfest_hit,
    name: "Breakfast Combo",
    description: "Includes a croissant, scrambled eggs, and a cup of coffee.",
    price: 8.5,
    categories: [
      { title: "hit", icon: top },
      { title: "breakfest", icon: breakfest },
    ],
  },
  {
    id: 4,
    image: cheescake_hit,
    name: "New York Cheesecake",
    description: "Rich and creamy with a graham cracker crust.",
    price: 5.5,
    categories: [
      { title: "dinner", icon: dinner },
      { title: "without lactose", icon: lactose_free },
    ],
  },
  {
    id: 5,
    image: latte_vanilla,
    name: "Vanilla Latte",
    description: "Smooth espresso with steamed milk and vanilla syrup.",
    price: 4.5,
    categories: [
      { title: "hit", icon: top },
      { title: "breakfest", icon: breakfest },
      { title: "without lactose", icon: lactose_free },
    ],
  },
  {
    id: 6,
    image: frenchtost_hit,
    name: "French Toast",
    description: "Golden brown toast served with syrup and berries.",
    price: 6.0,
    categories: [
      { title: "breakfest", icon: breakfest },
      { title: "dinner", icon: dinner },
    ],
  },
  {
    id: 7,
    image: matcha,
    name: "Matcha Latte",
    description: "A creamy blend of matcha green tea and milk.",
    price: 4.8,
    categories: [
      { title: "hit", icon: top },
      { title: "without lactose", icon: lactose_free },
    ],
  },
  {
    id: 8,
    image: sandwich,
    name: "Chicken Avocado Sandwich",
    description:
      "Grilled chicken, avocado, lettuce, and sauce in ciabatta bread.",
    price: 7.0,
    categories: [
      { title: "dinner", icon: dinner },
      { title: "breakfest", icon: breakfest },
    ],
  },
  {
    id: 9,
    image: espresso,
    name: "Double Espresso",
    description: "A strong, rich shot of espresso for coffee lovers.",
    price: 3.0,
    categories: [
      { title: "hit", icon: top },
      { title: "without lactose", icon: lactose_free },
    ],
  },
  {
    id: 10,
    image: matcha,
    name: "Berry Smoothie",
    description: "A refreshing mix of strawberries, blueberries, and yogurt.",
    price: 5.2,
    categories: [
      { title: "breakfest", icon: breakfest },
      { title: "dinner", icon: dinner },
    ],
  },
];
