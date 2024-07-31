import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full bg-[#2b3b53] text-white flex justify-between items-center py-2 px-8 font-semibold text-lg shadow-xl">
      <div>
        <img
          className="h-24 "
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30142251/69-768x591.png"
        />
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="cursor-pointer">Mens</li>
          <li className="cursor-pointer">Womens</li>
          <li className="cursor-pointer">Kids</li>
          <li className="cursor-pointer">Accessories</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-6">
        <li className="cursor-pointer"><Link to="/">Home</Link></li>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
