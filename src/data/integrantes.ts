import felipeImg from "../assets/images/photos/felipe.png";
import maxImg from "../assets/images/photos/max.png";
import henriqueImg from "../assets/images/photos/henrique.png";

export interface Integrante {
  rm: string;
  nome: string;
  img: string;
  git: string;
  capacitacao: string;
  linkedIn: string;
  email: string;
  descricao: string;
  descricao_detalhe: string;
  habilidades: Array<string>;
}

export const integrantes: Integrante[] = [
  {
    nome: "Felipe Bezerra Beatrici",
    rm: "564723",
    img: felipeImg,
    git: "https://github.com/FelipeBeatriz",
    capacitacao: "Desenvolvedor Full Stack",
    linkedIn: "https://www.linkedin.com/in/felipe-beatrici",
    email: "felipe.beatriz199@gmail.com",
    descricao:
      "Desenvolvedor apaixonado por criar experiências web que impactam positivamente a vida das pessoas.",
    descricao_detalhe:
      "Sou desenvolvedor com experiência prática no desenvolvimento de projetos que unem tecnologia e propósito, sempre voltados para a solução de problemas reais. Minha stack técnica contempla React, JavaScript, TypeScript, Java, Tailwind CSS, SQL, entre outras tecnologias que utilizo para criar soluções modernas e escaláveis. Estou sempre em busca de evoluir minhas habilidades e acompanhar as tendências do setor, mantendo-me alinhado às inovações e às demandas do mercado de tecnologia.",
    habilidades: [
      "UI/UX Design",
      "Typescript + React",
      "Java",
      "Arquitetura de Sistemas",
      "REST APIs",
    ],
  },
  {
    nome: "Max Hayashi Batista",
    rm: "563717",
    img: maxImg,
    git: "https://github.com/y3llowhusky",
    capacitacao: "Desenvolvedor Back End",
    linkedIn: "https://www.linkedin.com/in/max-hayashi-batista-572622356/",
    email: "hayashibatista@gmail.com",
    descricao:
      "Especialista em arquitetura de banco de dados e back-end, grande contribuinte à comunidade de código aberto.",
    descricao_detalhe:
      "Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, apaixonado por tecnologia, inovação e automação para o varejo. Atuo em projetos que unem desenvolvimento de software, gestão e impacto social, com foco em transformar ideias em soluções práticas. Tenho experiência no desenvolvimento de projetos reais como o SmartEAN e o Hidralerta. Já atuei em projetos de automação junto à empresa da minha família, aplicando tecnologia para otimizar processos comerciais. Além da área técnica, busco constante evolução em gestão e liderança.",
    habilidades: [
      "Python",
      "Banco de Dados Oracle",
      "Integração com Banco",
      "Engenharia de Código",
      "Lógica de Programação",
    ],
  },
  {
    nome: "Henrique Cunha Torres",
    rm: "565119",
    img: henriqueImg,
    git: "https://github.com/HenriqueCTorres",
    capacitacao: "Desenvolvedor Back End & IA",
    linkedIn: "https://www.linkedin.com/in/henrique-cunha-torres-44940634a/",
    email: "henriquect08@gmail.com",
    descricao:
      "Especialista em análise de dados de saúde e criação de métricas significativas para qualidade de vida.",
    descricao_detalhe:
      "Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, apaixonado por tecnologia e sempre em busca de novos aprendizados. Atualmente me desenvolvo como Dev Full Stack, com foco em criar soluções práticas, funcionais e que gerem impacto positivo. Tenho experiência com C# / .NET e Java, desenvolvendo APIs e sistemas com foco em organização e boas práticas. Também estudo bancos de dados relacionais (SQL / Oracle) e integração entre aplicações. Utilizo Git e GitHub para versionamento e trabalho em equipe. Tenho contato com conceitos de DevOps e Cloud Computing (Azure, IBM Cloud) e busco aprimorar meus conhecimentos nessa área.",
    habilidades: ["C#", ".NET", "Java", "Python", "Typescript"],
  },
];
