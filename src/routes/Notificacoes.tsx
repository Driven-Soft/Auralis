import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { MoveLeft } from "lucide-react";

const Notificacoes = () => {
  return (
    <Wrapper>
      <h1>Notificações</h1>
      <div className="w-[95%] lg:w-[70%] mx-auto pl-2 mt-6 text-gray-700 dark:text-gray-400">
        <Link to="/dashboard" className="flex flex-row items-center">
          <MoveLeft className="mt-1 mr-2" />
          Voltar para seu perfil
        </Link>
      </div>
    </Wrapper>
  );
};

export default Notificacoes;
