import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeProds } from "../../store/slices/shoppingCartSlice";

function Prod() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const login = useSelector((state) => state.mert.login);

  function shoppingCart(value) {
    var value = [data.filter((item) => item.Id === value)];
    const lastProd = value[0][0];

    if (login.payload.length > 4) {
      return dispatch(changeProds({ lastProd }));
    }
    return alert("Giriş yapmanız gerekmetedir.");
  }

  return (
    <div className="flex flex-col ">
      <p className="text-[2rem] hover:text-[#fa9d28] font-bold text-[#4c4c4c] my-8 ml-28">
        Tüm Ürünler
      </p>
      <div className=" grid grid-cols-4 gap-12 m-16 ">
        {data &&
          data.map((element, key) => {
            return (
              <div key={key}>
                <div className="w-full h-[550px] border  p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl">
                  <Link to={`/prod/${element.Id}`}>
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
                    <p className="text-[#001d48] text-center text-xl font-bold mt-6">
                      {element.Price + ",00 TL"}
                    </p>
                  </Link>
                  <div className="w-full flex flex-col justify-center items-center pt-8">
                    <button
                      onClick={(e) => shoppingCart(`${element.Id}`)}
                      className="w-1/2  h-12 bg-[#fa9d28]  hover:border-2 rounded-2xl border font-bold"
                    >
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Prod;
