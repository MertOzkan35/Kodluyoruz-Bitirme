import React, { Component } from "react";
import { connect } from "react-redux";
import { addProds } from "../../store/slices/dataSlices";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { isLogin } from "../../store/slices/adminLogin";
import AdminPanel from "./adminPanel";

export class DataAdd extends Component {
  state = {
    Point: "",
    Name: "",
    Stok: "",
    Id: this.props.IdtoStirng,
    img: "",
    Category: "",
    Price: 0,
    Features: "",
  };

  // ıD DEĞERİNİ LastId = allData.data.length.toString(); ile dinamik yapıyoruz
  // bu statei payload olarak gönderiyoruz
  componentDidUpdate(pP, state) {
    state = state;
  }
  // sayfa açılınca state güncellemesi yapıyoruz
  //  her inputun değerini alıyoruz.
  createProdName(event) {
    this.setState({ Name: event.target.value });
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
        <AdminPanel />
        <div className=" w-full mt-4  h-full flex flex-col justify-center items-center">
          <div className="w-full sm:w-3/4 h-full border-2 flex flex-cols-2 justify-between ">
            <div className=" w-full h-full border-r flex flex-col justify-between items-center gap-8 p-4">
              <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6   justify-center place-items-center ">
                <p className="font-bold pt-2 items-center ">Name</p>
                <input
                  onChange={this.createProdName.bind(this)}
                  className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                  placeholder="Lenovo - 15ACH6"
                ></input>
              </div>

              <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                <p className="font-bold pt-2 items-center ">Category</p>
                <input
                  onChange={this.createProdCategory.bind(this)}
                  className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                  placeholder="Notebook"
                ></input>
              </div>
              <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                <p className="font-bold pt-2 items-center ">Price</p>
                <input
                  type="number"
                  onChange={this.createProdPrice.bind(this)}
                  className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                  placeholder="17.199"
                ></input>
              </div>
              <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                <p className="font-bold pt-2 items-center ">Point</p>
                <input
                  onChange={this.createProdPoint.bind(this)}
                  className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                  placeholder="6.8"
                ></input>
              </div>
            </div>
            <div className=" w-full h-full flex flex-col  items-center gap-4 p-4 ">
              <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-start place-items-center ">
                <p className="font-bold pt-2 items-center ">Stok</p>
                <input
                  onChange={this.createProdStok.bind(this)}
                  className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                  placeholder="Stokta var"
                ></input>
              </div>
              <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-4  justify-center place-items-center ">
                <p className="font-bold pt-2 items-center ">Image</p>
                <input
                  onChange={this.createProdImage.bind(this)}
                  className="w-3/4 font-semibold h-10 border-2 rounded-2xl m-4 pl-2"
                  placeholder="https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-03-29t124602562-a1413f-7ff531.jpg"
                ></input>
              </div>
              <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-center place-items-center ">
                <p className="font-bold pt-2 items-center ">Features</p>
                <textarea
                  onChange={this.createProdFeatures.bind(this)}
                  rows="4"
                  cols="50"
                  className="w-3/4 font-semibold h-[180px] border-2 rounded-2xl pt-2 m-4 pl-2"
                  placeholder="NVIDIA® GeForce RTX™ 30 Serisi Dizüstü Bilgisayar GPU-ları,"
                ></textarea>
              </div>
              <div className="flex w-3/4 flex-col mt-8 mb-6    justify-center place-items-center "></div>
            </div>
          </div>

          <Link
            to={`/prod/${this.props.IdtoStirng}`}
            onClick={() => this.props.addProds(this.state)}
            className="w-1/4 h-14 mt-6 rounded-2xl flex text-center justify-center items-center bg-[#f79b21] hover:shadow-2xl font-bold "
          >
            Ürünü Ekle
          </Link>
        </div>
      </div>
    );
  }
}

// reduxtan datayı çektiiğimiz kısım
function mapStateToProps(data) {
  const allData = data.data;
  const ProdId = allData.data.slice(-1);
  const findId = ProdId[0] && ProdId[0].Id;
  const IdtoNumber = Number(findId) + 1;
  const IdtoStirng = IdtoNumber.toString();
  console.log(IdtoStirng);
  return { IdtoStirng };
}

export default connect(mapStateToProps, { addProds })(DataAdd);
