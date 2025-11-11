import { CircleQuestionMarkIcon } from "lucide-react";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";
import CardWrapper from "../components/CardWrapper";
import FaqCard from "../components/FaqCard";

const Faq = () => {
  return (
    <Wrapper>
      <section>
        <Hero
          icon={<CircleQuestionMarkIcon color="white" />}
          iconClassName="bg-linear-to-r from-primary to-secondary shadow-glow-blue"
          title="Perguntas Frequentes"
          text="Encontre respostas para as dúvidas mais comuns sobre o Auralis"
        />
      </section>

      <section>
        <CardWrapper className="flex-col w-[80%] mx-auto my-10">
          <div className="flex flex-col gap-4 px-4 py-2">
            <FaqCard
              titulo="Como é calculado o Score de bem-estar?"
              detalhes="O Score de Bem-Estar é calculado com base em seis métricas principais: sono (ideal 7-8h), estresse (escala 1-10), atividade física (mínimo 30min), hidratação (2-2.5L), tempo de tela (máximo 8h) e horas trabalhadas (ideal 8h). Cada métrica contribui para a pontuação final de 0 a 100."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="Como posso melhorar meu Score de bem-estar?"
              detalhes="Para melhorar seu Score de Bem-Estar, é importante focar em hábitos saudáveis, como dormir bem, gerenciar o estresse, praticar atividades físicas regularmente, manter-se hidratado, limitar o tempo de tela e equilibrar as horas trabalhadas."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="Com que frequência devo registrar minhas métricas?"
              detalhes="Recomendamos o registro diário, preferencialmente no final do dia. Isso permite uma visualização precisa das tendências e facilita a identificação de padrões no seu bem-estar ao longo do tempo."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="Meus dados são privados e seguros?"
              detalhes="Sim, totalmente. Todos os dados são armazenados de forma criptografada e você tem controle total sobre suas informações. Nunca compartilhamos dados pessoais com terceiros sem seu consentimento explícito."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="Posso usar o Auralis em dispositivos móveis?"
              detalhes="Sim! O Auralis é totalmente responsivo e funciona perfeitamente em smartphones, tablets e desktops. Você pode acessar sua conta de qualquer dispositivo com conexão à internet."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="O que significam as cores nas métricas?"
              detalhes="Verde indica que a métrica está em um nível saudável, amarelo sugere atenção (valores limítrofes) e vermelho indica que você deve focar em melhorar aquela área específica. As cores ajudam a identificar rapidamente onde você precisa dedicar mais atenção."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="Posso editar registros anteriores?"
              detalhes="Atualmente, os registros não podem ser editados após salvos para manter a integridade dos dados históricos. Recomendamos revisar as informações antes de salvar. Estamos trabalhando em uma funcionalidade de edição para versões futuras."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="Como posso interpretar as tendências no gráfico?"
              detalhes="O gráfico de evolução mostra seu Score de Bem-Estar ao longo dos últimos 7 dias. Tendências ascendentes indicam melhora geral, enquanto quedas sugerem áreas que precisam de atenção. Compare com suas métricas individuais para identificar causas específicas."
            />
            <span className="border-t border-2 rounded-lg border-gray-200 dark:border-gray-700" />
            <FaqCard
              titulo="Posso compartilhar meu progresso com outras pessoas?"
              detalhes="Você pode compartilhar informações específicas manualmente, mas não temos funcionalidade automática de compartilhamento no momento. Valorizamos sua privacidade e preferimos que você tenha controle total sobre o que compartilha."
            />
          </div>
        </CardWrapper>

        <section
          className="flex flex-col w-[80%] gap-4 mx-auto my-10 text-left justify-self-center rounded-lg border border-gray-200
         dark:border-gray-700 bg-[#f2f8fc] dark:bg-[#16304d]
         shadow-md p-6 hover:shadow-lg transition-all duration-200 ease-in-out"
        >
          <h3 className="text-gray-800 dark:text-gray-50 font-medium">
            Não encontrou sua resposta?
          </h3>
          <p className="text-gray-500 dark:text-gray-300 font-light">
            Entre em contato conosco através do email{" "}
            <a href="mailto:contato@auralis.com" className="text-blue-600 hover:underline">
              contato@auralis.com
            </a>{" "}
            e teremos prazer em ajudar!
          </p>
        </section>
      </section>
    </Wrapper>
  );
};

export default Faq;
