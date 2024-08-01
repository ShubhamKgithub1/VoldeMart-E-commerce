import useData from "../utils/useData";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Body = () => {
  const data = useData();
  console.log(data);

  if (data !== null)
    return (
      <div>
        <div className="flex items-center justify-center w-full h-[40vh] bg-[#9333ea]">
          <div className="text-white font-bold flex flex-col gap-5 text-6xl">
            <div>
              <span>If You Look </span>
              <span className="text-teal-400"> Good</span>
            </div>
            <div>
              <span>Then We Look </span>
              <span className="text-teal-400"> Good</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div>
            <input
              type="text"
              className="search-box border border-solid border-black rounded-md w-[200px] px-1"
            />
            <button className="search-btn border border-solid rounded-md px-3 mx-3 lg:px-5 lg:mx-4 bg-gray-600 text-sky-50 py-1 hover:shadow-xl transition-all">
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <Link key={item?.id} to={"/item/" + item?.id}>
                <Cards data={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Body;
