import React from "react";
import { LoyaltyProgramItemType } from "../../../types/Props";

const LoyaltyProgramItem: React.FC<LoyaltyProgramItemType> = ({
  id,
  title,
  date,
  type,
  description,
}) => {
  return (
    <li key={id} className="mb-6 p-4 border-b cursor-pointer border-green-500">
      <h3 className="text-xl font-bold text-green-500">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <span className="text-sm text-gray-500">{date}</span>
      <div className="mt-2">
        <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs">
          {type}
        </span>
      </div>
    </li>
  );
};

export default LoyaltyProgramItem;
