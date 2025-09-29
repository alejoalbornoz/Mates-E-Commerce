import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import "./bigChartBox.css";

const BigChartBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/dashboard/revenue-by-product",
          {
            withCredentials: true,
          }
        );
        console.log("Datos recibidos:", res.data);
        setData(res.data);
      } catch (error) {
        console.error("Error al traer ingresos diarios:", error);
      }
    };

    fetchRevenueData();
  }, []);

  return (
    <div className="bigChartBox">
      <h1>Ingresos por Producto</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#9cd884ff"
              fill="#9cd884ff"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div> 
    </div>
  );
};

export default BigChartBox;
