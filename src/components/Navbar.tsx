import { FC } from 'react';
import Logo from "../assets/sitech-logo.png"

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-8 py-2">
      <div className="flex items-center">
        <img src={Logo} alt="Si-Tech Solar" className="w-[84px] h-[58px]" />
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">About us</a>
        <a href="#" className="hover:text-orange-500">Our Project</a>
        <a href="#" className="hover:text-orange-500">Services</a>
        <a href="#" className="hover:text-orange-500">FAQ's</a>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
        Request a Quotes
      </button>
    </nav>
  );
};

export default Navbar; 