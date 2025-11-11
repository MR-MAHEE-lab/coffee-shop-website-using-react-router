import React, { useState } from 'react';
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Menus = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = ({ orderCount }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // mobile menu state

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2 flex justify-between items-center gap-4">
        {/* Logo */}
        <a href='#' className='font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive'>
          <img src={Logo} alt="Logo" className='w-12 sm:w-14' />
          Cafie Cafe
        </a>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex items-center gap-4'>
          {Menus.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className='inline-block text-xl py-2 px-4 text-white/70 hover:text-white duration-200'
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className='flex items-center gap-2'>
          {/* Order Button */}
          <button
            className="relative bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2"
            onClick={() => navigate("/order")}
          >
            Order
            <FaCoffee className="text-xl" />
            {orderCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {orderCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu for Mobile */}
          <button
            className='sm:hidden text-2xl ml-2'
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden bg-secondary/95 text-white flex flex-col gap-3 py-4 px-6">
          {Menus.map(menu => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className='block py-2 text-lg hover:text-primary duration-200'
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
