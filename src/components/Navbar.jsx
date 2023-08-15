"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

import { afterNav, beforeNav } from "@/navdata/navData"


const Navbar = () => {
  const user = null;

  const navData = user ? afterNav : beforeNav;

  return (
    <nav className="flex flex-col navbar sticky top-0 z-10 bg-slate-200 shadow-lg dark:bg-teal-950 lg:pr-3">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-2xl normal-case">
          My Blog Corner
        </Link>
      </div>
      <div
        className={`absolute left-0 top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
      >
        <ul className="menu menu-horizontal flex-col px-1 lg:flex-row">
          {navData.map(({ path, title }) => (
            <li key={path} className="mx-auto">
              <NavLink
                href={path}
                activeClassName="text-blue-500"
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
</div>
    </nav>
  );
};

export default Navbar;
