import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeProds } from "../../store/slices/shoppingCartSlice";
import { useParams } from "react-router-dom";

function Prod0() {
  // ürünleri dinamik olarak bu sayfada yayınlıyoruz
  const { id } = useParams();
  // dinamik sayfa için useParams kullanıyoruz
  const [visibilityorder, setVisibilityOrder] = useState("hidden");
  const login = useSelector((state) => state.MainData.login);
  const dispatch = useDispatch();
  const dataStore = useSelector((state) => state.data.data);
  const [data, setdata] = useState(dataStore);
  function shoppingCart(value) {
    //  ürünü sepete ekleme için kullandığımız fonksyon
    var value = [data.filter((item) => item.Id === value)];
    const lastProd = value[0][0];

    if (login.payload.length > 4) {
      return dispatch(changeProds({ lastProd })), setVisibilityOrder("visible");
    }
    // ürünü sepete eklemek için girş yapman gerekir şartı koyuyoruz
    return alert("Giriş yapmanız gerekmetedir.");
  }

  const selectedProd = data.find((x) => x.Id === id);
  // sayfayı, ürünlerin ıd numarasını temel alarak  bastırıyoruz
  return (
    <div className="flex flex-col">
      <div className="w-full h-[100px]  bg-[#e8e8e8] font-semibold text-2xl text-[#1e273a] mt-2  flex  pb-2  items-end justify-center">
        {selectedProd.Category}
      </div>
      <div className="flex  flex-col sm:flex-row w-full h-full  gap-4 justify-center items-center my-24">
        <div className="w-3/4 sm:w-1/5 h-full border-2 flex-col ">
          <img
            className=" rounded-xl object-cover"
            src={selectedProd && selectedProd.img}
          />
          <p className="text-center text-2xl font-bold text-[#0F6E0E] mt-12">
            {selectedProd && selectedProd.Stok}
          </p>
          <div className="w-full flex flex-col justify-center mt-12 items-center pt-8">
            <button
              onClick={(e) =>
                shoppingCart(selectedProd && `${selectedProd.Id}`)
              }
              className="w-1/2 mb-8  h-12 bg-[#fa9d28]  hover:border-2 rounded-2xl border font-bold"
            >
              Sepete Ekle
            </button>
            <p
              className={` text-[#0f6e0e] ${visibilityorder}  font-bold mt-8 `}
            >
              {" "}
              Sepete Eklendi
            </p>
          </div>
        </div>
        <div className="w-3/4 sm:w-2/5 h-full border-2   flex flex-col ">
          <div className="flex flex-col justify-start items-center text-center text-xl sm:text-4xl px-3 sm:pl-8 pt-8 pb-12 font-bold border-b-2 ">
            <p className="hover:text-[#f78501]">
              {selectedProd && selectedProd.Name}
            </p>
            <p className="  sm:text-lg text-sm opacity-40 pt-8">
              Kullanıcı Puanı : {selectedProd && selectedProd.Point}
            </p>
          </div>
          <div className="flex flex-col justify-start text-base sm:text-3xl text-[#222121] font-semibold items-center text-center pt-8 pb-12 border-b-2">
            {selectedProd && selectedProd.Price + ",00 TL"}
          </div>
          <div className="flex flex-col justify-start text-xs sm:text-base px-8 leading-8 text-[#222121] font-semibold items-center pl-8 pt-8 pb-12 ">
            {selectedProd && selectedProd.Features}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-t-2  ">
        <Link to="/urunlerimiz">
          <button className="w-[250px]  h-16 bg-[#fa9d28] font-bold my-16 rounded-2xl border hover:shadow-xl">
            Tüm Ürünler
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Prod0;
