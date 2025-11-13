import { Link } from "react-router-dom";
import AuralisLogoWhite from "../assets/images/icons/AuralisLogoWhite.png";
import DarkModeToggle from "./DarkModeToggle";
import {
  CircleQuestionMark,
  Info,
  Lightbulb,
  Users,
  Menu,
  X,
  HomeIcon,
} from "lucide-react";
import NavItem from "./NavItem";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center py-2 gap-1 bg-background-secondary dark:bg-dark-background-secondary shadow-[0_2px_5px_rgba(0,0,0,0.3)] top-0 z-40 min-h-[34px] sm:gap-3 md:gap-4 text-texto-primary dark:text-texto-secondary">
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
            <div className="hidden md:flex flex-row items-center gap-2">
              <NavItem to="/sobre" icon={<Info />} text="Sobre" />
              <NavItem to="/dicas" icon={<Lightbulb />} text="Dicas" />
              <NavItem to="/faq" icon={<CircleQuestionMark />} text="FAQ" />
              <NavItem to="/integrantes" icon={<Users />} text="Integrantes" />
              <Link
                to="/#login"
                className="bg-linear-to-r from-primary to-secondary rounded-xl hover:scale-110 transition-all duration-200 ease-in-out shadow-glow-blue py-2 px-4 text-center font-bold text-white"
              >
                Login
              </Link>
              <DarkModeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <DarkModeToggle />
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menu"
                className="p-2 rounded-md text-texto-primary dark:text-texto-secondary hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 border-l border-gray-200 dark:border-gray-700 right-0 h-full bg-linear-to-t from-gray-100 to-white shadow-lg z-50 dark:bg-linear-to-t dark:from-gray-900 dark:to-gray-800

          transition-all duration-500 ease-in-out
          ${mobileMenuOpen ? "w-64" : "w-0"} overflow-hidden`}
      >
        {/* Botão de fechar — só aparece quando o menu está aberto */}
        {mobileMenuOpen && (
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-texto-primary dark:text-texto-secondary text-2xl p-2 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 border rounded-lg"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Conteúdo do menu: links em coluna */}
        <nav className="mt-18 px-6">
          <ul className="flex flex-col gap-4 justify-between w-full">
            <hr className="w-full border-t-2 rounded-3xl border-gray-300 dark:border-gray-500" />

            <li>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="border-gray-200 dark:border-gray-600 dark:bg-gray-800 border flex flex-1 text-left items-center gap-3 text-texto-primary dark:text-texto-secondary text-lg font-medium bg-gray-100 rounded-lg p-3"
              >
                <HomeIcon className="w-5 h-5" />
                <p className="text-center absolute left-1/2 -translate-x-1/2">
                  Home
                </p>
              </Link>
            </li>
            <hr className="w-full border-t-2 rounded-3xl border-gray-300 dark:border-gray-500" />
            <li>
              <Link
                to="/sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="border-gray-200 dark:border-gray-600 dark:bg-gray-800 border flex flex-1 text-left items-center gap-3 text-texto-primary dark:text-texto-secondary text-lg font-medium bg-gray-100 rounded-lg p-3"
              >
                <Info className="w-5 h-5" />
                <p className="text-center absolute left-1/2 -translate-x-1/2">
                  Sobre
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/dicas"
                onClick={() => setMobileMenuOpen(false)}
                className="border-gray-200 dark:border-gray-600 dark:bg-gray-800 border flex flex-1 text-left items-center gap-3 text-texto-primary dark:text-texto-secondary text-lg font-medium bg-gray-100 rounded-lg p-3"
              >
                <Lightbulb className="w-5 h-5" />
                <p className="text-center absolute left-1/2 -translate-x-1/2">
                  Dicas
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="border-gray-200 dark:border-gray-600 dark:bg-gray-800 border flex flex-1 text-left items-center gap-3 text-texto-primary dark:text-texto-secondary text-lg font-medium bg-gray-100 rounded-lg p-3"
              >
                <CircleQuestionMark className="w-5 h-5" />
                <p className="text-center absolute left-1/2 -translate-x-1/2">
                  FAQ
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/integrantes"
                onClick={() => setMobileMenuOpen(false)}
                className="border-gray-200 dark:border-gray-600 dark:bg-gray-800 border flex flex-1 text-left items-center gap-3 text-texto-primary dark:text-texto-secondary text-lg font-medium bg-gray-100 rounded-lg p-3"
              >
                <Users className="w-5 h-5" />
                <p className="text-center absolute left-1/2 -translate-x-1/2">
                  Integrantes
                </p>
              </Link>
            </li>
            <hr className="w-full border-t-2 rounded-3xl border-gray-300 dark:border-gray-500" />
            <li>
              <div className="bg-linear-to-r from-primary to-secondary rounded-lg shadow-glow-blue p-2 text-center font-bold text-white">
                <Link to="/#login" onClick={() => setMobileMenuOpen(false)}>
                  <p>Login</p>
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/cadastro"
                onClick={() => setMobileMenuOpen(false)}
                className="border-gray-400 dark:border-gray-600 dark:bg-gray-800 border flex flex-1 items-center gap-3 text-texto-primary dark:text-texto-secondary text-lg font-medium bg-gray-200 rounded-lg text-center p-1"
              >
                <p className="w-full">Cadastre-se</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
