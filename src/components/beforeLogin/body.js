import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Body() {
  const data = useSelector((state) => state.data.data);

  return (
    data.length > 0 && (
      <div className="flex flex-col">
        <p className="text-[2rem] hover:text-[#fa9d28] font-bold text-[#4c4c4c] mt-8 m-auto sm:ml-28">
          Popüler Ürünler
        </p>
        <div className=" border-b-2 pb-16 h-full gap-y-8 mt-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center  ">
          {data[0] && (
            <div className=" w-4/5 sm:w-4/5 h-full border m-auto p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl ">
              <p className="w-full text-[#4c4c4c] text-end font-bold">
                {" "}
                Kullanıcı Puanı : {data[0].Point}
              </p>
              <img
                className=" rounded-xl object-cover scale-75 hover:scale-100 ease-in duration-500"
                src={data[0].img}
              />

              <p className="font-bold text-[#207609] text-center">
                {data[0].Stok}
              </p>
              <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
                {data[0].Name}
              </p>
              <p className="text-[#001d48] text-center text-xl font-bold mt-12">
                {data[0].Price + ",00 TL"}
              </p>
            </div>
          )}
          {data[2] && (
            <div className="w-4/5 h-full border m-auto  p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl ">
              <p className="w-full text-[#4c4c4c] text-end font-bold">
                {" "}
                Kullanıcı Puanı : {data[2].Point}
              </p>
              <img
                className=" rounded-xl object-cover scale-75 hover:scale-100 ease-in duration-500"
                src={data[2].img}
              />

              <p className="font-bold text-[#207609] text-center">
                {data[2].Stok}
              </p>
              <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
                {data[2].Name}
              </p>
              <p className="text-[#001d48] text-center text-xl font-bold mt-12">
                {data[2].Price + ",00 TL"}
              </p>
            </div>
          )}
          {data[4] && (
            <div className="w-4/5 h-full border m-auto p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl ">
              <p className="w-full text-[#4c4c4c] text-end font-bold">
                {" "}
                Kullanıcı Puanı : {data[4].Point}
              </p>
              <img
                className=" rounded-xl object-cover scale-75 hover:scale-100 ease-in duration-500"
                src={data[4].img}
              />

              <p className="font-bold text-[#750315] text-center">
                {data[4].Stok}
              </p>
              <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
                {data[4].Name}
              </p>
              <p className="text-[#001d48] text-center text-xl font-bold mt-12">
                {data[4].Price + ",00 TL"}
              </p>
            </div>
          )}
        </div>
        <div className="w-full h-[30rem] flex flex-col justify-center text-center items-center">
          <p className="text-[28px] font-bold text-[#fa9d28]">
            FIRSATLARDAN YARARLANMAK İÇİN HEMEN ÜYE OL!
          </p>
          <Link to="/login">
            <button className="w-[250px] mt-8 h-16 bg-[#fa9d28] font-bold rounded-2xl border hover:shadow-xl">
              ÜYE OL
            </button>
          </Link>
        </div>
      </div>
    )
  );
}

export default Body;
