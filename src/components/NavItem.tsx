import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const NavItem = ({ to, icon, text, className }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      aria-label={text}
      title={text}
      className={({ isActive }) =>
        `text-inherit rounded-xl px-3 py-2 cursor-pointer transition-all duration-200 ease-in-out 
        hover:scale-105 font-medium ${
          isActive
            ? "bg-selected dark:bg-dark-selected dark:text-texto-selected"
            : "dark:hover:bg-dark-selected dark:hover:text-texto-selected hover:bg-selected"
        }` + (className ? ` ${className}` : "")
      }
    >
      <div className={`flex flex-row items-center gap-1`}>
        <span className="flex items-center">{icon}</span>
        <p className="select-none">{text}</p>
      </div>
    </NavLink>
  );
};

export default NavItem;
