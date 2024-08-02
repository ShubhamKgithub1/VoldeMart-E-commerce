const Cards = ({ data }) => {
  return (
    <div className="border-2 w-[295px] p-4 my-3 flex flex-col gap-5 shadow-2xl rounded-lg  transition-all transform hover:scale-[1.03] duration-[0.3s] min-h-[550px] bg-[#a5f3fc] border-[#70e1ee] hover:bg-[#70e1ee]">
      <div>
        <img className="h-80 min-w-[260px] rounded-lg" src={data?.image} />
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
