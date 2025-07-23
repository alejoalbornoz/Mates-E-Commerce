import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.css";

// Datos estáticos por ahora
const data = [
  { name: "Mates", value: 400, color: "#0088FE" },
  { name: "Yerbas", value: 300, color: "#00C49F" },
  { name: "Bombillas", value: 300, color: "#FFBB28" },
  { name: "Termos", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="pieChartBox">
      <h1>Ventas por categoría</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
              formatter={(value, name) => [`${value}`, `${name}`]}
            />
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{((item.value / total) * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
