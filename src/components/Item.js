import { useParams } from "react-router-dom";
import useData from "../utils/useData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useNotification } from "../utils/useNotification";

const Item = () => {
  const data = useData();
  const [filteredItem, setfilteredItem] = useState(null);
  const { itemId } = useParams();
  const { showNotification } = useNotification();
  useEffect(() => {
    if (data !== null) {
      const item = data.find((item) => item?.id === Number(itemId));
      setfilteredItem(item);
    }
  }, [data, itemId]);

  const dispatch = useDispatch();
  const handleAddItem = (filteredItem) => {
    dispatch(addItem(filteredItem));
    showNotification("Item added to cart!");
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:justify-between gap-3 p-7 mt-4 ">
      <div className="flex justify-center w-[100%] md:max-w-[50vw] md:min-w-[50vw]">
        <img
          className="max-h-[60vh] w-[80vw] md:max-h-[80vh] md:min-w-full rounded-lg"
          src={filteredItem?.image}
        ></img>
      </div>
      <div className="flex flex-col md:gap-6 md:font-semibold md:text-lg items-center">
        <div className="flex flex-col md:gap-6 bg-slate-100 px-2 md:px-5 md:min-w-[45vw]">
          <h1 className="border-b-2 py-7">Item: {filteredItem?.title}</h1>
          <h2 className="border-b-2 pb-7">
            Price: ₹{filteredItem?.price * 83}
          </h2>
          <h2 className="border-b-2 pb-7">
            Rating: {filteredItem?.rating?.rate}
          </h2>
          <p className="border-b-2 pb-7">
            Item description: <br />
            {filteredItem?.description}
          </p>
        </div>
        <div className="fixed bottom-0 md:relative md:font-semibold md:text-lg flex gap-3 lg:gap-10 items-center mb-1 text-sm font-normal">
          <button
            className="border bg-black text-white lg:border-2 lg:w-[200px] px-2 py-2 lg:my-8 rounded-md shadow-xl border-black md:bg-white md:text-black transition-transform transform sm:hover:bg-black sm:hover:text-white sm:hover:scale-[0.99] sm:active:scale-95"
            onClick={() => handleAddItem(filteredItem)}
          >
            Add to Cart
          </button>
          <h2 className="border bg-black text-white lg:border-2 px-2 py-2  lg:w-[200px] text-center shadow-xl rounded-md border-black  md:bg-white md:text-black transition-transform transform sm:active:scale-95 sm:hover:bg-black sm:hover:text-white">
            <Link to={"/cart"}>Go to Cart</Link>
          </h2>  
        </div>
      </div>
    </div>
  );
};

export default Item;
