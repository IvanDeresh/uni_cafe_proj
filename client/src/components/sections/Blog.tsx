import { useState, useEffect } from "react";
import { blogs } from "../../constant";
import BlogItem from "./components/BlogItem";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(blogs.length / 2)
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev + 1) % blogs.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="mt-36 flex flex-col items-center overflow-hidden">
      <h2 className="text-green-500 text-3xl font-bold mb-10">Blogs</h2>
      <div className="relative w-full max-w-xl">
        <ul
          className="flex transition-transform gap-20 duration-300"
          style={{ transform: `translateX(-${currentIndex * 62}%)` }}
        >
          {blogs.map((el, index) => (
            <BlogItem index={index} {...el} />
          ))}
        </ul>
      </div>
      <ul className="flex gap-2 mt-12 items-center">
        {blogs.map((_, index) => (
          <li
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-green-800 w-3 h-3" : "bg-green-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
