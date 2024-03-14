import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useSpeedDial } from "@material-tailwind/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-b flex justify-between h-[80px] w-[90%] items-center sm:w-[85%] mx-auto">
        <div className="h-[60px] w-[150px] sm:h-[70px] sm:w-[150px] ml-[-10px] sm:ml-0 relative">
          <Link to="/">
            <img className="h-full w-full" src="../images/football.png" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-6">
            <li>
              <Link to="/CompetitionsLayout/" className="text-lg">
                Competitions
              </Link>
            </li>

            <li>
              <Link to="/matches" className="text-lg">
                Live
              </Link>
            </li>
            <li>
              <Link className="text-lg">Teams</Link>
            </li>
            <li>
              <Link className="text-lg">News</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <FiMenu className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <div className=" px-4 py-2 z-50 absolute top-20 right-2 bg-white border rounded-md">
              <ul className="flex flex-col">
                <li
                  className="hover:bg-slate-200 py-2 px-5 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/CompetitionsLayout/" className="text-lg">
                    Competitions
                  </Link>
                </li>

                <li
                  className="hover:bg-slate-200 py-2 px-5 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/matches" className="text-lg">
                    Live
                  </Link>
                </li>
                <li
                  className="hover:bg-slate-200 py-2 px-5 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Link className="text-lg">Teams</Link>
                </li>
                <li
                  className="hover:bg-slate-200 py-2 px-5 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Link className="text-lg">News</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden sm:flex">
          <input
            className="border px-4 py-2 rounded-[25px] outline-none"
            type="text"
            placeholder="Search..."
          />
          <Link>
            <IoPersonCircleOutline className="text-5xl text-black-100" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
