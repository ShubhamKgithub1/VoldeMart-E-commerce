import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col items-center">
      <div className="font-poppins font-semibold text-4xl mt-8">Your Shopping Cart</div>
      <div className="flex flex-col p-7">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (<Link to={"/item/" + item?.id}>
            <div key={index} className="border w-[70vw] my-4 p-7 flex flex-row-reverse items-center justify-between shadow-xl hover:shadow-2xl rounded-lg  transition-all transform hover:scale-[1.02] duration-200 max-h-[450px] bg-[#a5f3fc]">
              
              <div className="">
                <img className="h-[90px] w-[120px] rounded-xl p-1" src={item.image}/>
              </div>
              <div className="">
                <div className="">
                  <h1 className="">Item: {item.title}</h1>
                  <h2 className="">Price: ₹{item.price * 83}</h2>
                  <h2 className="">Rating: {item.rating?.rate}</h2>
                </div>
              </div>
            </div>
            </Link>
          ))
        ) : (
          <p className="font-semibold text-lg mt-7">Your cart is empty.</p>
        )}
        
      </div>
    </div>
  );
};

export default Cart;
