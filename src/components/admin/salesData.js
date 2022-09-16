import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import AdminPanel from "./adminPanel";

export class SalesData extends Component {
  state = {
    order: "weekly",
  };

  // hafta ay ve yıl için ayrı data tutuyoruz bu dataları dinamik yapıyoruz onclcik event yardımıyla değiştiriyoruz

  dataWeek = [
    ["Gün", " Haftalık Total Ciro"],
    [1, 52.524],
    [2, 126.924],
    [3, 254.4],
    [4, 321.712],
    [5, 400.912],
    [6, 430.412],
    [7, 508.312],
  ];

  dataMount = [
    ["Hafta", " Eylül Ayı Total Ciro"],
    [1, 370.312],
    [2, 500.924],
    [3, 1352.4],
    [4, 1860.312],
  ];
  dataYear = [
    ["Hafta", " Eylül İtibari İle Yıllık Total Ciro"],
    [1, 1512.312],
    [2, 3224.924],
    [3, 4400.4],
    [4, 6105.312],
    [5, 7662.312],
    [6, 9008.312],
    [7, 10504.312],
    [8, 12062.312],
    [9, 13041.312],
  ];
  options = {
    chart: {
      title: " Total Ciro Çizgi Grafiği",
      subtitle: "Bin TL olarak (TRY)",
    },
  };

  dataChange(val) {
    this.setState((prev) => ({ ...prev, order: val }));
  }
  render() {
    return (
      <div className="w-full grid gird-col ">
        <AdminPanel />
        <div className=" w-full h-full flex flex-col justify-center items-center mt-8 ">
          <div className="flex justify-center items-center m-8 border-b-2 w-full gap-8 pb-8">
            <button
              onClick={() => this.dataChange("weekly")}
              className=" w-1/6 px-4 py-2 rounded-xl bg-[#f79b21] font-bold  hover:shadow-2xl"
            >
              Haftalık
            </button>
            <button
              onClick={() => this.dataChange("monthly")}
              className=" w-1/6 px-4 py-2 rounded-xl bg-[#f79b21] font-bold  hover:shadow-2xl"
            >
              Aylık
            </button>
            <button
              onClick={() => this.dataChange("yearly")}
              className=" w-1/6 px-4 py-2 rounded-xl bg-[#f79b21] font-bold  hover:shadow-2xl"
            >
              Yıllık
            </button>
          </div>
          <div className=" w-4/5">
            <Chart
              chartType="Line"
              height="400px"
              data={
                this.state.order === "weekly"
                  ? this.dataWeek
                  : this.state.order === "monthly"
                  ? this.dataMount
                  : this.dataYear
              }
              options={this.options}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SalesData);
