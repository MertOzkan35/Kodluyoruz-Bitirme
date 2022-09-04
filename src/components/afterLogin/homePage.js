import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomePage() {
  const data = useSelector((state) => state.data.data);
  const [prod, setProd] = useState([]);
  let shoppingCart = (value) => {
    const setProdData = data.filter((item) => item.Id === value);
    setProd([...prod, setProdData]);
  };
  console.log(prod);
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-3/4  border-r-2 ">
        <div className="flex w-full pb-6 justify-start  border-b-2 ">
          <p className="text-[#001d48]  text-2xl font-bold mt-[52px] ml-24 hover:text-[#f79b21]">
            ALIŞVERİŞE BAŞLA!
          </p>
          <input
            className="w-1/3 h-10 rounded-3xl border border-[#f79b21]  mt-12 ml-36 pl-3 font-semibold "
            placeholder="ürün ara"
          ></input>
        </div>
        <div className=" grid grid-cols-3 gap-12 m-16 ">
          {data &&
            data.map((element, key) => {
              return (
                <div
                  key={key}
                  className="w-full h-[550px] border  p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl"
                >
                  <Link key={key} to={`/prod${element}`}>
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
                      {element.Price}
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
      <div className="flex flex-col w-1/4 h-[100rem] "> sdfdsg</div>
    </div>
  );
}

export default HomePage;
