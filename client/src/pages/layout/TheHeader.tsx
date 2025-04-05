import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cart, main_icon } from "../../assets/img";
import { Menu, X } from "lucide-react";
import { User } from "../../types/Modals";

const TheHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const user: User | null = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="font-nunito max-md:justify-between max-md:pr-8 text-green-400 text-md font-medium flex items-center py-5 px-2.5 relative">
      <div className="w-1/5 flex justify-start">
        <Link to="/">
          <img src={main_icon} alt="logo" className="w-10 h-10" />
        </Link>
      </div>
      <nav className="flex w-3/5 max-md:hidden">
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
        {user ? (
          <Link
            className="w-36 h-12 border-b-2 max-md:hidden text-white text-lg border-green-600 px-2 bg-green-400 rounded-2xl flex justify-center items-center"
            to="/profile"
          >
            {user.name}
          </Link>
        ) : (
          <Link
            className="w-36 h-12 border-b-2 max-md:hidden text-white text-xl border-green-600 bg-green-400 rounded-2xl flex justify-center items-center"
            to="/sign-in"
          >
            Sign in
          </Link>
        )}
        <Link to="/cart">
          <img
            className="min-w-10 min-h-10 w-10 h-10 max-md:min-w-8 max-md:min-h-8 max-md:w-8 max-md:h-8"
            src={cart}
            alt="cart"
          />
        </Link>
        <button
          className="md:hidden text-green-500"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col items-center bg-white shadow-lg absolute top-16 left-0 w-full py-5 z-50 animate-fade-in"
        >
          <ul className="flex flex-col w-full text-center gap-4">
            <li>
              <Link to="/menu" onClick={() => setMenuOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/loyalty-program" onClick={() => setMenuOpen(false)}>
                Loyalty Program
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                About us
              </Link>
            </li>
          </ul>
          {user ? (
            <Link
              className="w-36 h-12 border-b-2 md:hidden text-white text-lg border-green-600 px-2 bg-green-400 rounded-2xl flex justify-center items-center"
              to="/profile"
            >
              {user.name}
            </Link>
          ) : (
            <Link
              className="w-36 h-12 border-b-2 md:hidden text-white text-xl border-green-600 bg-green-400 rounded-2xl flex justify-center items-center"
              to="/sign-in"
            >
              Sign in
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default TheHeader;
