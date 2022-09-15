import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteData } from "../../store/slices/dataSlices";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class DataDelete extends Component {
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
        <div className=" w-full  h-full mt-2 ">
          <div className=" grid grid-cols-1 justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 m-16 ">
            {this.props.allData &&
              this.props.allData.map((element, key) => {
                return (
                  <div
                    key={key}
                    className="w-full h-full border  p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl"
                  >
                    <Link key={key} to={`/prod/${element.Id}`}>
                      <p className="w-full text-[#4c4c4c] text-end font-bold">
                        {" "}
                        Kullanıcı Puanı : {element.Point}
                      </p>
                      <img
                        className=" rounded-xl object-cover"
                        src={element.img}
                      />

                      <p className="font-bold text-[#207609] text-center">
                        {element.Stok}
                      </p>
                      <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
                        {element.Name}
                      </p>
                      <p className="text-[#001d48] text-center text-xl font-bold mt-12">
                        {element.Price + ",00 TL"}
                      </p>
                    </Link>
                    <div className="w-full flex justify-center items-center pt-8">
                      <button
                        // onClick={(e) => shoppingCart(`${element.Id}`)}
                        onClick={() => this.props.deleteData(`${element.Id}`)}
                        className="w-1/2  h-12 bg-[#fa9d28]  hover:border-2 rounded-2xl border font-bold"
                      >
                        Ürünü Sil
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  const allData = data.data.data;
  // reduxtan datayı çekiyoruz map ile dönüyoruz
  console.log(allData);
  return { allData };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, { deleteData })(DataDelete);
// delete data içine payload gönderiyoruz
