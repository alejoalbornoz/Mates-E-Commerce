import ChartBox from "../../Components/ChartBox.jsx";
import TopBox from "../../Components/TopBox.jsx";
import BarChartBox from "../../Components/BarChartBox.jsx";

import {
  chartBoxUser,
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxProduct,
  barChartBoxRevenue,
  barChartBoxVisit
} from "../../data/data";

import "./homeDashboard.css";

const HomeDashboard = () => {
  return (
    <div className="home">
      <div className="box box1">
       <TopBox/>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default HomeDashboard;
