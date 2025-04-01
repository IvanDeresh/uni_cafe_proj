import { useState } from "react";
import Button from "../Button";
import {
  cappucino_hit,
  crossaint_hit,
  latte_vanilla,
  matcha,
} from "../../assets/img";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  async function handleSubmit() {}
  return (
    <section className="flex mt-36 justify-center mb-36  items-center w-full">
      <div className="flex flex-col w-2/3 py-16 shadow-2xl relative  justify-center items-center gap-4 rounded-2xl">
        <ul className="flex flex-col gap-10 absolute left-8">
          <div className="flex gap-10">
            <li>
              <img
                src={cappucino_hit}
                alt="cappucino"
                className="w-10 h-10 rounded-full"
              />
            </li>
            <li>
              <img
                src={crossaint_hit}
                alt="crossaint"
                className="w-7 h-7 rounded-full"
              />
            </li>
          </div>
          <div className="flex gap-10">
            <li>
              <img
                src={latte_vanilla}
                alt="latte_vanilla"
                className="w-7 h-7 rounded-full"
              />
            </li>
            <li>
              <img
                src={matcha}
                alt="matcha"
                className="w-10 h-10 rounded-full"
              />
            </li>
          </div>
        </ul>
        <h2 className="text-green-500 text-3xl font-bold">Subscribe</h2>
        <form onSubmit={handleSubmit} action="" className="flex gap-4">
          <input
            type="email"
            name="subscribe_email"
            placeholder="Subscribe here for benefits"
            value={email}
            required
            className="w-72 h-10 rounded-md outline-none border-2 border-green-500 pl-4 text-green-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            label="subscribe"
            styles="w-28 h-10 border border-b-2 border-green-500 rounded-md text-white bg-green-400"
            type="submit"
          />
        </form>
        <ul className="flex flex-col gap-10 absolute right-8">
          <div className="flex gap-10">
            <li>
              <img
                src={cappucino_hit}
                alt="cappucino"
                className="w-10 h-10 rounded-full"
              />
            </li>
            <li>
              <img
                src={crossaint_hit}
                alt="crossaint"
                className="w-7 h-7 rounded-full"
              />
            </li>
          </div>
          <div className="flex gap-10">
            <li>
              <img
                src={latte_vanilla}
                alt="latte_vanilla"
                className="w-7 h-7 rounded-full"
              />
            </li>
            <li>
              <img
                src={matcha}
                alt="matcha"
                className="w-10 h-10 rounded-full"
              />
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Subscribe;
