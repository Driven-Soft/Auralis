import { useState } from "react";
import { useForm } from "react-hook-form";
import CardWrapper from "./CardWrapper";
import LabelWrapper from "./LabelWrapper";
import ButtonWrapper from "./ButtonWrapper";
import { LogIn, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/User/useUser";

type LoginForm = {
  email: string;
  senha: string;
};

const LoginCard = () => {
  const [loading, setLoading] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginForm>({
    defaultValues: { email: "", senha: "" },
  });

  const navigate = useNavigate();
  const { setUserEmail, setUserSenha, setUser, login } = useUser();

  const onSubmit = async (data: LoginForm) => {
    const { email, senha } = data;
    console.log("Login enviado:", data);

    try {
      setLoading(true);
      if (!login)
        throw new Error("login não disponível no contexto de usuário");
      const result = await login(email, senha);

      if (result.success) {
        console.log(`Login feito com sucesso! email:${email} senha:${senha}`);
        setUserEmail(email);
        setUserSenha(senha);

        if (result.user) setUser(result.user);
        setInvalidCredentials(false);
        await new Promise((r) => setTimeout(r, 300));
        navigate("/dashboard");
      } else {
        console.log("Falha no login:", result.message);
        setInvalidCredentials(true);
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <CardWrapper className="flex-col w-[90%] md:w-[60%] lg:w-[40%] pb-6 mb-8">
      <div className="bg-linear-to-r from-primary to-secondary rounded-full p-4 shadow-glow-blue">
        <LogIn className="w-8 h-8 text-white" />
      </div>
      <div className="text-center my-6 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-texto-primary dark:text-white">
          Fazer Login
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">
          Entre na sua conta para continuar
        </p>
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
              onChange: () => setInvalidCredentials(false),
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
              onChange: () => setInvalidCredentials(false),
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
        {invalidCredentials && (
          <p className="text-xs text-red-500 mt-2 text-center">
            Credenciais inválidas! Tente novamente.
          </p>
        )}

        {loading && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin border-gray-400 dark:border-gray-00" />
            <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
              Carregando...
            </p>
          </div>
        )}
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
