import { useState } from "react";
import { convertTime } from "../../helpers/utils/func";
import { User, Order } from "../../types/Modals";

const Profile = () => {
  const user: User | null = JSON.parse(localStorage.getItem("user") || "null");
  const orders: Order[] | null = JSON.parse(
    localStorage.getItem("orders") || "null"
  );

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string): void => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="min-h-[70vh] flex justify-around py-14">
      <div className="border-r-2 w-2/5 border-green-500 p-5 flex flex-col items-center">
        <h3 className="text-green-500 text-2xl font-bold">Profile</h3>
        <ul className="mt-4 flex flex-col gap-6">
          <li className="flex gap-4">
            <span className="text-md text-green-500 font-bold">Name:</span>
            <span className="text-green-500"> {user?.name}</span>
          </li>
          <li className="flex gap-4">
            <span className="text-md text-green-500 font-bold">Email:</span>
            <span className="text-green-500"> {user?.email}</span>
          </li>
          <li className="flex gap-4">
            <span className="text-md text-green-500 font-bold">Role:</span>
            <span className="text-green-500"> {user?.role}</span>
          </li>
          <li className="flex gap-4">
            <span className="text-md text-green-500 font-bold">
              Created at:
            </span>
            <span className="text-green-500">
              {convertTime(new Date(user?.createdAt || ""))}
            </span>
          </li>
        </ul>
      </div>

      <div className="w-3/5 flex flex-col items-center">
        <h3 className="text-green-500 text-2xl font-bold">Categories</h3>
        <ul className="w-full mt-6">
          <li>
            <button
              className="w-full text-left text-green-600 font-semibold border-b py-2 hover:bg-green-50"
              onClick={() => toggleSection("orders")}
            >
              ▶ Orders
            </button>
            {openSection === "orders" && (
              <div className="pl-4 mt-2 text-green-700 text-sm flex flex-col gap-2">
                {orders?.length ? (
                  user?.orders.map((order: Order, index: number) => (
                    <div key={index} className="border-b pb-2">
                      <p>🧾 Order ID: {order.orderId}</p>
                      <p>📅 Date: {convertTime(new Date(order.createdAt))}</p>
                      <p>💵 Total: ${order.totalPrice.toFixed(2)}</p>
                      <p>📦 Items: {order.items.length}</p>
                    </div>
                  ))
                ) : (
                  <p>No orders found</p>
                )}
              </div>
            )}
          </li>

          <li>
            <button
              className="w-full text-left text-green-600 font-semibold border-b py-2 hover:bg-green-50"
              onClick={() => toggleSection("favorites")}
            >
              ▶ Favorites
            </button>
            {openSection === "favorites" && (
              <div className="pl-4 mt-2 text-green-700 text-sm">
                <p>No favorites yet</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
