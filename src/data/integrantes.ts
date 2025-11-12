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
  descricao: string;
  email:string;
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
    descricao: "Desenvolvedor apaixonado por criar experiências web que impactam positivamente a vida das pessoas."
  },
  {
    nome: "Max Hayashi Batista",
    rm: "563717",
    img: maxImg,
    git: "https://github.com/y3llowhusky",
    capacitacao: "Desenvolvedor Back End",
    linkedIn: "https://www.linkedin.com/in/max-hayashi-batista-572622356/",
    email: "hayashibatista@gmail.com",
    descricao: "Especialista em arquitetura de banco de dados e back-end, grande contribuinte à comunidade de código aberto."
  },
  {
    nome: "Henrique Cunha Torres",
    rm: "565119",
    img: henriqueImg,
    git: "https://github.com/HenriqueCTorres",
    capacitacao: "Desenvolvedor Back End & IA",
    linkedIn: "https://www.linkedin.com/in/henrique-cunha-torres-44940634a/",
    email: "henriquect08@gmail.com",
    descricao: "Especialista em análise de dados de saúde e criação de métricas significativas para qualidade de vida."
  }
];