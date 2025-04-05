import { useState } from "react";
import { CartModalWindowType } from "../../../types/Props";
import { X } from "lucide-react";
import Button from "../../../components/Button";

const CartModalWindow = ({ setModalOpen }: CartModalWindowType) => {
  const EMAIL = "deresh@gmail.com";
  const NAME = "Jane Doe";
  const ADDRESS = "New York";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAdrress] = useState("");
  const [method, setMethod] = useState("card");

  return (
    <div className="rounded-3xl flex flex-col relative items-center p-10 w-[40vw] h-[50vh] bg-white max-[42rem]:w-[90vw] max-[42rem]:h-auto">
      <button
        className="text-green-500 absolute cursor-pointer top-10 right-10"
        onClick={() => setModalOpen(false)}
      >
        <X size={30} />
      </button>
      <h3 className="uppercase text-2xl text-green-500">Summation</h3>
      <form action="" className="w-full mt-8 gap-4 flex flex-col items-center">
        <div className="flex gap-8 w-8/10 max-[42rem]:flex-col">
          <div className="flex flex-col w-full">
            <label htmlFor="name_modal" className="text-green-500 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name_modal"
              placeholder="Jane Doe"
              className="w-full border-green-500 border outline-none text-green-500 py-2 pl-2"
              value={name === "" ? NAME : name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email_modal" className="text-green-500 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email_modal"
              placeholder="example@gmail.com"
              className="w-full border-green-500 border outline-none text-green-500 py-2 pl-2"
              value={email === "" ? EMAIL : email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
        </div>
        <div className="flex flex-col w-8/10">
          <label htmlFor="address_modal" className="text-green-500 font-bold">
            Address
          </label>
          <input
            type="text"
            id="address_modal"
            placeholder="New York"
            className="w-full border-green-500 border outline-none text-green-500 py-2 pl-2"
            value={address === "" ? ADDRESS : address}
            onChange={(e) => setAdrress(e.target.value)}
            name="address"
          />
        </div>
        <div className="flex flex-col w-8/10">
          <label htmlFor="method_modal" className="text-green-500 font-bold">
            Method of Payment
          </label>
          <select
            id="method_modal"
            className="w-full border-green-500 border outline-none text-green-500 py-2 pl-2 bg-white"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            name="method"
          >
            <option value="card">Card</option>
            <option value="crypto">Crypto</option>
            <option value="blik">BLIK</option>
          </select>
        </div>
        <Button
          type="submit"
          label="Submit"
          styles="px-4 py-1.5 cursor-pointer bg-green-400 border border-b-4 border-green-500 text-white font-bold rounded-xl "
        />
      </form>
    </div>
  );
};

export default CartModalWindow;
