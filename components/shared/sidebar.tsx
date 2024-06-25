"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import UserButton from "./user-button";
import { Separator } from "../ui/separator";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar sticky">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/icons/stars.svg"
            alt="logo"
            width={36}
            height={36}
          />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = pathname.includes(link.route);

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-accent " : ""
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image src={link.icon} alt="logo" width={24} height={24} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Separator className="my-2" />

          <ul className="sidebar-nav_elements">
            {navLinks.slice(2).map((link) => {
              const isActive = pathname.includes(link.route);

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-accent " : ""
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image src={link.icon} alt="logo" width={24} height={24} />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button asChild className="rounded-full h-16">
          <Link href="/">Login</Link>
        </Button>
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
