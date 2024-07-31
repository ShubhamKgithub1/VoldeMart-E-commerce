import useData from "../utils/useData";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Body = () => {
  const data = useData();
  console.log(data);

  if (data !== null)
    return (
      <div className="p-4 mt-4">
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
    );
};

export default Body;
