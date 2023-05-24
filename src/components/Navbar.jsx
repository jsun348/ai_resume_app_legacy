import { useState } from "react";
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar bg-primary">
      <img src={logo} alt="hoobank" className="w-48 h-auto" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px] text-black"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 bg-gray-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="font-poppins font-normal cursor-pointer text-[16px] mb-4 text-black"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
