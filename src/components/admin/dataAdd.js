import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export class DataAdd extends Component {
  state = {
    Point: "",
    Name: "",
    Stok: "",
    Id: "",
    img: "",
    Category: "",
    Price: NaN,
    Features: "",
  };

  componentDidUpdate(pP, state) {
    state = state;
    console.log(this.state.Name);
  }
  createProd(event) {
    this.value = event.target.value;
    this.setState({ Name: this.value });
    console.log(this.value);
  }

  render() {
    return (
      <div className="w-full flex flex-cols-2">
        <div className="flex flex-col justify-between py-16 w-1/4 h-[30rem] items-center border-b-2 ">
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
        <div className="w-3/4 h-full border-x border-b flex flex-cols-2 justify-start items-center">
          <div className=" w-full h-full border-r flex flex-col justify-start items-center gap-8 p-4">
            <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-center place-items-center ">
              <p className="font-bold pt-2 items-center ">Name</p>
              <input
                onChange={this.createProd.bind(this)}
                className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                placeholder="Lenovo - 15ACH6"
              ></input>
            </div>
            <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
              <p className="font-bold pt-2 items-center ">Id</p>
              <input
                className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                placeholder="35"
              ></input>
            </div>
            <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
              <p className="font-bold pt-2 items-center ">Category</p>
              <input
                className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                placeholder="Notebook"
              ></input>
            </div>
            <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
              <p className="font-bold pt-2 items-center ">Price</p>
              <input
                className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                placeholder="17.199"
              ></input>
            </div>
            <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
              <p className="font-bold pt-2 items-center ">Point</p>
              <input
                className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                placeholder="6.8"
              ></input>
            </div>
          </div>
          <div className=" w-full h-full flex flex-col  items-center gap-4 p-4 ">
            <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-start place-items-center ">
              <p className="font-bold pt-2 items-center ">Stok</p>
              <input
                className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                placeholder="Stokta var"
              ></input>
            </div>
            <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-4  justify-center place-items-center ">
              <p className="font-bold pt-2 items-center ">Image</p>
              <input
                className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                placeholder="https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-03-29t124602562-a1413f-7ff531.jpg"
              ></input>
            </div>
            <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-center place-items-center ">
              <p className="font-bold pt-2 items-center ">Features</p>
              <textarea
                rows="4"
                cols="50"
                className="w-3/4 font-semibold h-[180px] border-2 rounded-2xl pt-2 m-4 pl-2"
                placeholder="NVIDIA® GeForce RTX™ 30 Serisi Dizüstü Bilgisayar GPU-ları,"
              ></textarea>
            </div>
            <div className="flex w-3/4 flex-col mt-8 mb-6    justify-center place-items-center ">
              <button className="w-3/4 h-14 rounded-2xl bg-[#f79b21] hover:shadow-2xl font-bold ">
                ADD PROD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DataAdd);
