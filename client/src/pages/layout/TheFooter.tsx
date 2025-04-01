import { useState } from "react";
import { instagram, main_icon, telegram } from "../../assets/img";
import Button from "../../components/Button";
import axios from "axios";
const TheFooter = () => {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState();
  async function handleSubmit() {
    try {
      const response = await axios("");
    } catch (e) {}
  }
  return (
    <footer className="text-green-500 mb-3 flex flex-col justify-center items-center gap-7">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-5">
          <img src={main_icon} alt="logo" className="w-14 h-14" />
          <form onSubmit={handleSubmit} className="flex gap-5">
            <input
              placeholder="example@gmail.com"
              className="w-72 pl-2 rounded-sm outline-none border-2 h-10 border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email_subscribe"
            />
            <Button
              label="Submit"
              type="submit"
              styles="border border-b-2 rounded-sm border-green-600 bg-green-500 text-white text-md w-20 h-10"
            />
          </form>
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <ul className="text-md font-medium flex flex-col gap-2">
            <li>email - cafe@gmail.com</li>
            <li>phone number - +380 000 00 0000</li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="instagram" className="w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="https://web.telegram.org/k/" target="_blank">
                <img src={telegram} alt="telegram" className="w-10 h-10" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <ul className="text-md font-medium flex flex-col gap-2">
            <li>email - cafe@gmail.com</li>
            <li>phone number - +380 000 00 0000</li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="instagram" className="w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="https://web.telegram.org/k/" target="_blank">
                <img src={telegram} alt="telegram" className="w-10 h-10" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <ul className="text-md font-medium flex flex-col gap-2">
            <li>email - cafe@gmail.com</li>
            <li>phone number - +380 000 00 0000</li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="instagram" className="w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="https://web.telegram.org/k/" target="_blank">
                <img src={telegram} alt="telegram" className="w-10 h-10" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-green-500 w-full flex justify-center pt-3">
        ©copyright
      </div>
    </footer>
  );
};

export default TheFooter;
