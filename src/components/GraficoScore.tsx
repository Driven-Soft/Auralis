import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface RegistroAPI {
  idRegistro: number;
  idUsuario: number;
  hidratacao: number;
  tempo_sol: number;
  nivel_estresse: number;
  sono: number;
  tempo_tela: number;
  trabalho_horas: number;
  atividade_fisica: number;
  score: number;
  dataRegistro: string;
}

interface GraficoScoreProps {
  registros: RegistroAPI[];
}

export default function GraficoScore({ registros }: GraficoScoreProps) {
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const dados = registros.map((item) => {
    const data = new Date(item.dataRegistro);
    return {
      dia: dias[data.getDay()],
      valor: item.score,
    };
  });

  return (
    <div className="w-full h-64 mr-6">
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" interval={0} tick={{ fontSize: 12 }} padding={{ left: 0, right: 0 }} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
