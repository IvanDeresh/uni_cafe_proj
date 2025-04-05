import React from "react";
import { OrdersItemType } from "../../../types/Props";
import { convertTime } from "../../../helpers/utils/func";

const OrdersItem: React.FC<OrdersItemType> = ({
  length,
  createdAt,
  totalPrice,
  orderId,
  index,
}) => {
  return (
    <div key={index} className="border-b pb-2">
      <p>🧾 Order ID: {orderId}</p>
      <p>📅 Date: {convertTime(new Date(createdAt))}</p>
      <p>💵 Total: ${totalPrice.toFixed(2)}</p>
      <p>📦 Items: {length}</p>
    </div>
  );
};

export default OrdersItem;
