import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col pt-4 pb-2 border-t w-[85%] mx-auto">
        <div className="h-[60px] w-full flex justify-center">
          <Link to="/" className="h-[60px] w-[150px]">
            <img src="../images/football.png" alt="photo" />
          </Link>
        </div>
        {/* <div className="flex gap-6 justify-center">
          <Link>Contact Us</Link>
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
        </div> */}
        <p className="flex justify-center">
          Copyright @ 2024 football-it | All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
