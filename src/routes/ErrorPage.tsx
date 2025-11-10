import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full text-center bg-gray-900">
      <h1 className="text-2xl md:text-6xl font-bold md:px-20 md:py-20 p-5 text-gray-50">
        Erro de redirecionamento!
      </h1>
      <h2 className="text:lg md:text-4xl font-bold md:px-20 md:py-20 p-5 text-gray-50">
        A página que tentou visitar não existe.
      </h2>
      <Link
        to="/"
        className="
          bg-blue-600
          text-white font-semibold px-6 py-3 rounded-md
          text-center
          transition-all duration-200 ease-in-out
          hover:brightness-120 hover:scale-110
        "
      >
        Voltar ao Início
      </Link>
    </div>
  );
};

export default ErrorPage;
