import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteData } from "../../store/slices/dataSlices";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class DataDelete extends Component {
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
        <div className="w-3/4 h-full ">
          <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 m-16 ">
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
  // const ProdId = allData.data.length.toString();
  console.log(allData);
  return { allData };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, { deleteData })(DataDelete);
