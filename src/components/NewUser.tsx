import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NewUser = () => {
  return (
    <Link
      to="/cadastro"
      className="
        flex items-center justify-self-center rounded-lg border-gray-200
        dark:border-gray-700 dark:bg-dark-background-secondary
        shadow-md p-6 hover:shadow-lg transition-all duration-300 ease-in-out
        flex-col gap-4 w-full border-2 bg-gray-50 hover:border-primary hover:bg-blue-50 border-dashed
        cursor-pointer dark:hover:border-gray-400 dark:hover:bg-dark-background-secondary"
    >
      <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-6">
        <Plus size={24} className="text-gray-500 dark:text-gray-400" />
      </div>
      <div className="text-center items-center">
        <p className="text-gray-500 dark:text-gray-200">Novo perfil</p>
      </div>
    </Link>
  );
};

export default NewUser;