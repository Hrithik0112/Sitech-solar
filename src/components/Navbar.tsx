import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <div className="text-2xl font-bold text-orange-500">Si-Tech Solar</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-orange-500">About</a>
        <a href="#" className="hover:text-orange-500">Services</a>
        <a href="#" className="hover:text-orange-500">Projects</a>
        <a href="#" className="hover:text-orange-500">Contact</a>
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar; 