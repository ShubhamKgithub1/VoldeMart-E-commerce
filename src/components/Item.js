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
    <div className="flex  items-start justify-between gap-3 p-7 mt-4 bg-[#f5f3ff]">
      <div className="w-[50vw] min-w-[50vw]">
        <img
          className="h-[80vh] min-w-full rounded-lg"
          src={filteredItem?.image}
        ></img>
      </div>
      <div className="flex flex-col gap-6 font-semibold text-2xl items-center">
        <div className="flex flex-col gap-6 bg-slate-100 px-5 min-w-[45vw]">
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
        <div className="flex gap-10 items-center">
          <button
            className="border-2 w-[200px] py-2 my-8 rounded-md shadow-xl border-black bg-white text-black transition-transform transfor hover:bg-black hover:text-white hover:scale-[0.99] active:scale-95"
            onClick={() => handleAddItem(filteredItem)}
          >
            Add to Cart
          </button>
          <h2 className="border-2 py-2 w-[200px] text-center shadow-xl rounded-md border-black  bg-white text-black transition-transform transform active:scale-95 hover:bg-black hover:text-white">
            <Link to={"/cart"}>Go to Cart</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Item;
