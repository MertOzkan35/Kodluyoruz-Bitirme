import React, { Component } from "react";
import { connect } from "react-redux";
import { updateData } from "../../store/slices/dataSlices";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminPanel from "./adminPanel";

export class UpdateProd extends Component {
  id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  state = {
    Point: "",
    Name: "",
    Stok: "",
    Id: this.id,
    img: "",
    Category: "",
    Price: 0,
    Features: "",
  };
  componentDidUpdate(pP, state) {
    state = state;
  }
  ProdUpdate(event, key) {
    this.setState({ [key]: event });
  }

  render() {
    const selectedProd = this.props.allData.find((x) => x.Id === this.id);
    return (
      <div className="w-full grid gird-col">
        <AdminPanel />
        <div className="w-full h-full grid grid-cols-1  mt-4 justify-center items-center">
          <div className="flex flex-col justify-center  items-center mt-2">
            <p className="font-semibol text-xl my-2">
              {selectedProd && selectedProd.Name}
            </p>
            <div className="w-full sm:w-3/4 h-full border-x border-t flex flex-cols-2  justify-between ">
              <div className=" w-full h-full border-r flex flex-col justify-between items-center gap-8  p-4">
                <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6   justify-center place-items-center ">
                  <p className="font-bold pt-2 items-center ">Name</p>
                  <input
                    onChange={(event) =>
                      this.ProdUpdate(event.target.value, "Name")
                    }
                    className="w-3/4  font-semibold h-16  border-2 rounded-2xl m-4 pl-2"
                  ></input>
                </div>

                <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                  <p className="font-bold pt-2 items-center ">Category</p>
                  <input
                    onChange={(value) => this.ProdUpdate.bind(value, "Name")}
                    className="w-3/4 font-semibold h-16  border-2 rounded-2xl m-4 pl-2"
                  ></input>
                </div>
                <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                  <p className="font-bold pt-2 items-center ">Price</p>
                  <input
                    type="number"
                    onChange={(value) => this.ProdUpdate.bind(value, "Price")}
                    className="w-3/4 font-semibold h-16  border-2 rounded-2xl m-4 pl-2"
                  ></input>
                </div>
              </div>
              <div className=" w-full h-full flex flex-col  items-center gap-6 p-4 ">
                <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-6  justify-start place-items-center ">
                  <p className="font-bold pt-2 items-center ">Stok</p>
                  <input
                    onChange={(value) => this.ProdUpdate.bind(value, "Stok")}
                    className="w-3/4 font-semibold h-16  border-2 rounded-2xl m-4 pl-2"
                  ></input>
                </div>
                <div className="flex w-3/4 flex-col border-2 rounded-2xl  justify-center place-items-center ">
                  <p className="font-bold pt-2 items-center ">Point</p>
                  <input
                    onChange={(value) => this.ProdUpdate.bind(value, "Point")}
                    className="w-3/4 font-semibold h-16  border-2 rounded-2xl m-4 pl-2"
                  ></input>
                </div>
                <div className="flex w-3/4 flex-col border-2 rounded-2xl mt-4  justify-center place-items-center ">
                  <p className="font-bold pt-2 items-center ">Image</p>
                  <input
                    onChange={(value) => this.ProdUpdate.bind(value, "Image")}
                    className="w-3/4 font-semibold h-16  border-2 rounded-2xl m-4 pl-2"
                  ></input>
                </div>

                <div className="flex w-3/4 flex-col mt-8 mb-6    justify-center place-items-center "></div>
              </div>
            </div>
            <div className="flex w-3/4 justify-center border-b-2 border-x pt-4  mb-16 items-center">
              <div className="flex w-2/4 flex-col border-2 rounded-2xl mb-6  justify-center place-items-center ">
                <p className="font-bold pt-2 items-center ">Features</p>
                <textarea
                  onChange={(value) => this.ProdUpdate.bind(value, "Features")}
                  rows="4"
                  cols="50"
                  className="w-3/4 font-semibold h-[180px] border-2 rounded-2xl pt-2 m-4 pl-2"
                ></textarea>
              </div>
            </div>
            <div className="flex w-3/4 justify-center border-b-2 border-x pt-4  mb-16 items-center">
              <Link
                to="/admin/update"
                onClick={() => this.props.updateData(this.state)}
                className="w-1/2 h-14  rounded-2xl flex mb-8    text-center justify-center items-center bg-[#f79b21] hover:shadow-2xl font-bold "
              >
                Ürünü Güncelle
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  const allData = data.data.data;

  return { allData };
}

export default connect(mapStateToProps, { updateData })(UpdateProd);
