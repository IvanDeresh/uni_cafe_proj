import { Link } from "react-router-dom";
import { cart, main_icon } from "../../assets/img";

const TheHeader = () => {
  return (
    <header className="font-nunito text-green-400 text-md font-medium flex items-center py-5 px-2.5">
      <div className="w-1/5 flex justify-center">
        <Link to="/">
          <img src={main_icon} alt="logo" className="w-10 h-10" />
        </Link>
      </div>
      <nav className="flex w-3/5">
        <ul className="flex w-[100%] justify-evenly items-center">
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/loyalty-program">Loyalty Program</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
      <div className="w-1/5 flex justify-center items-center gap-8">
        <Link
          className="w-36 h-12 border-b-2 text-white text-xl border-green-600 bg-green-400 rounded-2xl flex justify-center items-center"
          to="/sign-in"
        >
          Sign in
        </Link>
        <Link to="/cart">
          <img className="w-10 h-10" src={cart} alt="cart" />
        </Link>
      </div>
    </header>
  );
};

export default TheHeader;
