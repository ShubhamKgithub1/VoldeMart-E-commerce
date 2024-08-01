import { useParams } from "react-router-dom";
import useData from "../utils/useData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Item = () => {
  const data = useData();
  const [filteredItem, setfilteredItem] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    if (data !== null) {
      const item = data.find((item) => item?.id === Number(itemId));
      setfilteredItem(item);
    }
  }, [data, itemId]);
  console.log(filteredItem);

  return (
    <div className="flex  items-start justify-between gap-10 p-7 m-5">
      <div className="w-[50vw] min-w-[50vw]">
        <img className="h-[80vh] min-w-full" src={filteredItem?.image}></img>
      </div>
      <div className="flex flex-col gap-6 font-semibold text-xl items-center">
        <div className="flex flex-col gap-6 bg-slate-100 px-3">
        <h1 className="border-b-2 py-7">Item: {filteredItem?.title}</h1>
        <h2 className="border-b-2 pb-7">Price: ₹{filteredItem?.price * 83}</h2>
        <h2 className="border-b-2 pb-7">Rating: {filteredItem?.rating?.rate}</h2>
        <p className="border-b-2 pb-7">Item description: <br/>{filteredItem?.description}</p>
        </div>
        <button className="border-2 w-[200px] py-2 my-8 rounded-md border-blue-700 bg-indigo-500 text-white transition-transform transform hover:scale-95 hover:bg-indigo-600">
          Add to Cart
        </button>
        <h2 className="border-2 py-2 w-[200px] px-4 rounded-md border-blue-700  bg-indigo-500 text-white transition-transform transform hover:scale-95 hover:bg-indigo-600"><Link to="/">see other items</Link></h2>
      </div>
    </div>
  );
};

export default Item;
