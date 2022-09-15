import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeProds } from "../../store/slices/shoppingCartSlice";
import { deleteProds } from "../../store/slices/shoppingCartSlice";
import { clearProds } from "../../store/slices/shoppingCartSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomePage() {
  const [visibilityorder, setVisibilityOrder] = useState("hidden");
  const dispatch = useDispatch();
  const dataStore = useSelector((state) => state.data.data);

  const prodsData = useSelector((state) => state.prods.prods);

  const [data, setdata] = useState(dataStore);
  //console.log(data);
  const shoppingCart = (value) => {
    var value = [data.filter((item) => item.Id === value)];
    const lastProd = value[0][0];
    dispatch(changeProds({ lastProd }));
    setVisibilityOrder("hidden");
  };

  const deleteProd = (value) => {
    var value2 = [data.filter((item) => item.Id === value)];
    const lastProd2 = value2[0][0];
    dispatch(deleteProds(`${lastProd2.Id}`));
    setVisibilityOrder("hidden");
  };

  const totalPrice = prodsData.reduce((a, v) => (a = a + v.lastProd.Price), 0);

  const order = () => {
    setVisibilityOrder("visible");
    dispatch(clearProds());
  };

  const prodName = (event) => {
    const name = event.toLowerCase();
    console.log(name);
    const filteredArray = dataStore.filter((item) =>
      item.Name.toLowerCase().includes(name)
    );
    setdata(filteredArray);
  };

  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="flex flex-col w-3/2 sm:w-3/4  border-r-2 ">
        <div className="flex w-full pb-6  flex-col sm:flex-row justify-between px-24 border-b-2 ">
          <p className="text-[#001d48]  text-2xl font-bold mt-[52px]   hover:text-[#f79b21]">
            ALIŞVERİŞE BAŞLA!
          </p>
          <input
            onChange={(event) => prodName(event.target.value)}
            className="sm:w-1/3 w-full h-10 rounded-3xl border border-[#f79b21]  mt-12 pl-2  font-semibold "
            placeholder="Ürün Ara"
          ></input>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 m-16 ">
          {data &&
            data.map((element, key) => {
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
                      onClick={(e) => shoppingCart(`${element.Id}`)}
                      className="w-1/2  h-12 bg-[#fa9d28]  hover:border-2 rounded-2xl border font-bold"
                    >
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col items-center w-full sm:w-1/4 h-[full] ">
        <div className="c w-full items-center text-center font-bold mt-10 mb-6 pb-12 text-[#fa9d28] hover:text-black border-b-2 ">
          Sepetiniz
        </div>
        <div className={`pt-4`}>
          {prodsData &&
            prodsData.map((element, key) => {
              return (
                <div key={key} className="flex mb-12 ml-4 ">
                  <div className="w-1/2 h-24 ">
                    <img
                      className=" rounded-xl object-cover"
                      src={element.lastProd.img}
                    />
                  </div>
                  <div className="mb-8 mr-4  w-full text-center font-bold">
                    <p className="hover:text-[#fa9d28]">
                      {element.lastProd.Name}
                    </p>
                    <p className="text-[#001d48] text-center mt-2">
                      {element.lastProd.Price + ",00 TL"}
                    </p>
                    <button
                      onClick={(e) => deleteProd(`${element.lastProd.Id}`)}
                      className="w-24 items-center h-8 rounded-3xl mt-4 bg-[#fa9d28] hover:bg-[#B71D07] hover:border-2"
                    >
                      {" "}
                      Kaldır
                    </button>
                  </div>
                </div>
              );
            })}

          <div className="flex items-center justify-center">
            {totalPrice > 1 && (
              <div className="w-full border-t-2 flex flex-col items-center justify-center pt-8 font-bold  text-[#001d48]">
                <p className="text-center mb-2"> Toplam Tutar</p>
                <p className="text-center mb-6">
                  {" "}
                  {totalPrice.toFixed(0) + ",00 TL"}
                </p>
                <button
                  onClick={order}
                  className="   px-4  h-12 bg-[#fa9d28]  hover:border-2 rounded-2xl border font-bold"
                >
                  Alışverişi Bitir
                </button>
              </div>
            )}
          </div>
          <p
            className={` mt-10 text-center text-xl font-bold ${visibilityorder} text-[#207609] `}
          >
            Sipariş Verildi
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
