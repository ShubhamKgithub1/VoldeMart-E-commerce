import { Link } from "react-router-dom";
const Header = () => {
  // bg-[#2b3b53]
  return (
    <div className="w-full flex justify-between items-center py-10 px-10 font-semibold text-lg shadow-lg border border-black">
      <div>
        {/* <img
          className="h-24 "
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30142251/69-768x591.png"
        /> */}
        <h1 className="text-[#7c3aed] font-playwrite text-lg cursor-pointer">VoldeMart</h1>
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
        <li className="cursor-pointer "><Link to="/">Home</Link></li>
          <li className="cursor-pointer text-[#7c3aed]">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
