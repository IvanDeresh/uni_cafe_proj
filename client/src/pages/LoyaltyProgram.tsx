import { loyaltyNewsPosts } from "../constant";

const LoyaltyProgram = () => {
  return (
    <div className="min-h-[70vh] py-24 flex flex-col items-center justify-center">
      <h2 className="text-3xl uppercase text-green-500 mb-24">
        Loyalty Program
      </h2>
      <ul>
        {loyaltyNewsPosts.map((post) => {
          return (
            <li key={post.id} className="mb-6 p-4 border-b border-green-500">
              <h3 className="text-xl font-bold text-green-500">{post.title}</h3>
              <p className="text-gray-700">{post.description}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
              <div className="mt-2">
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs">
                  {post.type}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LoyaltyProgram;
