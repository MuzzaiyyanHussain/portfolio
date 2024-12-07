import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/muzzaiyyan-hussain-55641a30a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-700" />
        </a>
        <a
          href="https://github.com/MuzzaiyyanHussain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-black" />
        </a>
        <a
          href="https://www.instagram.com/mzyyn_7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500" />
        </a>
        <a
          href="https://twitter.com/Muzzz_Hussain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="hover:text-blue-500" />
        </a>
        <a
          href=""////resume link needs to be uploaded
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxResume className="hover:text-black" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
