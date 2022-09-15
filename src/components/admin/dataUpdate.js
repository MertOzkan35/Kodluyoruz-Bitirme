import React, { Component } from "react";
import { connect } from "react-redux";
import { updateData } from "../../store/slices/dataSlices";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class DataUpdate extends Component {
  state = {
    Point: "",
    Name: "",
    Stok: "",
    Id: "",
    img: "",
    Category: "",
    Price: 0,
    Features: "",
  };
  componentDidUpdate(pP, state) {
    state = state;
    console.log(this.state);
  }
  createProdName(event) {
    this.setState({ Name: event.target.value });
  }
  createProdId(event) {
    this.setState({ Id: event.target.value });
  }

  createProdStok(event) {
    this.setState({ Stok: event.target.value });
  }
  createProdFeatures(event) {
    this.setState({ Features: event.target.value });
  }
  createProdPrice(event) {
    const toNumber = event.target.value;
    this.setState({ Price: Number(toNumber) });
  }
  createProdCategory(event) {
    this.setState({ Category: event.target.value });
  }
  createProdImage(event) {
    this.setState({ img: event.target.value });
  }
  createProdPoint(event) {
    this.setState({ Point: event.target.value });
  }
  render() {
    return (
      <div className="w-full grid gird-col">
        <div className="flex flex:row  text-xs sm:text-base mt-2 py-16 gap-4 w-full justify-center  h-full  px-2 items-center border-2 ">
          <Link
            to="/admin/add"
            className="w-1/6 text-center  h-12 flex justify-center items-center font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            Ürün Ekle
          </Link>
          <Link
            to="/admin/delete"
            className="w-1/6 text-center  h-12 flex justify-center items-center font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            Ürün Sil
          </Link>
          <Link
            to="/admin/update"
            className="w-1/6 text-center  h-12 flex justify-center items-center font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            Ürün Güncelle
          </Link>
          <Link
            to="/admin/salesdata"
            className="w-1/6 text-center  h-12 flex justify-center items-center font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
          >
            Satış Bilgileri
          </Link>
        </div>
        <div className="w-full h-full grid grid-cols-1 sm:grid sm:grid-cols-2 mt-4 justify-center items-center">
          {this.props.allData &&
            this.props.allData.map((element, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col justify-center items-center mt-2"
                >
                  <p className="font-semibol text-xl my-2">{element.Name}</p>
                  <p className="font-semibol  mb-2"> Id = {element.Id}</p>
                  <div className="w-full sm:w-3/4 h-full border-x border-t flex flex-cols-2  justify-between ">
                    <div className=" w-full h-full border-r flex flex-col justify-between items-center gap-8  p-4">
                      <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6   justify-center place-items-center ">
                        <p className="font-bold pt-2 items-center ">Name</p>
                        <textarea
                          onChange={this.createProdName.bind(this)}
                          className="w-3/4  font-semibold h-16 pt-2 border-2 rounded-2xl m-4 pl-2"
                          placeholder={element.Name}
                        ></textarea>
                      </div>
                      <div className="flex w-3/4 flex-col border-2 rounded-2xl mt   justify-center place-items-center ">
                        <p className="font-bold pt-2 items-center ">Id</p>
                        <p className=" pt-2  text-xs items-center ">
                          'placeholder ile aynı olmalı'
                        </p>
                        <textarea
                          onChange={this.createProdId.bind(this)}
                          className="w-3/4  font-semibold h-16 pt-2 border-2 rounded-2xl m-4 pl-2"
                          placeholder={element.Id}
                        ></textarea>
                      </div>

                      <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                        <p className="font-bold pt-2 items-center ">Category</p>
                        <textarea
                          onChange={this.createProdCategory.bind(this)}
                          className="w-3/4 font-semibold h-16 pt-2 border-2 rounded-2xl m-4 pl-2"
                          placeholder={element.Category}
                        ></textarea>
                      </div>
                      <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                        <p className="font-bold pt-2 items-center ">Price</p>
                        <textarea
                          type="number"
                          onChange={this.createProdPrice.bind(this)}
                          className="w-3/4 font-semibold h-16 pt-2 border-2 rounded-2xl m-4 pl-2"
                          placeholder={element.Price}
                        ></textarea>
                      </div>
                    </div>
                    <div className=" w-full h-full flex flex-col  items-center gap-4 p-4 ">
                      <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-start place-items-center ">
                        <p className="font-bold pt-2 items-center ">Stok</p>
                        <textarea
                          onChange={this.createProdStok.bind(this)}
                          className="w-3/4 font-semibold h-16 pt-2 border-2 rounded-2xl m-4 pl-2"
                          placeholder={element.Stok}
                        ></textarea>
                      </div>
                      <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                        <p className="font-bold pt-2 items-center ">Point</p>
                        <textarea
                          onChange={this.createProdPoint.bind(this)}
                          className="w-3/4 font-semibold h-16 pt-2 border-2 rounded-2xl m-4 pl-2"
                          placeholder={element.Point}
                        ></textarea>
                      </div>
                      <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-4  justify-center place-items-center ">
                        <p className="font-bold pt-2 items-center ">Image</p>
                        <textarea
                          onChange={this.createProdImage.bind(this)}
                          className="w-3/4 font-semibold h-16 pt-2 border-2 rounded-2xl m-4 pl-2"
                          placeholder={element.img}
                        ></textarea>
                      </div>
                      <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-center place-items-center ">
                        <p className="font-bold pt-2 items-center ">Features</p>
                        <textarea
                          onChange={this.createProdFeatures.bind(this)}
                          rows="4"
                          cols="50"
                          className="w-3/4 font-semibold h-[180px] border-2 rounded-2xl pt-2 m-4 pl-2"
                          placeholder={element.Features}
                        ></textarea>
                      </div>
                      <div className="flex w-3/4 flex-col mt-8 mb-6    justify-center place-items-center "></div>
                    </div>
                  </div>
                  <div className="flex w-3/4 justify-center border-b-2 border-x pt-4  mb-16 items-center">
                    <Link
                      to={`/prod/${element.Id}`}
                      onClick={() =>
                        this.props.updateData({
                          product: this.state,
                          index: key,
                        })
                      }
                      className="w-1/2 h-14  rounded-2xl flex mb-8    text-center justify-center items-center bg-[#f79b21] hover:shadow-2xl font-bold "
                    >
                      Ürünü Güncelle
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  const allData = data.data.data;
  console.log(allData);
  return { allData };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, { updateData })(DataUpdate);
