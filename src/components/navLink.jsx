"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded h-6 px-1  text-center items-center ${pathName === link.url && "bg-black text-white "}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;