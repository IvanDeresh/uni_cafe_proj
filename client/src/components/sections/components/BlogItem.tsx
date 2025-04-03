import { BlogItemType } from "../../../types/Props";

const BlogItem = ({ title, desc, author, date, icon }: BlogItemType) => {
  return (
    <li className="min-w-80 min-h-96 cursor-pointer max-h-[440px] shadow-lg rounded-2xl overflow-hidden flex flex-col bg-white transition-transform hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={icon}
        alt={`Blog: ${title}`}
      />

      <div className="w-full p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold uppercase text-green-600">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>

      <div className="flex justify-between w-full p-4 text-sm text-green-500 border-t border-gray-200">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </li>
  );
};

export default BlogItem;
