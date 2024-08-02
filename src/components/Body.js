import { useEffect, useState } from "react";
import useData from "../utils/useData";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Body = () => {
  const data = useData();
  const [FilteredData, setFilteredData] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [Category, setCategory] = useState("All");

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const filter = () => {
    let filtered = data;

    if (Category !== "All") {
      filtered = filtered.filter((item) => item.category === Category);
    }
    setFilteredData(filtered);
  };

  if (data !== null)
    return (
      <div>
        <div className="flex items-center justify-center w-full h-[40vh] bg-[#9333ea] shadow-xl">
          <div className="text-white font-bold flex flex-col gap-5 text-6xl font-audiowide">
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
                className="border border-solid border-black rounded-md p-1 outline-none w-[150px]"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="men's clothing">Mens</option>
                <option value="women's clothing">Womens</option>
                <option value="jewelery">Jeweleries</option>
                <option value="electronics">Electronics</option>
              </select>
              <button
                className="px-5 py-1 mx-4 rounded-md bg-gray-600 border-[1.4px] border-black hover:bg-black text-white hover:shadow-xl transition-all transform hover:scale-[0.96]"
                onClick={filter}
              > 
                Filter
              </button>
            </div>
            <div>
              <input
                type="text"
                className="search-box border border-solid border-black rounded-md w-[200px] p-1 outline-none"
                value={SearchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="search-btn border border-solid hover:bg-black border-black rounded-md px-3 mx-3 lg:px-5 lg:mx-4 bg-gray-600 text-white py-1 hover:shadow-xl transition-all transform hover:scale-[0.97]"
                onClick={() => {
                  const filtered = data.filter((item) =>
                    item.title.toLowerCase().includes(SearchText.toLowerCase())
                  );
                  setFilteredData(filtered);
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            {FilteredData.map((item) => (
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
