"use client";

import { homeNavLinks } from "@/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <div className="flex size-full flex-row gap-4">
        <nav className="navbar-nav">
          <ul className="navbar-nav_elements">
            {homeNavLinks.map((link) => {
              let isActive = false;
              if (link.route === "/home") {
                isActive = link.route === pathname;
              } else {
                isActive = pathname.includes(link.route);
              }

              return (
                <li
                  key={link.route}
                  className={`navbar-nav_element group ${
                    isActive ? "bg-accent " : ""
                  }`}
                >
                  <Link className="navbar-link" href={link.route}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>{" "}
      </div>
    </div>
  );
};

export default NavBar;
