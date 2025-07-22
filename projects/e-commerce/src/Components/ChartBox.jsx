import { Link } from "react-router";
import "./chartBox.css";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          Ver todo
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  background: "rgba(0,0,0,0.7)",
                  border: "none",
                  color: "white",
                  fontSize: "12px",
                }}
                labelStyle={{ display: "none" }}
                cursor={false}
                wrapperStyle={{ zIndex: 100 }}
                position={{ x: 10, y: 10 }}
              />

              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration"> Este mes</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
