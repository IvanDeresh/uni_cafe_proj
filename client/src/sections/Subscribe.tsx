import { useState } from "react";
import Button from "../components/Button";
import SubscribePart from "./components/SubscribePart";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  async function handleSubmit() {}
  return (
    <section className="flex mt-36 justify-center mb-36  items-center w-full">
      <div className="flex flex-col w-2/3 py-16 shadow-2xl relative  justify-center items-center gap-4 rounded-2xl">
        <div className="absolute right-8">
          <SubscribePart />
        </div>
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
        <div className="absolute left-8">
          <SubscribePart />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
