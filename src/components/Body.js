import useData from "../utils/useData";
const Body = () => {
    const data=useData();
    console.log(data);
    

  return (
    <div>
      <div>
        <input type="text" className="search-box border border-solid border-black rounded-md w-[200px]"/>
        <button className="search-btn border border-solid rounded-md px-3 mx-3 lg:px-5 lg:mx-4 bg-gray-600 text-sky-50 py-1 hover:shadow-xl transition-all">
          Search
        </button>
      </div>
    </div>
  );
};

export default Body;
