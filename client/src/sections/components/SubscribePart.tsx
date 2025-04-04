import {
  cappucino_hit,
  crossaint_hit,
  latte_vanilla,
  matcha,
} from "../../assets/img";

const SubscribePart = () => {
  return (
    <ul className="flex flex-col gap-10">
      <div className="flex gap-10">
        <li>
          <img
            src={cappucino_hit}
            alt="cappucino"
            className="w-10 h-10 rounded-full"
          />
        </li>
        <li>
          <img
            src={crossaint_hit}
            alt="crossaint"
            className="w-7 h-7 rounded-full"
          />
        </li>
      </div>
      <div className="flex gap-10">
        <li>
          <img
            src={latte_vanilla}
            alt="latte_vanilla"
            className="w-7 h-7 rounded-full"
          />
        </li>
        <li>
          <img src={matcha} alt="matcha" className="w-10 h-10 rounded-full" />
        </li>
      </div>
    </ul>
  );
};

export default SubscribePart;
