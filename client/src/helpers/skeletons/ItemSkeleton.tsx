const ItemSkeleton = () => {
  return (
    <li className="min-w-80 min-h-96 max-h-[440px] shadow-lg rounded-2xl overflow-hidden flex flex-col bg-white animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>

      <div className="w-full p-4 flex flex-col gap-2">
        <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>

        <div className="h-4 bg-gray-300 rounded-md w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
      </div>

      <div className="flex justify-between w-full p-4 text-sm border-t border-gray-200">
        <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
      </div>
    </li>
  );
};

export default ItemSkeleton;
