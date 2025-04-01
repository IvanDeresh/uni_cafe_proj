import { blogs } from "../../constant";

const Blog = () => {
  return (
    <section className="mt-5  flex flex-col">
      <div className="flex flex-col items-center">
        {" "}
        <h2 className="text-green-500 text-3xl font-bold mb-10 mt-24">Blogs</h2>
        <ul className="flex justify-between gap-5">
          {blogs.map((el) => {
            return (
              <li className="w-lg flex">
                <img className="w-1/2 rounded-2xl" src={el.icon} alt="icon" />
                <div className="w-1/2 p-5">
                  <h3 className="text-lg">{el.title}</h3>
                  <p className="text-md mt-2">{el.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-2 mt-12">
          <li className="w-2 h-2 rounded-full bg-green-400"></li>
          <li className="w-2 h-2 rounded-full bg-green-800"></li>
          <li className="w-2 h-2 rounded-full bg-green-400"></li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
