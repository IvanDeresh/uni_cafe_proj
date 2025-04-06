import { cappucino_hit, cheescake_hit } from "../../assets/img";

const AboutUs = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="mt-5 text-3xl font-bold text-green-400">About Us</h2>
      <h3 className="text-xl font-medium text-green-400 max-[24rem]:px-2">
        Here’s a little story about Uni Café! ☕
      </h3>
      <p className="mt-8 w-[80%] text-green-500">
        Nestled in the heart of the city, Uni Café was founded with a simple
        dream—to create a cozy space where people could escape the rush of
        everyday life and enjoy a perfectly brewed cup of coffee. Our journey
        began with a passion for high-quality ingredients and a love for
        artisanal baking.💙
      </p>
      <p className="mt-8 w-[80%] text-green-500">
        From day one, we sourced the finest coffee beans and crafted fresh,
        homemade pastries to bring a unique experience to every guest who walks
        through our doors. At Uni Café, we believe that every cup tells a story.
        Whether you’re here for your morning espresso, an afternoon croissant,
        or an evening chat with friends, we want you to feel at home. Join us
        for a moment of warmth, flavor, and community—because great coffee is
        best enjoyed together. 💛
      </p>
      <div className="flex gap-24 w-[80%] my-20 max-[68.75rem]:flex-col">
        <img
          src={cappucino_hit}
          alt="cafe at night"
          className="w-1/2 max-[68.75rem]:w-full  rounded-3xl"
        />
        <img
          src={cheescake_hit}
          alt="outdoor"
          className="max-[68.75rem]:w-full w-1/2 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default AboutUs;
