import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./chart.css"

ChartJS.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend);

const Barchart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "hello",
        data: [650, 950, 780, 400, 1000, 580, 820, 370, 820, 620, 940, 610],
       
        backgroundColor: "#8576FF",
        borderColor: "#8576FF",
        
        // height: "100%",
      },
    ],
  };
  const options = { };

  return (
    <div className="">
      <Bar
        style={{ border: "1px solid #F2F2F7" }}
        data={data}
        options={options}
      ></Bar>
    </div>
  );
};

export default Barchart;
