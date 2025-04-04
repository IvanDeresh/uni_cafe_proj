import { useState } from "react";
import { instagram, main_icon, telegram } from "../../assets/img";
import Button from "../../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const TheFooter = () => {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post("/subscribe", { email });
      setRes(response.data);
    } catch (error) {
      console.error("Subscription error:", error);
    }
  }

  return (
    <footer className="bg-[#29bd78] text-white pt-10 pb-6">
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:justify-between">
        <div className="flex flex-col gap-5 md:w-2/5">
          <img src={main_icon} alt="logo" className="w-14 h-14 mb-4" />
          <p className="text-lg">Join our newsletter for the latest updates!</p>
          <form
            onSubmit={handleSubmit}
            className="flex max-[22.5rem]:flex-col items-center gap-3"
          >
            <input
              placeholder="Enter your email"
              className="w-64 p-2 rounded-sm max-[22.5rem]:w-auto outline-none border-2 border-[#25bd76] bg-[#3be797] placeholder-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email_subscribe"
            />
            <Button
              label="Subscribe"
              type="submit"
              styles="bg-[#30b477] text-white py-2 px-6 rounded-lg border border-b-2 border-green-600 hover:border-green-700 active:scale-95 hover:bg-[#1f9960] transition duration-300"
            />
          </form>
        </div>

        <div className="flex flex-col gap-5 md:w-1/5 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <ul className="text-md flex flex-col gap-2">
            <li className="flex gap-6">
              Email:
              <a
                href="mailto:unicafe@gmail.com"
                className="text-green-700 cursor-pointer hover:text-green-900"
              >
                unicafe@gmail.com
              </a>
            </li>
            <li className="flex gap-6">
              Phone:{" "}
              <span className="text-green-700 cursor-pointer hover:text-green-900">
                +380 000 00 0000
              </span>
            </li>
            <div className="flex items-center gap-4">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-10 h-10 inline-block"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://web.telegram.org/k/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <img
                    src={telegram}
                    alt="Telegram"
                    className="w-10 h-10 inline-block"
                  />
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="flex flex-col gap-5 md:w-1/5 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <ul className="text-md flex flex-col gap-2">
            <li>
              <Link to="/menu" className="hover:text-green-400">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/loyalty-program" className="hover:text-green-400">
                Loyalty Program
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-green-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-green-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 md:w-1/5 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold">Policies</h2>
          <ul className="text-md flex flex-col gap-2">
            <li>
              <Link to="/return-policy" className="hover:text-green-400">
                Return Policy
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-green-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-green-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-600 mt-10 pt-3 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Unicafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
