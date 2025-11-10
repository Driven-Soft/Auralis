import { Link } from "react-router-dom";
import AuralisLogoWhite from "../assets/images/icons/AuralisLogoWhite.png";
import DarkModeToggle from "./DarkModeToggle";
import { CircleQuestionMark, Info, Lightbulb, Users } from "lucide-react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="flex items-center py-2 gap-1 bg-background dark:bg-dark-background shadow-[0_2px_5px_rgba(0,0,0,0.3)] top-0 z-40 min-h-[34px] sm:gap-3 md:gap-4 text-texto-primary dark:text-texto-secondary">
      <div className="flex items-center mx-2 justify-between w-full p-2">
        <div className="flex flex-row text-center items-center gap-3">
          <Link
            to="/"
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-all duration-200 rounded-lg p-2 bg-linear-to-r from-primary to-secondary"
          >
            <img
              src={AuralisLogoWhite}
              alt="Auralis"
              className="w-full h-full object-contain"
            />
          </Link>
          <Link to="/">
            <h1 className="text-2xl font-bold">Auralis</h1>
          </Link>
        </div>

        <div className="flex flex-row items-center gap-2 text-sm">
          <NavItem to="/sobre" icon={<Info />} text="Sobre" />
          <NavItem to="/dicas" icon={<Lightbulb />} text="Dicas" />
          <NavItem to="/faq" icon={<CircleQuestionMark />} text="FAQ" />
          <NavItem to="/integrantes" icon={<Users />} text="Integrantes" />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
