import {
  cafe_at_night,
  cappucino_hit,
  cheescake_hit,
  outdoor,
} from "../assets/img";

const AboutUs = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="mt-5 text-3xl font-bold text-green-400">About Us</h2>
      <h3 className="text-xl font-medium text-green-400">
        Here’s a little story about Uni Café! ☕
      </h3>
      <p className="mt-8 w-[80%] text-green-500">
        Nestled in the heart of the city, Uni Café was founded with a simple
        dream—to create a cozy space where people could escape the rush of
        everyday life and enjoy a perfectly brewed cup of coffee. Our journey
        began with a passion for high-quality ingredients and a love for
        artisanal baking. From day one, we sourced the finest coffee beans and
        crafted fresh, homemade pastries to bring a unique experience to every
        guest who walks through our doors. At Uni Café, we believe that every
        cup tells a story. Whether you’re here for your morning espresso, an
        afternoon croissant, or an evening chat with friends, we want you to
        feel at home. Join us for a moment of warmth, flavor, and
        community—because great coffee is best enjoyed together. 💛
      </p>
      <div className="flex gap-24 w-[80%] my-20">
        <img src={cappucino_hit} alt="cafe at night" className="w-1/2" />
        <img src={cheescake_hit} alt="outdoor" className="w-1/2" />
      </div>
    </div>
  );
};

export default AboutUs;
