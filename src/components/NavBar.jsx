import React from "react";
import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "TaskManager",
    to: "/task-manager",
  },
  {
    label: "ProductList",
    to: "/product-list",
  },
];

function NavBar() {
  return (
    <nav className="flex justify-between py-5 px-20 shadow-md">
      <h3 className="font-bold">JJoints</h3>
      <ul className="flex gap-5">
        {links.map((link, index) => (
          <NavItem label={link.label} to={link.to} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
