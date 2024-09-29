import React, { useState } from 'react';
import loGo from "../assets/Logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  { name: 'Home', type: 'link' },
  { name: 'Articles', type: 'link' },
  { name: 'Pages', type: 'dropdown', items: ['About us', 'Contact us'] },
  { name: 'Pricing', type: 'link' },
  { name: 'FAQ', type: 'link' }
];

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === 'link' ? (
        <a href="/" className="hover:text-blue-500">
          {item.name}
        </a>
      ) : (
        <>
          <a href="/" className="hover:text-blue-500 flex items-center">
            {item.name}
            {/* Show dropdown icon only for dropdowns */}
            <MdKeyboardArrowDown className="ml-1" />
          </a>
          <div className="hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max">
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <a key={index} href="/" className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavVisibility] = useState(false);

  const navVisibilityHandler = () => {
    setNavVisibility((curState) => !curState);
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-16" src={loGo} alt="Logo" />
        </div>
        <div className="z-50 lg:hidden">
          {navIsVisible ? <AiOutlineClose onClick={navVisibilityHandler} /> : <AiOutlineMenu onClick={navVisibilityHandler} />}
        </div>
        <div
          className={`${
            navIsVisible ? 'right-0' : '-right-full'
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
