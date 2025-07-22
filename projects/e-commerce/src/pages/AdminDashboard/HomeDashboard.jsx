import ChartBox from "../../Components/ChartBox.jsx";
import TopBox from "../../Components/TopBox.jsx";
import BarChartBox from "../../Components/BarChartBox.jsx";
import BigChartBox from "../../Components/BigChartBox.jsx";
import PieChartBox from "../../Components/PieChartBox.jsx";

import {
  chartBoxUser,
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxProduct,
} from "../../data/data";

import "./homeDashboard.css";

const HomeDashboard = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
    </div>
  );
};

export default HomeDashboard;
