import { loyaltyNewsPosts } from "../../constant";
import LoyaltyProgramItem from "./components/LoyaltyProgramItem";

const LoyaltyProgram = () => {
  return (
    <div className="min-h-[70vh] max-xl:px-4 mb-24 mt-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl uppercase text-green-500 mb-24">
        Loyalty Program
      </h2>
      <ul>
        {loyaltyNewsPosts.map((post) => {
          return <LoyaltyProgramItem {...post} />;
        })}
      </ul>
    </div>
  );
};

export default LoyaltyProgram;
