import { useState } from "react";
import { CircleUserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import Wrapper from "../components/Wrapper";
import CardWrapper from "../components/CardWrapper";
import type { cadastroFormType } from "../types/cadastroFormType";
import LabelWrapper from "../components/LabelWrapper";
import Hero from "../components/Hero";

const Cadastro = () => {
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<cadastroFormType>({
    defaultValues: {
      nome: "",
      email: "",
      nascimento: "",
      genero: "",
      senha: "",
    },
  });

  const nascimentoValue = watch("nascimento");
  const generoValue = watch("genero");

  const onSubmit = async (data: cadastroFormType) => {
    // CHAMADA DE API
    console.log("Cadastro enviado:", data);
    setSuccess("Cadastro realizado com sucesso!");
    reset();
    setTimeout(() => setSuccess(null), 4000);
  };

  return (
    <Wrapper>
      <section>
        <div className="pt-4 sm:pt-0 pb-4">
          <Hero
            icon={<CircleUserRound color="white" />}
            iconClassName="bg-linear-to-r from-primary to-secondary shadow-glow-blue"
            title="Novo perfil"
            text="Crie seu perfil e comece sua jornada de bem-estar"
          />
        </div>
      </section>

      <CardWrapper className="w-[90%] md:w-[60%] lg:w-[40%] pb-6 mb-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full mx-2"
        >
          <div className="flex flex-col">
            <LabelWrapper>Nome completo</LabelWrapper>
            <input
              {...register("nome", { required: "Nome é obrigatório" })}
              className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
              placeholder="Digite seu nome"
            />
            {errors.nome && (
              <p className="text-xs text-red-500 mt-1">{errors.nome.message}</p>
            )}
          </div>

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
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <LabelWrapper>Data de nascimento</LabelWrapper>
            <input
              type="date"
              {...register("nascimento", {
                required: "Data de nascimento é obrigatória",
              })}
              placeholder="dd/mm/aaaa"
              className={`text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 ${
                !nascimentoValue
                  ? "text-gray-400 placeholder:font-light dark:placeholder:text-gray-400"
                  : ""
              }`}
            />
            {errors.nascimento && (
              <p className="text-xs text-red-500 mt-1">
                {errors.nascimento.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <LabelWrapper>Gênero</LabelWrapper>
            <select
              {...register("genero", { required: "Selecione um gênero" })}
              className={`text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 ${
                !generoValue
                  ? "text-gray-400 placeholder:font-light dark:placeholder:text-gray-400"
                  : ""
              }`}
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiroNaoDizer">Prefiro não dizer</option>
            </select>
            {errors.genero && (
              <p className="text-xs text-red-500 mt-1">
                {errors.genero.message}
              </p>
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
              <p className="text-xs text-red-500 mt-1">
                {errors.senha.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary cursor-pointer w-[95%] mt-2 px-4
          border border-gray-300 dark:border-blue-800
          bg-linear-to-r from-primary to-secondary
          text-white font-semibold py-3 rounded-xl text-center
          transition-all duration-200 ease-in-out
          hover:scale-102
          shadow-md"
            >
              Criar perfil
            </button>
            {success && <p className="text-sm text-green-600">{success}</p>}
          </div>
        </form>
      </CardWrapper>
    </Wrapper>
  );
};

export default Cadastro;
