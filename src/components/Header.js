import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center py-10 px-10 font-semibold text-lg shadow-lg border border-black">
      <div>
        <h1 className="text-[#7c3aed] font-playwrite text-lg cursor-pointer">VoldeMart</h1>
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
