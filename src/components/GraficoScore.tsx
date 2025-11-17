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
  const dados = registros
    .slice()
    .sort(
      (a, b) =>
        new Date(a.dataRegistro).getTime() - new Date(b.dataRegistro).getTime()
    )
    .map((item) => {
      const data = new Date(item.dataRegistro);
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      return {
        dia: `${dia}/${mes}`,
        valor: item.score,
      };
    });

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={dados} margin={{ right: 16,  left: -26}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="dia"
            interval={0}
            tick={{ fontSize: 12 }}
          />
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
