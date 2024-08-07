const Shimmer = () => {
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
      <div className="m-4">
        <div className="flex flex-row items-center gap-4 sm:flex-row justify-between px-5 my-8 flex-wrap">
          <div>
            <select className="border border-solid border-black rounded-md px-1 sm:p-[2.5px] md:p-[3px] outline-none w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[150px] shadow-lg">
              <option value="All">All</option>
              <option value="men's clothing">Mens</option>
              <option value="women's clothing">Womens</option>
              <option value="jewelery">Jeweleries</option>
              <option value="electronics">Electronics</option>
            </select>
            <button className="px-3 sm:p-[3.5px] sm:px-4 mx-2 sm:mx-[7px] md:mx-3 lg:px-5 rounded-md border bg-black text-white lg:bg-white lg:text-black border-black lg:hover:bg-black md:font-semibold lg:hover:text-white shadow-xl transition-all transform duration-150 hover:scale-[1.02] active:scale-90">
              Filter
            </button>
          </div>
          <div>
            <input
              type="text"
              className="border border-solid border-black rounded-md w-[150px] md:w-[170px] lg:w-[180px] xl:w-[200px] sm:py-1 px-2 outline-none transition-all duration-300 active:scale-[0.98] shadow-xl"
            />
            <button className="border border-black rounded-md px-2 sm:p-[3.5px] sm:px-4 mx-2 sm:mx-[7px] md:mx-3 lg:px-5 lg:mx-4 bg-black text-white lg:bg-white lg:text-black lg:hover:bg-black lg:hover:text-white font-normal sm:font-medium md:font-semibold md:py-1 shadow-xl transition-all transform hover:scale-[1.02] active:scale-90">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-wrap sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 sm:flex sm:flex-row">
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
          <div className="border-2 p-2 h-36 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
