import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className='bg-[#0f0f0f] mx-3 md:mx-5 '>
    <div className=" md:flex md:items-center">
      {/*item a*/}
      <div className="hidden md:flex space-x-4 flex-wrap mx-2 p-8">
        <NavLink
          to="/home"
          className="text-light bg-success border-r border-solid border-gray-600 py-2 px-3 font-bold
           uppercase transition-colors hover:bg-blue-500 hover:text-white rounded-tr-2xl rounded-bl-2xl"
        >
          Home
        </NavLink>
        <Link
          to="/shop"
          className="text-light bg-primary border-r border-solid border-gray-600 py-2 px-3 font-
           uppercase transition-colors hover:bg-blue-500 hover:text-white rounded-tr-2xl rounded-bl-2xl"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="bg-info border-r border-solid border-gray-600 py-2 px-3 font-bold
           uppercase transition-colors hover:bg-blue-500 hover:text-white rounded-tr-2xl rounded-bl-2xl"
        >
          About Our Shop
        </Link>
        <Link
          to="/guide"
          className="bg-warning border-r border-solid border-gray-600 py-2 px-3 font-bold 
          uppercase transition-colors hover:bg-blue-500 hover:text-white rounded-tr-2xl rounded-bl-2xl"
        >
          Guide
        </Link>
        <Link
          to="/rules"
          className="bg-danger text-light border-r border-solid border-gray-600 py-2 px-3 font-bold
           uppercase transition-colors hover:bg-blue-500 hover:text-white rounded-tr-2xl rounded-bl-2xl"
        >
          Rules
        </Link>
        <Link
          to="/how-to-order"
          className="bg-dark border-r border-solid border-gray-600 py-2 px-3 font-bold
           uppercase transition-colors hover:bg-blue-500 hover:text-white rounded-tr-2xl rounded-bl-2xl"
        >
          How to Order
        </Link>
        </div>
             {/*item b*/}
             <div className='p-8'>
        <button
          className="block md:hidden focus:outline-none hamburger bg-white"
          onClick={hamburgerClick}
        >
          {isOpen ? <FaTimes className='h-5 w-5 ' /> : <FaBars className='h-5 w-5 bg-green-500' />}
        </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-[#0f0f0f] flex flex-col p-4 md:items-center">
          <NavLink
            to="/home"
            className="text-light bg-success border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase 
            rounded-tr-2xl rounded-bl-2xl transition-colors hover:bg-blue-500 hover:text-white"
          >
            Home
          </NavLink>
          <Link
            to="/shop"
            className="text-light bg-primary border-r border-solid border-gray-600 py-2 px-3 font-bold 
            rounded-tr-2xl rounded-bl-2xl uppercase transition-colors hover:bg-blue-500 hover:text-white"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="bg-info border-r border-solid border-gray-600 py-2 px-3 font-bold uppercase
            rounded-tr-2xl rounded-bl-2xl  transition-colors hover:bg-blue-500 hover:text-white"
          >
            About Our Shop
          </Link>
          <Link
            to="/guide"
            className="bg-warning border-r border-solid border-gray-600 py-2 px-3 font-bold 
            rounded-tr-2xl rounded-bl-2xl uppercase transition-colors hover:bg-blue-500 hover:text-white"
          >
            Guide
          </Link>
          <Link
            to="/rules"
            className="bg-dark text-light border-r border-solid border-gray-600 py-2 px-3 font-bold 
            rounded-tr-2xl rounded-bl-2xl uppercase transition-colors hover:bg-blue-500 hover:text-white"
          >
            Rules
          </Link>
          <Link
            to="/how-to-order"
            className="bg-danger border-r border-solid border-gray-600 py-2 px-3 font-bold
            rounded-tr-2xl rounded-bl-2xl  uppercase transition-colors hover:bg-blue-500 hover:text-white"
          >
            How to Order
          </Link>
        </div>
      )}
    
    </nav>
  );
};

export default Navbar;
