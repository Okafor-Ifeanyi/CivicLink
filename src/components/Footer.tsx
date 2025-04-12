import { Link } from "react-router-dom";
import CivicLinkLogo from "./Logo";
import {
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <TwitterIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <LinkedinIcon />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <InstagramIcon />,
  },
];

const quickLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Contact Official",
    url: "/contact",
  },
  {
    name: "Service",
    url: "/services",
  },
];

const legalLinks = [
  {
    name: "Terms",
    url: "/terms",
  },
  {
    name: "Privacy",
    url: "/privacy",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-4 mt-auto">
      <div className="container mx-auto flex flex-wrap justify-between max-sm:items-center md:grid gap-4 max-sm:[&_li.group]:mx-auto">
        <div className="col-span-2 space-y-4">
          <CivicLinkLogo mode="dark" />
          <p>
            CivicLink is a civic-tech tool built to help everyday Nigerians
            engage with government; clearly, directly, and with confidence.
          </p>
          <div className="social-links flex gap-4 items-center">
            {socialLinks.map((link) => (
              <Link
                to={link.url}
                key={link.name}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-white hover:text-primary rounded-full p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="quick-links col-start-4">
          <div className="text-lg font-bold mb-4 text-center">Quick Link</div>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.name} className="group relative font-normal w-fit">
                <Link to={link.url}>{link.name}</Link>
                <hr className="border-b-2 border-gray-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>

        <div className="social-links">
          <div className="text-lg font-bold mb-4 text-center">Social</div>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <li key={link.name} className="group relative font-normal w-fit">
                <Link to={link.url}>{link.name}</Link>
                <hr className="border-b-2 border-gray-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>
        <div className="legal-links">
          <div className="text-lg font-bold mb-4 text-center">Legal</div>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <li key={link.name} className="group relative font-normal w-fit">
                <Link to={link.url}>{link.name}</Link>
                <hr className="border-b-2 border-gray-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>
        <hr className="col-span-6 opacity-10" />
        <p className="mx-auto text-center col-span-6">
          Copyright @ 2025 CivicLink, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
