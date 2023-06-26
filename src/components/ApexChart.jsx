import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ()=>{
    const data = {
        series: [
          {
            name: "Cricket",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
    
          {
            name: "Football",
            data: [48, 47, 55, 51, 69, 62, 19, 51, 98],
          },
        ],
    
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Product Trends by Month",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
            ],
          },
        },
      };
      return (
        <>
          <div>
            <ReactApexChart
              options={data.options}
              series={data.series}
              type="line"
              height={350}
            />
          </div>
        </>
      );
}

export default ApexChart;