import { useState, useEffect } from "react";
import { CircleUserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import Wrapper from "../components/Wrapper";
import CardWrapper from "../components/CardWrapper";
import type { cadastroFormType } from "../types/cadastroFormType";
import LabelWrapper from "../components/LabelWrapper";
import Hero from "../components/Hero";
import { useApi } from "../context/Api/useApi";
import ButtonWrapper from "../components/ButtonWrapper";

const Cadastro = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<cadastroFormType>({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      nascimento: "",
      genero: "",
      senha: "",
    },
  });

  const nascimentoValue = watch("nascimento");
  const generoValue = watch("genero");
  const { apiUrl } = useApi();

  useEffect(() => {
    register("nascimento", {
      required: "Data de nascimento é obrigatória",
      validate: (v: string) => {
        if (!v) return "Data de nascimento é obrigatória";
        const re = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!re.test(v)) return "Formato de data inválido (dd/mm/aaaa)";
        const [d, m, y] = v.split("/").map(Number);
        const date = new Date(y, m - 1, d);
        if (
          date.getFullYear() !== y ||
          date.getMonth() !== m - 1 ||
          date.getDate() !== d
        )
          return "Data inválida";
        const today = new Date();
        const todayOnly = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );
        if (date.getTime() > todayOnly.getTime())
          return "Data de nascimento não pode ser posterior à data atual";
        return true;
      },
    });
  }, [register]);

  const formatDateInput = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return digits.replace(/(\d{2})(\d+)/, "$1/$2");
    return digits.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
  };

  const onSubmit = async (data: cadastroFormType) => {
    let nascimentoISO: string | null = null;
    if (data.nascimento) {
      const parts = data.nascimento.split("/").map((p) => Number(p));
      if (parts.length === 3) {
        const [d, m, y] = parts;
        if (!Number.isNaN(d) && !Number.isNaN(m) && !Number.isNaN(y)) {
          const mm = String(m).padStart(2, "0");
          const dd = String(d).padStart(2, "0");
          nascimentoISO = `${y}-${mm}-${dd}`;
        }
      }
    }

    const payload = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      nascimento: nascimentoISO ?? data.nascimento,
      genero: data.genero,
      senha: data.senha,
    };

    setError(null);
    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => null);
      console.log("Dados enviados com sucesso:", result ?? data);
      reset();
      setSuccess(
        "Cadastro realizado com sucesso! Você já pode fazer login clicando no botão acima!"
      );
    } catch (err) {
      console.error("Erro de rede ao cadastrar:", err);
      setError("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
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
            <LabelWrapper>Telefone</LabelWrapper>
            <input
              {...register("telefone", {
                required: "Telefone é obrigatório",
                pattern: {
                  value: /^\+?[0-9\s()-]{6,20}$/,
                  message: "Formato de telefone inválido",
                },
              })}
              className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
              placeholder="(99) 99999-9999"
            />
            {errors.telefone && (
              <p className="text-xs text-red-500 mt-1">
                {errors.telefone.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <LabelWrapper>Data de nascimento</LabelWrapper>
            <input
              type="text"
              value={nascimentoValue || ""}
              onChange={(e) => {
                const formatted = formatDateInput(e.target.value);
                setValue("nascimento", formatted, { shouldValidate: true });
              }}
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
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
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

          <div className="flex items-center justify-center w-full">
            {success ? (
              <ButtonWrapper className="w-[95%] mt-2 px-4" to="/#login">
                Voltar para o login
              </ButtonWrapper>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || loading}
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
            )}
          </div>
          {loading && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin border-gray-400 dark:border-gray-00" />
              <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
                Carregando...
              </p>
            </div>
          )}
          {success && (
            <p className="text-sm text-center text-green-600">{success}</p>
          )}
          {error && <p className="text-sm text-center text-red-600">{error}</p>}
        </form>
      </CardWrapper>
    </Wrapper>
  );
};

export default Cadastro;
