import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="bg-[#0f0f0f] md:flex">
      {/* Items for larger screens */}
      <div className="flex flex-wrap p-4 md:flex">
        <NavLink
          to="/home"
          className="text-light bg-success border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Home
        </NavLink>
        <Link
          to="/shop"
          className="text-light bg-primary border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="bg-info border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          About Our Shop
        </Link>
        <Link
          to="/guide"
          className="bg-warning border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Guide
        </Link>
        <Link
          to="/rules"
          className="bg-danger text-light border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Rules
        </Link>
        <Link
          to="/how-to-order"
          className="bg-dark border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          How to Order
        </Link>
      </div>

      {/* Hamburger menu button */}
      <button
        className="block md:hidden focus:outline-none hamburger bg-white"
        onClick={hamburgerClick}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Items for smaller screens */}
      <div className={`bg-[#0f0f0f] flex flex-col p-4 md:items-center ${isOpen ? 'flex' : 'hidden'}`}>
        <NavLink
          to="/home"
          className="text-light bg-success border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Home
        </NavLink>
        <Link
          to="/shop"
          className="text-light bg-primary border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="bg-info border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          About Our Shop
        </Link>
        <Link
          to="/guide"
          className="bg-warning border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Guide
        </Link>
        <Link
          to="/rules"
          className="bg-danger text-light border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          Rules
        </Link>
        <Link
          to="/how-to-order"
          className="bg-dark border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase transition-colors hover:bg-blue-500 hover:text-white"
        >
          How to Order
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
