import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="transition-transform transform ease-in-out duration-500">
      <div className="w-full flex justify-between items-center py-4 px-3 sm:py-5 md:py-7 lg:py-8 xl:py-10 sm:px-7 md:px-12 lg:px-14 xl:px-16 font-semibold sm:border sm:border-black relative">
        <div>
          <h1 className="text-[#7c3aed] font-pacifico text-lg sm:text-xl md:text-2xl xl:text-3xl cursor-pointer">
            VoldeMart
          </h1>
        </div>
        <div className="visible sm:invisible absolute right-6 bottom-[30%] z-10 flex gap-7 ">
          <h1 className="cursor-pointer text-[#7c3aed] transition-all transform duration-300 active:scale-115">
            <Link to={"/cart"}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </h1>
          <button
            className="text-base transition-all transform duration-300 active:scale-115"
            onClick={handleClick}
          >
            {!isVisible ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </button>
        </div>
        <div className="invisible sm:visible">
          <ul className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 text-sm sm:text-base lg:text-lg xl:text-xl">
            <li className="cursor-pointer transition-all transform hover:scale-105 active:scale-95">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer transition-all transform hover:scale-105 active:scale-95">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="cursor-pointer text-[#7c3aed] transition-all transform hover:scale-105 active:scale-95">
              <Link to={"/cart"}>
                <FontAwesomeIcon icon={faCartShopping} />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`transition-all duration-[0.9s] overflow-hidden ${
          isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          height: isVisible ? "auto" : "0",
          opacity: isVisible ? "1" : "0",
        }}
      >
        <div className="pl-4">
          <ul className="flex flex-col gap-4 pb-4 font-medium text-sm">
            <li className="cursor-pointer transition-all transform active:scale-[0.97]">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer transition-all transform active:scale-[0.97]">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
