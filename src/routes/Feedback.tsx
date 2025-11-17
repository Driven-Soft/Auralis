import {
  HeartHandshakeIcon,
  MessageSquare,
  MessageSquareHeart,
  MoveLeft,
} from "lucide-react";
import ButtonWrapper from "../components/ButtonWrapper";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useApi } from "../context/Api/useApi";
import { useUser } from "../context/User/useUser";
import type { FeedbackType } from "../types/feedbackType";
import CardWrapper from "../components/CardWrapper";
import { Link } from "react-router-dom";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FeedbackType>();

  const { user } = useUser();

  const { apiUrl } = useApi();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FeedbackType) => {
    try {
      setIsLoading(true);
      const payload = {
        idUsuario: user?.id_usuario ?? 0,
        mensagem: data.message,
        nota: data.satisfaction,
      };

      const res = await fetch(`${apiUrl}feedbacks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Dados enviados com sucesso:", res);
      reset();
      setShowSuccess(true);
    } catch (err) {
      console.error("Erro de rede ao enviar feedback:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Hero
        title="Feedback"
        text="Deixe seu feedback sobre nossa plataforma aqui!"
        icon={<MessageSquareHeart color="white" />}
        iconClassName="bg-linear-to-r from-blue-400 to-blue-600 shadow-glow-blue"
      />

      <div className="w-[95%] lg:w-[70%] mx-auto pl-2 mt-6 text-gray-700 dark:text-gray-400">
        <Link to="/dashboard" className="flex flex-row items-center">
          <MoveLeft className="mt-1 mr-2" />
          Voltar para seu perfil
        </Link>
      </div>

      <CardWrapper className="items-center my-4 mx-2">
        {isLoading ? (
          <div className="flex flex-row items-center justify-center gap-4 m-4">
            <p className="text-xl font-bold text-gray-600 dark:text-gray-100">
              Enviando seu feedback...
            </p>
            <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin border-gray-400 dark:border-gray-00" />
          </div>
        ) : (
          <>
            {showSuccess ? (
              <div className="flex flex-col items-center gap-2 min-h-[90%]">
                <p className="text-green-400 text-center font-semibold text-lg">
                  Obrigado! Sua sugestão foi enviada com sucesso!
                </p>
                <HeartHandshakeIcon className="w-16 h-16 text-green-400" />
                <ButtonWrapper className="mt-4" to="/dashboard">
                  Voltar para seu perfil
                </ButtonWrapper>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mx-1 sm:mx-4">
                <div className="flex flex-row gap-2 ">
                  <div className="w-12 h-12 text-indigo-600 bg-indigo-50 dark:bg-blue-950 dark:text-blue-400  flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700">
                    <MessageSquare />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-800 dark:text-white text-center">
                    Conte-nos mais!
                  </h2>
                </div>

                <div className="pb-10 pt-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Sua opinião é muito importante para melhorarmos nossos
                    serviços
                  </p>
                </div>
                <div>
                  <span className="block text-gray-700 text-lg font-medium mb-2 dark:text-white">
                    Avaliação do site
                  </span>

                  <div>
                    <input
                      type="hidden"
                      {...register("satisfaction", {
                        required: "Selecione uma nota",
                        valueAsNumber: true,
                      })}
                    />

                    <div className="flex flex-row gap-2">
                      {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => {
                        const current = watch("satisfaction") as
                          | number
                          | undefined;
                        const selected = !!current && num <= current;

                        return (
                          <button
                            key={num}
                            type="button"
                            aria-label={`${num} estrelas`}
                            onClick={() =>
                              setValue("satisfaction", num, {
                                shouldValidate: true,
                              })
                            }
                            className={
                              "cursor-pointer transition rounded-md p-2 flex items-center justify-center focus:outline-none " +
                              (selected
                                ? "bg-yellow-400 text-white"
                                : "bg-transparent border border-gray-300 dark:border-gray-500 text-gray-400 dark:text-gray-300")
                            }
                          >
                            {selected ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 fill-current"
                                aria-hidden
                              >
                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.606 0 9.748l8.332-1.73L12 .587z" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 stroke-current"
                                fill="none"
                                aria-hidden
                              >
                                <path
                                  d="M12 .587l3.668 7.431L24 9.748l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.606 0 9.748l8.332-1.73L12 .587z"
                                  strokeWidth={1.2}
                                  stroke="currentColor"
                                />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {errors.satisfaction && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.satisfaction.message}
                    </p>
                  )}
                </div>
                <span className="block text-gray-700 text-sm my-2 dark:text-gray-400">
                  Clique nas estrelas para avaliar (1 a 5)
                </span>

                {/* MENSAGEM */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-white text-lg font-medium mb-2 mt-10"
                  >
                    Sugestões e comentários
                  </label>
                  <textarea
                    id="message"
                    placeholder="Compartilhe suas sugestões, críticas ou elogios..."
                    rows={5}
                    {...register("message", {
                      required: "A mensagem é obrigatória",
                      minLength: {
                        value: 5,
                        message: "A mensagem deve ser maior!",
                      },
                    })}
                    className="w-full dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* BOTÃO */}
                <ButtonWrapper
                  type="submit"
                  className="mt-4 bg-secondary text-white dark:bg-secondary border-2"
                >
                  Enviar
                </ButtonWrapper>
              </form>
            )}
          </>
        )}
      </CardWrapper>
    </Wrapper>
  );
};

export default Feedback;
