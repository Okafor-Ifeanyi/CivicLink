import { Link, useLocation } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import React from "react";
import CivicLinkLogo from "./Logo";
// import { useAuthContext } from "../context/auth.context";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Service",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="nav-wrapper border-b border-gray-100">
      <nav className="nav-bar container mx-auto flex max-sm:flex-col gap-4 justify-between items-center min-h-22 p-4">
        <CivicLinkLogo />
        <ul className="flex gap-4 md:gap-10 items-center">
          {links.map((link) => (
            <li key={link.path} className="group relative">
              <Link
                to={link.path}
                className={currentPath === link.path ? "font-bold" : ""}
              >
                {link.name}
              </Link>
              <hr className="border-b-2 border-gray-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
            </li>
          ))}
          <Select>
            <SelectTrigger className="bg-transparent border-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="igbo">Igbo</SelectItem>
              <SelectItem value="hausa">Hausa</SelectItem>
              <SelectItem value="pidgin">Pidgin</SelectItem>
            </SelectContent>
          </Select>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
