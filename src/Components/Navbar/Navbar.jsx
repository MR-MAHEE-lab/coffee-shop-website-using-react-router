import React from 'react';
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Menus = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = ({ orderCount }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2 flex justify-between items-center gap-4">
        {/* Logo */}
        <a href='#' className='font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive'>
          <img src={Logo} alt="Logo" className='w-14' />
          Cafie Cafe
        </a>

        {/* Links & Order */}
        <div className='flex justify-between items-center gap-4'>
          <ul className='hidden sm:flex items-center gap-4'>
            {Menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Order Button with Floating Badge */}
          <button
            className="relative bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2"
            onClick={() => navigate("/order")}
          >
            Order
            <FaCoffee className="text-xl cursor-pointer" />

            {/* Floating notification badge */}
            {orderCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {orderCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
