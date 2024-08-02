import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const handleAddItem=()=>{
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center">
      <div className="font-poppins font-semibold text-4xl mt-8">Your Shopping Cart</div>
      <div className="flex flex-col items-center p-7 gap-10 bg-slate-100 px-10 mt-7 shadow-xl">
        {cartItems && cartItems.length > 0 ? (<div>
          <div className="flex justify-between items-center pb-4">
          <h1 className="font-semibold text-xl self-start justify-center">Items - ({cartItems.length})</h1>
          <button className=" text-white text-lg py-2 px-4 rounded-xl shadow-xl transition-all transform hover:scale-[0.97] bg-[#8c58e6] border-2 border-[#7c3aed] hover:bg-[#7c3aed]"
          onClick={handleAddItem}>Clear Cart</button>
          </div>
          {cartItems.map((item, index) => (<Link to={"/item/" + item?.id}>
            
            <div key={index} className="border-2 w-[70vw] p-7 my-7 flex flex-row-reverse items-center justify-between shadow-2xl rounded-lg  transition-all transform hover:scale-[1.01] duration-200 max-h-[450px] bg-[#a5f3fc] border-[#64c7d8] hover:bg-[#72c6d4]">
              
              <div className="">
                <img className="h-[90px] w-[120px] rounded-xl p-1" src={item.image}/>
              </div>
              <div className="font-semibold text-black">
                <div className="">
                  <h1 className="">Item: {item.title}</h1>
                  <h2 className="">Price: ₹{item.price * 83}</h2>
                  <h2 className="">Rating: {item.rating?.rate}</h2>
                </div>
              </div>
              
            </div>
            </Link>
          ))}</div>
        ) : (
          <p className="font-semibold text-lg mt-7">Your cart is empty.</p>
        )}
        
      </div>
    </div>
  );
};

export default Cart;
