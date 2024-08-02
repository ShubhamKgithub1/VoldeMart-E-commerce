const Shimmer = () => {
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
            <select className="border border-solid border-black rounded-md p-1 outline-none w-[150px]">
              <option value="All">All</option>
              <option value="men's clothing">Mens</option>
              <option value="women's clothing">Womens</option>
              <option value="jewelery">Jeweleries</option>
              <option value="electronics">Electronics</option>
            </select>
            <button className="px-5 py-1 mx-4 rounded-md border-2 bg-white text-black border-black hover:bg-black font-semibold hover:text-white hover:shadow-xl transition-all transform hover:scale-[0.96]">
              Filter
            </button>
          </div>
          <div>
            <input
              type="text"
              className="search-box border border-solid border-black rounded-md w-[200px] p-1 outline-none"
            />
            <button className="search-btn border-2 hover:bg-black hover:text-white border-black rounded-md px-3 mx-3 lg:px-5 lg:mx-4 bg-white text-black font-semibold py-1 hover:shadow-xl transition-all transform hover:scale-[0.97]">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
          <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
