import { useState } from "react";
import { useForm } from "react-hook-form";
import CardWrapper from "./CardWrapper";
import LabelWrapper from "./LabelWrapper";
import ButtonWrapper from "./ButtonWrapper";
import { LogIn, UserPlus } from "lucide-react";

type LoginForm = {
  email: string;
  senha: string;
};

const LoginCard = () => {
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginForm>({
    defaultValues: { email: "", senha: "" },
  });

  const onSubmit = async (data: LoginForm) => {
    // Aqui você pode chamar a API de login
    console.log("Login enviado:", data);
    setSuccess("Autenticando...");
    await new Promise((r) => setTimeout(r, 800));
    setSuccess(null);
    reset();
  };

  return (
    <CardWrapper className="flex-col w-[90%] md:w-[60%] lg:w-[40%] pb-6 mb-8">
      <div className="bg-linear-to-r from-primary to-secondary rounded-full p-4 shadow-glow-blue">
        <LogIn className="w-8 h-8 text-white" />
      </div>
      <div className="text-center my-6 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-texto-primary dark:text-white">Fazer Login</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">Entre na sua conta para continuar</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full mx-2">
        <div className="flex flex-col">
          <LabelWrapper>Email</LabelWrapper>
          <input
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email inválido",
              },
            })}
            className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
            placeholder="seuemail@exemplo.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <LabelWrapper>Senha</LabelWrapper>
          <input
            type="password"
            {...register("senha", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter ao menos 6 caracteres",
              },
            })}
            className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
            placeholder="Mínimo 6 caracteres"
          />
          {errors.senha && (
            <p className="text-xs text-red-500 mt-1">{errors.senha.message}</p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn mt-2 btn-primary cursor-pointer w-[95%] px-4
          border border-gray-300 dark:border-blue-800
          bg-linear-to-r from-primary to-secondary
          text-white font-semibold py-3 rounded-xl text-center
          transition-all duration-200 ease-in-out
          hover:scale-102
          shadow-md"
          >
            Entrar
          </button>
        </div>
          {success && <p className="text-sm text-center text-green-600 ml-4">{success}</p>}
      </form>

      <div className="w-full flex items-center mt-4">
        <div className="grow h-px bg-gray-200 dark:bg-gray-700" />
        <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
          OU
        </span>
        <div className="grow h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="w-[85%]">
        <ButtonWrapper className="flex-row mt-4" to="/cadastro">
          <UserPlus className="w-5 h-5 mr-2" />
          <p>Criar um novo perfil</p>
        </ButtonWrapper>
      </div>
    </CardWrapper>
  );
};

export default LoginCard;
