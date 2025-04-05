enum Role {
  USER,
  ADMIN,
  OWNER,
}
export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  createdAt: string;
  items: OrderItem[];
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
  orders: Order[];
}

export interface LoginResponse {
  user: User;
  token: string;
}
