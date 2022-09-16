import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { isLogin } from "../../store/slices/adminLogin";

export class AdminPanel extends Component {
  clearAdminFromLocalStorge() {
    localStorage.removeItem("adminPassword");
  }
  // bu sayfayı yönlendirme sayfası olarak kullanlıyoruz
  render() {
    return (
      <div className="w-full">
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
          <Link
            to="/admin"
            className="w-1/6 text-center  h-12 flex justify-center items-center font-bold rounded-2xl border-2 bg-[#f79b21] hover:shadow-2xl "
            onClick={() => {
              this.props.isLogin(false);
              this.clearAdminFromLocalStorge();
            }}
          >
            Panelden Çıkış
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { isLogin })(AdminPanel);
