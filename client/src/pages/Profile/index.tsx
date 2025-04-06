import { useEffect, useState } from "react";
import { convertTime } from "../../helpers/utils/convertTime";
import { User, Order } from "../../types/Modals";
import OrdersItem from "./components/OrdersItem";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const orders: Order[] | null = JSON.parse(
    localStorage.getItem("orders") || "null"
  );
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string): void => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("orders");
    navigate("/sign-in", { replace: true });
  }

  useEffect(() => {
    const syncUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener("storage", syncUser);
    window.addEventListener("user-updated", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("user-updated", syncUser);
    };
  }, []);

  return (
    <div className="min-h-[70vh] flex md:justify-around max-md:flex-col max-md:items-center py-14">
      <div className="md:border-r-2 max-md:border-b-2 w-2/5 border-[#29bd78] p-5 flex flex-col items-center">
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
          <li className="flex gap-4" onClick={logout}>
            <Button
              type="button"
              styles="px-4 cursor-pointer py-2 w-full bg-green-500 hover:bg-green-400 active:scale-95 active:bg-green-600 transition-all duration-300 text-white font-bold rounded-xl "
              label="Logout"
            />
          </li>
        </ul>
      </div>

      <div className="w-3/5 flex flex-col items-center max-md:mt-10">
        <h3 className="text-green-500 text-2xl font-bold">Categories</h3>
        <ul className="w-full mt-6">
          <li>
            <button
              className={`w-full text-left transition-all duration-200 cursor-pointer font-semibold border-b py-2 ${
                openSection === "orders"
                  ? "text-green-600 hover:bg-green-50"
                  : "text-white bg-[#29bd78] hover:bg-[#76caa3]"
              } `}
              onClick={() => toggleSection("orders")}
            >
              ▶ Orders
            </button>
            {openSection === "orders" && (
              <div className="pl-4 mt-2 text-green-700 text-sm flex flex-col gap-2">
                {orders?.length ? (
                  user?.orders.map((order: Order, index: number) => (
                    <OrdersItem
                      index={index}
                      {...order}
                      orderId={order.orderId || Math.random() * 100}
                      length={order.items.length}
                    />
                  ))
                ) : (
                  <p>No orders found</p>
                )}
              </div>
            )}
          </li>

          <li>
            <button
              className={`w-full text-left transition-all duration-200 cursor-pointer font-semibold border-b py-2 ${
                openSection === "favorites"
                  ? "text-green-600 hover:bg-green-50"
                  : "text-white bg-[#29bd78] hover:bg-[#76caa3]"
              } `}
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
