import React from 'react';
import { NavbarData } from '../data/Navbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex justify-center p-4 bg-gray-800 gap-x-5">
      {
        NavbarData.map((link, indx) => (
          <NavLink
            key={indx}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold text-xl" : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))
      }
    </div>
  );
};

export default Navbar;
