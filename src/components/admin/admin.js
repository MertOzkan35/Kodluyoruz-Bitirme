import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { isLogin } from "../../store/slices/adminLogin";
// admin giriş sayfası
class Admin extends Component {
  state = {
    adminPassword: "112234",
    inputValue: "",
    link: "/admin",
    value: false,
  };
  // admin giriş şifresinin tutulduğu state
  componentDidUpdate(pP, state) {
    state = state;
    if (
      this.state.inputValue == this.state.adminPassword &&
      this.state.value === false
    ) {
      this.setState({ link: "/admin/paneli" });
      this.setState({ value: true });
    }
  }
  // stateti güncelleyip sifre doğru ise yönlendirme yapıyoruz.
  changeInput(event) {
    this.password = event.target.value;
    this.setState({ inputValue: event.target.value });
  }
  // inputa yazılan şifreyi alıyoruz
  login() {
    if (this.state.inputValue == this.state.adminPassword) {
      localStorage.setItem("adminPassword", true);
      this.props.isLogin(true);
    } else {
      alert("ŞİFRE HATALI");
    }
  }
  // şifre hatalı ise uyarı veriyoruz
  render() {
    return (
      <div>
        <div className="w-full flex justify-center  items-center">
          <div className="mt-[100px] w-3/5 sm:w-1/2 md:w-1/3 h-[350px] mb-12  rounded-2xl flex flex-col justify-between items-center bg-[#f79b21] bg-opacity-40 p-11 border-2 border-[#f79b21]">
            <p className="font-bold ">Admin Giriş Paneli </p>

            <div className="gap-4">
              <p className="text-[16px] w-54  gap-2  flex justify-center items-center font-semibold pb-4 text-center ">
                {" "}
                Şifre <img src={require("../images/key.png")} />{" "}
              </p>

              <input
                onChange={this.changeInput.bind(this)}
                type="password"
                className="w-full h-10 rounded-2xl border-2 border-white pl-2 font-semibold "
              ></input>
            </div>
            <Link to={`${this.state.link}`}>
              <button
                className="w-24 h-12 hover:border-0 border-2  bg-[#f79b21] rounded-full font-semibold "
                onClick={this.login.bind(this)}
              >
                Giriş Yap
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { isLogin })(Admin);
