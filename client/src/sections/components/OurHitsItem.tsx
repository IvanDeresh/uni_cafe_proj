import { OurHitsItemType } from "../../types/Props";

const OurHitsItem = ({
  id,
  image,
  name,
  price,
  description,
}: OurHitsItemType) => {
  return (
    <li
      className="w-80 min-h-96 flex cursor-pointer hover:scale-105 transition-all duration-300 flex-col justify-between bg-white shadow-md rounded-xl overflow-hidden"
      key={id}
    >
      <img className="w-full h-60 object-cover" src={image} alt={name} />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{name}</span>
          <span className="text-green-600 font-semibold">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </li>
  );
};

export default OurHitsItem;
