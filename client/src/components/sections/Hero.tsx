import { hero_img } from "../../assets/img";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex justify-center h-96 mt-5 text-white items-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={hero_img}
          alt="Cozy cafe with delicious coffee and pastries"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="relative  text-center z-10 bg-black/25 p-5 rounded-lg">
        <h1 className="text-5xl font-bold">Welcome to Uni Café</h1>
        <h2 className="text-2xl mt-2">Fresh Coffee & Homemade Pastries</h2>
        <p className="max-w-md mx-auto mt-3 mb-5 text-lg">
          Enjoy a cozy atmosphere, premium coffee, and a delightful selection of
          fresh pastries. Come and experience the perfect place to relax and
          unwind.
        </p>
        <Link
          to="/menu"
          className="min-w-36 w-auto py-2 px-4 text-white border border-b-2 rounded-lg hover:bg-green-300 transition-all duration-300 hover:text-green-500 border-green-500"
        >
          Explore Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
