import { hits } from "../../constant";

const Menu = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center">
      <h2 className="text-3xl text-green-400 font-bold mt-5">Menu</h2>
      <div className="flex">
        <div>
          <h3>Filter</h3>
          <div>
            <h4></h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <ul>VIEW</ul>
          <ul>
            {hits.map((el) => {
              return <li>{el.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
