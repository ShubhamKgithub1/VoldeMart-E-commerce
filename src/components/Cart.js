import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useNotification } from "../utils/useNotification";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const handleClearCart = () => {
    dispatch(clearCart());
    showNotification("Cart cleared!");
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    showNotification(`1 Item removed from the cart!`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="font-poppins font-semibold text-4xl mt-8">
        Your Shopping Cart
      </div>
      <div className="flex flex-col items-center justify-center p-7 gap-10 bg-slate-100 min-h-[50vh] min-w-[50vw] px-10 mt-7 shadow-xl">
        {cartItems && cartItems.length > 0 ? (
          <div>
            <div className="flex justify-between items-center pb-4">
              <h1 className="font-semibold text-xl self-start justify-center">
                Items - ({cartItems.length})
              </h1>
              <button
                className=" text-balck font-semibold bg-white text-lg py-2 px-4 rounded-xl shadow-xl transition-all transform hover:scale-[0.97] hover:bg-black hover:text-white border-2 border-black"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border-2 w-[70vw] p-7 my-7 flex flex-row-reverse items-center justify-between shadow-2xl rounded-lg  transition-all transform hover:scale-[1.01] duration-200 max-h-[450px] bg-[#a5f3fc] border-[#8adfee] hover:bg-[#8adfee]"
              >
                <div className="flex gap-3 items-center">
                  <img
                    className="h-[90px] w-[120px] rounded-xl p-1"
                    src={item.image}
                  />
                  <button
                    className="text-center bg-white rounded-lg py-1 px-3 border-[1px] border-black font-semibold transition-all transform hover:bg-black hover:text-white"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove
                  </button>
                </div>
                <div className="font-semibold text-black">
                  <div className="">
                    <h1 className="">Item: {item.title}</h1>
                    <h2 className="">Price: ₹{item.price * 83}</h2>
                    <h2 className="">Rating: {item.rating?.rate}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-semibold text-lg mt-7">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
