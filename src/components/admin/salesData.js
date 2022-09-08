import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class SalesData extends Component {
  render() {
    return (
      <div className="w-full flex flex-cols-2">
        <div className="flex flex-col justify-between py-16 w-1/4 h-[30rem] items-center border-2 ">
          <Link
            to="/admin/add"
            className="w-3/4 text-center pt-2 h-12 font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            ADD PROD
          </Link>
          <Link
            to="/admin/delete"
            className="w-3/4 text-center pt-2 h-12 font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            DELETE PROD
          </Link>
          <Link
            to="/admin/update"
            className="w-3/4 text-center pt-2 h-12 font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            UPDATE PROD
          </Link>
          <Link
            to="/admin/salesdata"
            className="w-3/4 text-center pt-2 h-12 font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            SALES INFO
          </Link>
        </div>
        <div className="w-3/4 h-72 bg-slate-500"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SalesData);
