import { gallery } from "../constant";

const Gallery = () => {
  return (
    <div className="min-h-[60vh] gap-14 flex flex-col mb-32 justify-center items-center">
      <h2 className="mt-5 text-3xl font-bold text-green-400">Gallery</h2>
      <div className="flex flex-col gap-14 mb-32 justify-center items-center">
        {gallery.map((part) => {
          return part.id % 2 === 0 ? (
            <div className="flex items-center gap-64">
              <div>
                <img className="w-xl h-xl" src={part.img} alt="img" />
              </div>
              <div className="text-xl uppercase">{part.title}</div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-64">
              <div className="text-xl uppercase">{part.title}</div>
              <div>
                <img className="w-xl h-xl" src={part.img} alt="img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
