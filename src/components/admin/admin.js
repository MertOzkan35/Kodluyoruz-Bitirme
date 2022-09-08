import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Admin extends Component {
  state = {
    adminPassword: "112234",
    inputValue: "",
    link: "/admin",
    value: false,
  };
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

  changeInput(event) {
    this.password = event.target.value;
    this.setState({ inputValue: event.target.value });
  }

  login() {
    if (this.state.inputValue == this.state.adminPassword) {
    } else {
      alert("ŞİFRE HATALI");
    }
  }
  render() {
    return (
      <div>
        <div className="w-full flex justify-center  items-center">
          <div className="mt-[100px] w-1/3 h-[350px] mb-12 rounded-2xl flex flex-col justify-between items-center bg-[#f79b21] bg-opacity-40 p-11 border-2 border-[#f79b21]">
            <p className="font-bold ">Admin Giriş Paneli </p>

            <div className="gap-4">
              <p className="text-[16px] w-54  gap-2  flex justify-center items-center font-semibold pb-4 text-center ">
                {" "}
                Şifre <img src={require("../images/key.png")} />{" "}
              </p>

              <input
                onChange={this.changeInput.bind(this)}
                type="password"
                className="w-[200px] h-10 rounded-2xl border-2 border-white pl-2 font-semibold "
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
