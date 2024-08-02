import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="w-full flex justify-between items-center py-10 px-20 font-semibold text-lg shadow-lg border border-black">
      <div>
        <h1 className="text-[#7c3aed] font-pacifico text-3xl cursor-pointer">
          VoldeMart
        </h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li className="cursor-pointer transition-all transform hover:scale-110">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer transition-all transform hover:scale-110">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cursor-pointer text-[#7c3aed] transition-all transform hover:scale-110">
            <Link to={"/cart"}>Cart[{cart.length}]</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
