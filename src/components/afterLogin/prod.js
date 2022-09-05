import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Prod() {
  const data = useSelector((state) => state.data.data);
  return (
    <div className="flex flex-col ">
      <p className="text-[2rem] hover:text-[#fa9d28] font-bold text-[#4c4c4c] my-8 ml-28">
        Tüm Ürünler
      </p>
      <div className=" grid grid-cols-4 gap-12 m-16 ">
        {data &&
          data.map((element, key) => {
            return (
              <Link to={`/prod${element.Id}`}>
                <div className="w-full h-[550px] border  p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl">
                  <p className="w-full text-[#4c4c4c] text-end font-bold">
                    {" "}
                    Kullanıcı Puanı : {element.Point}
                  </p>
                  <img className=" rounded-xl object-cover" src={element.img} />

                  <p className="font-bold text-[#207609] text-center">
                    {element.Stok}
                  </p>
                  <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
                    {element.Name}
                  </p>
                  <p className="text-[#001d48] text-center text-xl font-bold mt-12">
                    {element.Price + ",00 TL"}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Prod;
