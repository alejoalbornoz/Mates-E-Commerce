import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.css";

const data = [
  {
    name: "Domingo",
    Mates: 40000,
    Termos: 24000,
    Bombillas: 24000,
  },
  {
    name: "Lunes",
    Mates: 30000,
    Termos: 13980,
    Bombillas: 22100,
  },
  {
    name: "Martes",
    Mates: 20000,
    Termos: 98000,
    Bombillas: 22900,
  },
  {
    name: "Miercoles",
    Mates: 27800,
    Termos: 39080,
    Bombillas: 20000,
  },
  {
    name: "Jueves",
    Mates: 18900,
    Termos: 48000,
    Bombillas: 21810,
  },
  {
    name: "Viernes",
    Mates: 23900,
    Termos: 38000,
    Bombillas: 25000,
  },
  {
    name: "Sabado",
    Mates: 34900,
    Termos: 43000,
    Bombillas: 21000,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Ingresos por Producto</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Bombillas"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Termos"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Mates"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;