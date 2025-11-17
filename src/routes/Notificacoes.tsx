import { useState } from "react";
import { useForm } from "react-hook-form";
import Wrapper from "../components/Wrapper";
import ButtonWrapper from "../components/ButtonWrapper";
import Hero from "../components/Hero";
import CardWrapper from "../components/CardWrapper";
import { Bell, CalendarCheck } from "lucide-react";
import type { NotificacaoType } from "../types/notificacaoType";
import { useApi } from "../context/Api/useApi";
import { useUser } from "../context/User/useUser";

export default function Notificacoes() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [escolhaNula, setEscolhaNula] = useState(false);
  const { apiUrl } = useApi();
  const { user } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<NotificacaoType>({
    defaultValues: { email: false, whatsapp: false },
  });

  const onSubmit = async (data: NotificacaoType) => {
    const { email, whatsapp } = data;
    if (!email && !whatsapp) {
      setEscolhaNula(true);
      setTimeout(() => setEscolhaNula(false), 3000);
      return;
    }

    setError(null);
    setIsLoading(true);
    try {
      const payload = {
        idUsuario: user?.id_usuario ?? 0,
        email: data.email ? "S" : "N",
        whatsapp: data.whatsapp ? "S" : "N",
        status: "A",
      };

      const res = await fetch(`${apiUrl}inscricoes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        console.log("Payload enviado:", payload);
        setShowSuccess(true);
        reset();
      } else {
        const body = await res.text().catch(() => null);
        console.error("Falha ao enviar contato:", res.status, body);
        setError("Falha ao enviar inscrição. Tente novamente mais tarde.");
      }
    } catch (err) {
      console.error("Erro de rede ao enviar contato:", err);
      setError("Erro de rede. Verifique sua conexão e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Hero
        title="Notificações"
        text="Gerencie como deseja receber avisos sobre seus compromissos."
        icon={<Bell color="white" />}
        iconClassName="bg-linear-to-r from-blue-400 to-blue-600 shadow-glow-blue"
      />

      <CardWrapper className="items-center my-4 mx-2">
        {isLoading ? (
          <div className="flex flex-row items-center justify-center gap-4 m-4">
            <p className="text-xl font-bold text-gray-600 dark:text-gray-100">
              Enviando suas preferências...
            </p>
            <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin border-gray-400 dark:border-gray-00" />
          </div>
        ) : (
          <>
            {showSuccess ? (
              <div className="flex flex-col items-center gap-2 min-h-[90%]">
                <p className="text-green-400 text-center font-semibold text-lg">
                  Inscrição feita com sucesso!
                </p>
                <p className="text-center text-gray-700 dark:text-gray-200">
                  Agora você receberá lembretes e mensagens a respeito de seus
                  relatórios diários.
                </p>
                <CalendarCheck className="w-16 h-16 text-green-400" />

                <ButtonWrapper className="mt-4" to="/dashboard">
                  Voltar para seu perfil
                </ButtonWrapper>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mx-1 sm:mx-4">
                <div className="flex flex-row gap-2 ">
                  <div className="w-12 h-12 text-indigo-600 bg-indigo-50 dark:bg-blue-950 dark:text-blue-400  flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700">
                    <Bell />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-800 dark:text-white text-center">
                    Seja notificado!
                  </h2>
                </div>

                <div className="pb-4 pt-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Ao se inscrever, você será lembrado de enviar seus
                    relatórios diários <br className="hidden md:block" /> e
                    receberá dicas personalizadas!
                  </p>
                </div>

                {error && (
                  <div className="text-center mb-2">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register("email")} />
                    Receber via Email
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register("whatsapp")} />
                    Receber via WhatsApp
                  </label>

                  {escolhaNula && (
                    <div
                      role="status"
                      aria-live="polite"
                      aria-atomic="true"
                      className="px-4 pt-4"
                    >
                      <p className="text-red-600 text-sm font-bold">
                        Selecione pelo menos um canal: Email e/ou WhatsApp!
                      </p>
                    </div>
                  )}

                  <ButtonWrapper
                    type="submit"
                    className="mt-4 bg-secondary text-white dark:bg-secondary border-2"
                  >
                    Inscrever-se
                  </ButtonWrapper>
                </div>
              </form>
            )}
          </>
        )}
      </CardWrapper>
    </Wrapper>
  );
}
