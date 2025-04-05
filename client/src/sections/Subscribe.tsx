import { useState } from "react";
import Button from "../components/Button";
import SubscribePart from "./components/SubscribePart";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  async function handleSubmit() {}
  return (
    <section className="flex mt-36 justify-center mb-36  items-center w-full">
      <div className="flex flex-col w-2/3 py-16 shadow-2xl relative  justify-center items-center gap-4 rounded-2xl">
        <div className="absolute right-8 max-[68.75rem]:hidden">
          <SubscribePart />
        </div>
        <h2 className="text-green-500 text-3xl font-bold">Subscribe</h2>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex gap-4 max-sm:flex-col"
        >
          <input
            type="email"
            name="subscribe_email"
            placeholder="Email"
            value={email}
            required
            className="w-72 h-10 rounded-md outline-none border-2 max-sm:w-max max-sm:pr-4 border-green-500 pl-4 text-green-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            label="subscribe"
            styles="bg-[#30b477] text-white py-1 px-6 rounded-lg border border-b-2 border-green-600 hover:border-green-700 active:scale-95 hover:bg-[#1f9960] transition duration-300"
            type="submit"
          />
        </form>
        <div className="absolute left-8 max-[68.75rem]:hidden">
          <SubscribePart />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
