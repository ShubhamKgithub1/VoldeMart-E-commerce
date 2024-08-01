import { useEffect, useState } from "react";
import useData from "../utils/useData";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Body = () => {
  const data = useData();
  const [filteredData, setfilteredData] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (data) {
      setfilteredData(data);
    }
  }, [data]);
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
        <div className="m-4">
          <div className="flex justify-between px-5 my-8">
          <div>
              <select
                className="border border-solid border-black rounded-md p-1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
              </select>
              <button className="px-5 py-1 mx-4 rounded-md bg-gray-600 text-white hover:shadow-xl transition-all transform hover:scale-95">Filter</button>
            </div>
            <div>
              <input
                type="text"
                className="search-box border border-solid border-black rounded-md w-[200px] p-1"
                value={searchText}
                onChange={(e) => {
                  setsearchText(e.target.value);
                }}
              />
              <button
                className="search-btn border border-solid rounded-md px-3 mx-3 lg:px-5 lg:mx-4 bg-gray-600 text-white py-1 hover:shadow-xl transition-all transform hover:scale-95"
                onClick={() => {
                  const filtered = data.filter((item) =>
                    item.title.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setfilteredData(filtered);
                }}
              >
                Search
              </button>
            </div>
            
          </div>
          <div className="flex flex-wrap gap-4">
            {filteredData.map((item) => (
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
