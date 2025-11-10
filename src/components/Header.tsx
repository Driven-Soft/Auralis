import { Link } from "react-router-dom";
import AuralisLogo from "../assets/images/icons/AuralisFavicon.png";

const Header = () => {
  return (
    <header className="flex items-center py-2 gap-1 shadow-[0_2px_5px_rgba(0,0,0,0.3)] top-0 z-40 min-h-[34px] sm:gap-3 md:gap-4 ">
      <div className="flex items-center mx-2">
        <div className="flex p-2">
          <Link
            to="/"
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-14 lg:h-14 transition-all duration-200 bg-gray-100 rounded-lg p-1"
          >
            <img
              src={AuralisLogo}
              alt="Auralis"
              className="w-full h-full object-contain"
            />
          </Link>
          <Link to="/">
            <h1>Auralis</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
