import { useEffect, useState } from "react";
import useData from "../utils/useData";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

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

  if (data === null) return <Shimmer />;
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[20vh] sm:h-[27vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh] bg-[#9333ea] shadow-xl">
        <div className="text-white font-bold flex flex-col gap-2 text-xl sm:gap-3 md:gap-4 lg:gap-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-audiowide">
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
      <div className="m-1 sm:m-2 md:m-3 lg:m-4">
        <div className="flex flex-row items-center gap-4 sm:flex-row justify-between px-5 my-8 flex-wrap">
          <div>
            <select
              className="border border-solid border-black rounded-md px-1 sm:p-[2.5px] md:p-[3px] outline-none w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[150px] shadow-lg"
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
              className="px-3 sm:p-[3.5px] sm:px-4 mx-2 sm:mx-[7px] md:mx-3 lg:px-5 rounded-md border bg-black text-white lg:bg-white lg:text-black border-black lg:hover:bg-black md:font-semibold lg:hover:text-white shadow-xl transition-all transform duration-150 hover:scale-[1.02] active:scale-90"
              onClick={filter}
            >
              Filter
            </button>
          </div>
          <div>
            <input
              type="text"
              className="border border-solid border-black rounded-md w-[150px] md:w-[170px] lg:w-[180px] xl:w-[200px] sm:py-1 px-2 outline-none transition-all duration-300 active:scale-[0.98] shadow-xl"
              value={SearchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="border border-black rounded-md px-2 sm:p-[3.5px] sm:px-4 mx-2 sm:mx-[7px] md:mx-3 lg:px-5 lg:mx-4 bg-black text-white lg:bg-white lg:text-black lg:hover:bg-black lg:hover:text-white font-normal sm:font-medium md:font-semibold md:py-1 shadow-xl transition-all transform hover:scale-[1.02] active:scale-90"
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
        <div className="flex flex-col flex-wrap sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 sm:flex sm:flex-row">
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
