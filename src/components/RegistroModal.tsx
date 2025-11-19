import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CardWrapper from "./CardWrapper";
import LabelWrapper from "./LabelWrapper";
import ButtonWrapper from "./ButtonWrapper";
import type { RegistroFormType } from "../types/registroType";
import { useUser } from "../context/User/useUser";
import { useApi } from "../context/Api/useApi";
import { Check } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const RegistroModal = ({ open, onClose, onSuccess }: ModalProps) => {
  const { register, handleSubmit } = useForm<RegistroFormType>();
  const { user } = useUser();
  const { apiUrl } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [recordId, setRecordId] = useState<number | null>(null);
  const [deleted, setDeleted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [dailyLimitReached, setDailyLimitReached] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsLoading(false);
      setRecordId(null);
      setShowError(false);
      setDailyLimitReached(false);
      setDeleted(false);
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = async (data: RegistroFormType) => {
    try {
      setIsLoading(true);
      setShowError(false);
      setDailyLimitReached(false);

      const payload: RegistroFormType = {
        idUsuario: user?.id_usuario ?? 0,
        hidratacao: data.hidratacao,
        tempo_sol: data.tempo_sol,
        nivel_estresse: data.nivel_estresse,
        sono: data.sono,
        tempo_tela: data.tempo_tela,
        trabalho_horas: data.trabalho_horas,
        atividade_fisica: data.atividade_fisica,
      };

      const res = await fetch(`${apiUrl}registros`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Erro ao enviar registro:", res.status, text);
        // If server indicates a record was already created today, show user-facing message
        if (
          res.status === 409 ||
          (typeof text === "string" &&
            text.includes("REGISTRO_JA_REALIZADO_HOJE"))
        ) {
          setDailyLimitReached(true);
          return;
        }

        return;
      }

      // parse response to get created record id
      const json = await res.json().catch(() => null);
      if (json && typeof json.id === "number") {
        setRecordId(json.id);
        console.log("Registro diário enviado, id:", json.id);
      } else {
        console.log("Registro diário enviado (sem id retornado):", payload);
      }
    } catch (err) {
      console.error("Erro de rede ao enviar registro:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const onError = (errs: unknown) => {
    setShowError(true);
    setIsLoading(false);
    console.debug("Validation errors:", errs);
  };

  const handleDelete = async () => {
    if (!recordId) return;

    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}registros/${recordId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.error(
          "Erro ao deletar registro:",
          res.status,
          await res.text()
        );
        return;
      }

      console.log("Registro deletado:", recordId);
      setRecordId(null);
      setDeleted(true);
    } catch (err) {
      console.error("Erro de rede ao deletar registro:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return createPortal(
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      }
      onClick={onClose}
    >
      <CardWrapper
        onClick={(e) => e.stopPropagation()}
        className="flex-col p-6 mx-2"
      >
        {deleted ? (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-bold text-green-600 dark:text-green-500">
              Seu último registro foi deletado!
            </h2>
            <Check size={48} className="text-green-600 dark:text-green-400" />
            <p className="text-base text-center text-gray-600 dark:text-gray-200">
              Seu registro foi removido com sucesso.
            </p>
            <div className="flex flex-row gap-4  w-full md:w-[90%]">
              <button
                type="button"
                onClick={() => {
                  onSuccess?.();
                  onClose();
                }}
                disabled={isLoading}
                className="flex-1 px-4 py-1 sm:py-3 bg-gray-600 border-gray-500 border hover:bg-gray-500 cursor-pointer transition-all duration-200 ease-in-out text-white rounded-lg disabled:opacity-60"
              >
                {isLoading ? "Processando..." : "Fechar"}
              </button>
            </div>
          </div>
        ) : recordId ? (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-bold text-green-600 dark:text-green-500">
              Registro criado com sucesso!
            </h2>
            <Check size={48} className="text-green-600 dark:text-green-400" />
            <p className="text-base text-center text-gray-600 dark:text-gray-200">
              Escreveu algo errado? Clique no botão abaixo para deletar seu
              último registro!
            </p>
            <p className="text-base text-center text-gray-600 dark:text-gray-200">
              Ou clique no botão "fechar" para sair sem deletar.
            </p>
            <div className="flex flex-row gap-4  w-full md:w-[90%]">
              <button
                type="button"
                onClick={handleDelete}
                disabled={isLoading}
                className="flex-1 px-4 py-1 sm:py-3 bg-red-600 hover:bg-red-500 border-red-400 border cursor-pointer transition-all duration-200 ease-in-out text-white rounded-lg disabled:opacity-60"
              >
                {isLoading ? "Processando..." : "Deletar registro"}
              </button>
              <button
                type="button"
                onClick={() => {
                  onSuccess?.();
                  onClose();
                }}
                disabled={isLoading}
                className="flex-1 px-4 py-1 sm:py-3 bg-gray-600 border-gray-500 border hover:bg-gray-500 cursor-pointer transition-all duration-200 ease-in-out text-white rounded-lg disabled:opacity-60"
              >
                {isLoading ? "Processando..." : "Fechar"}
              </button>
            </div>
          </div>
        ) : dailyLimitReached ? (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-bold text-red-600 dark:text-red-500">
              Não é possível fazer mais de um registro por dia!
            </h2>
            <p className="text-base text-center text-gray-600 dark:text-gray-200">
              Você já realizou um registro hoje.
            </p>

            <div className="flex flex-row gap-4 w-full md:w-[90%]">
              <ButtonWrapper
                type="button"
                onClick={() => {
                  setDailyLimitReached(false);
                  onClose();
                }}
              >
                Voltar
              </ButtonWrapper>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1 text-left w-full mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Registro diário
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Registre suas métricas de bem-estar do dia
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="w-full space-y-4"
            >
              {showError && (
                <div className="w-full">
                  <p className="text-sm text-red-600">
                    Preencha todos os dados para enviar!
                  </p>
                </div>
              )}
              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col justify-between">
                  <LabelWrapper>Hidratação (ml)</LabelWrapper>
                  <input
                    type="number"
                    {...register("hidratacao", { required: true })}
                    className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ex.: 2000"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <LabelWrapper>Tempo de sol (min)</LabelWrapper>
                  <input
                    type="number"
                    {...register("tempo_sol", { required: true })}
                    className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ex.: 30"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <LabelWrapper>Nível de estresse (1-10)</LabelWrapper>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    {...register("nivel_estresse", { required: true })}
                    className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ex.: 5"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <LabelWrapper>Sono (horas)</LabelWrapper>
                  <input
                    type="number"
                    step="0.1"
                    {...register("sono", { required: true })}
                    className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ex.: 7.5"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <LabelWrapper>Tempo de trabalho (horas)</LabelWrapper>
                  <input
                    type="number"
                    step="0.1"
                    {...register("trabalho_horas", { required: true })}
                    className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ex.: 8"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <LabelWrapper>Tempo de atividade física (min)</LabelWrapper>
                  <input
                    type="number"
                    {...register("atividade_fisica", { required: true })}
                    className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ex.: 45"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <LabelWrapper>Tempo de tela (horas)</LabelWrapper>
                  <input
                    type="number"
                    step="0.1"
                    {...register("tempo_tela", { required: true })}
                    className="text-gray-800 px-3 dark:text-white w-full input input-bordered bg-blue-50 p-2 rounded-lg border placeholder:font-light dark:placeholder:text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Ex.: 3.5"
                  />
                </div>
              </section>

              <div className="flex items-center justify-center w-full gap-2">
                <div className="flex-1">
                  <ButtonWrapper onClick={onClose} type="button">
                    Cancelar
                  </ButtonWrapper>
                </div>

                <div className="flex-1">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-3 cursor-pointer hover:scale-103 hover:bg-blue-500 transition-all duration-200 ease-in-out bg-blue-600 text-white rounded-lg w-full disabled:opacity-60"
                  >
                    {isLoading ? "Enviando..." : "Enviar registro"}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </CardWrapper>
    </div>,
    document.body
  );
};

export default RegistroModal;
