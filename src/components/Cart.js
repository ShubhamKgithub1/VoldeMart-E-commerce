import { useSelector } from "react-redux";
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
      <div className="font-poppins font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl mt-8">
        Your Shopping Cart
      </div>
      <div className="flex flex-col items-center justify-center px-2 py-4 md:p-5 lg:p-7 gap-3 sm:gap-5 md:gap-7 lg:gap-10 bg-slate-100 min-h-[50vh] min-w-[95vw] md:min-w-[50vw] shadow-xl">
        {cartItems && cartItems.length > 0 ? (
          <div>
            <div className="flex justify-between items-center font-normal sm:font-medium md:font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              <h1>Items - ({cartItems.length})</h1>
              <button
                className="bg-black text-white md:text-black md:bg-white px-2 sm:px-3 py-1 sm:py-[0.3rem] md:px-3 md:py-[0.3rem] lg:py-2 lg:px-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl transition-all transform hover:scale-[0.97] hover:bg-black hover:text-white border md:border-[1px] lg:border-2 border-black active:scale-95"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border-[1px] md:border-2 w-full md:w-[70vw] my-3 p-3 md:p-7 md:my-7 flex flex-row-reverse items-center justify-between shadow-2xl rounded-lg  transition-all transform hover:scale-[1.01] duration-200 max-h-[450px] bg-[#a5f3fc] border-[#8adfee] hover:bg-[#8adfee]"
              >
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <img
                    className="h-[90px] w-[120px] rounded-xl p-1"
                    src={item.image}
                  />
                  <button
                    className="bg-black text-white text-sm md:font-semibold md:text-black md:bg-white px-1 sm:px-3 py-1 sm:py-[0.3rem] md:px-3 md:py-[0.3rem] lg:py-2 lg:px-4 rounded-md sm:rounded-lg md:rounded-xl shadow-xl transition-all transform hover:scale-[0.97] hover:bg-black hover:text-white border md:border-[1px] lg:border-2 border-black active:scale-95"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove
                  </button>
                </div>
                <div className="text-black self-start font-normal sm:font-medium md:font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                  <div>
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
