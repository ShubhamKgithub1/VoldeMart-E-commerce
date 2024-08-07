const Cards = ({ data }) => {
  return (
    <div className="border-2 p-2 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[14.4vw] lg:p-4 lg:my-2 flex sm:flex-col gap-3 lg:gap-4 m-1 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] sm:min-h-[370px] sm:max-h-[370px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee] font-semibold hover:text-white  active:scale-[0.98]">
      <div>
        <img
          className="h-36 sm:h-40 md:h-48 max-w-[120px] min-w-[120px] lg:h-72 sm:w-full sm:max-w-full sm:min-w-full rounded-lg"
          src={data?.image}
        />
      </div>
      <div className="flex flex-col gap-3 lg:gap-3">
        <h1>{data?.title}</h1>
        <h2>₹{data?.price * 83}</h2>
        <h2>Rating: {data?.rating?.rate}</h2>
      </div>
    </div>
  );
};

export default Cards;
