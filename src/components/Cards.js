const Cards = ({ data }) => {
  return (
    <div className="border w-[295px] my-4 p-4 flex flex-col gap-5 hover:shadow-2xl rounded-lg  transition-all duration-300 min-h-[550px]">
      <div>
        <img className="h-80" src={data?.image} />
      </div>
      <div className="flex flex-col gap-3">
        <h1>{data?.title}</h1>
        <h2>₹{data?.price * 83}</h2>
        <h2>Rating: {data?.rating?.rate}</h2>
      </div>
    </div>
  );
};

export default Cards;
