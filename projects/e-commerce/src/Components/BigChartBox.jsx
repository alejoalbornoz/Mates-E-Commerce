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
    Mates: 4000,
    Termos: 2400,
    Bombillas: 2400,
  },
  {
    name: "Lunes",
    Mates: 3000,
    Termos: 1398,
    Bombillas: 2210,
  },
  {
    name: "Martes",
    Mates: 2000,
    Termos: 9800,
    Bombillas: 2290,
  },
  {
    name: "Miercoles",
    Mates: 2780,
    Termos: 3908,
    Bombillas: 2000,
  },
  {
    name: "Jueves",
    Mates: 1890,
    Termos: 4800,
    Bombillas: 2181,
  },
  {
    name: "Viernes",
    Mates: 2390,
    Termos: 3800,
    Bombillas: 2500,
  },
  {
    name: "Sabado",
    Mates: 3490,
    Termos: 4300,
    Bombillas: 2100,
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