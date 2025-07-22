import ChartBox from "../../Components/ChartBox.jsx";
import TopBox from "../../Components/TopBox.jsx";
import BarChartBox from "../../Components/BarChartBox.jsx";
import BigChartBox from "../../Components/BigChartBox.jsx";
import PieChartBox from "../../Components/PieChartBox.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

import "./homeDashboard.css";

const HomeDashboard = () => {
  const [summary, setSummary] = useState({
    users: 0,
    products: 0,
    orders: 0,
    income: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/dashboard/summary",
          {
            withCredentials: true,
          }
        );
        setSummary(res.data);
      } catch (error) {
        console.error("Error al obtener resumen del dashboard:", error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox
          title="Usuarios"
          number={summary.users}
          color="dodgerblue"
          percentage={12}
          chartData={[
            { name: "Ene", users: 5 },
            { name: "Feb", users: 7 },
            { name: "Mar", users: 10 },
            { name: "Abr", users: 12 },
          ]} // opcional: backend futuro
          dataKey="users"
        />
      </div>
      <div className="box box3">
        <ChartBox
          title="Productos Vendidos"
          number={summary.products}
          color="orange"
          percentage={-8}
          chartData={[
            { name: "Ene", products: 4 },
            { name: "Feb", products: 10 },
            { name: "Mar", products: 6 },
            { name: "Abr", products: 2 },
          ]}
          dataKey="products"
        />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox
          title="Pedidos"
          number={summary.orders}
          color="crimson"
          percentage={9}
          chartData={[
            { name: "Ene", orders: 3 },
            { name: "Feb", orders: 6 },
            { name: "Mar", orders: 2 },
            { name: "Abr", orders: 6 },
          ]}
          dataKey="orders"
        />
      </div>
      <div className="box box6">
        <ChartBox
          title="Ingresos"
          number={`$${summary.income}`}
          color="green"
          percentage={15}
          chartData={[
            { name: "Ene", income: 200 },
            { name: "Feb", income: 550 },
            { name: "Mar", income: 400 },
            { name: "Abr", income: 550 },
          ]}
          dataKey="income"
        />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
    </div>
  );
};

export default HomeDashboard;
