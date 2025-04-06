import { useState, useEffect, useRef } from "react";
import { blogs } from "../constant";
import BlogItem from "./components/BlogItem";
import ItemSkeleton from "../helpers/skeletons/ItemSkeleton";
import React from "react";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(blogs.length / 2)
  );
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const itemWidth = 300; // ширина одного елемента BlogItem у px
  const gap = 80; // gap-20 у tailwind = 5rem = 80px

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const totalItemWidth = itemWidth + gap;
  const offset = containerWidth / 2 - itemWidth / 2;
  const translateX = currentIndex * totalItemWidth - offset;

  return (
    <section className="mt-36 flex flex-col items-center overflow-hidden">
      <h2 className="text-green-500 text-3xl font-bold mb-10">Blogs</h2>
      <div className="relative w-full max-w-5xl px-4" ref={containerRef}>
        <ul
          className="flex justify-center transition-transform duration-300 pr-27"
          style={{
            transform: `translateX(-${translateX}px)`,
            gap: `${gap}px`,
            width: `${blogs.length * totalItemWidth}px`,
          }}
        >
          {loading
            ? Array.from({ length: blogs.length }).map((_, index) => (
                <ItemSkeleton key={index} />
              ))
            : blogs.map((blog, index) => (
                <BlogItem key={index} index={index} {...blog} />
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

export default React.memo(Blog);
