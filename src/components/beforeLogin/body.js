import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Body() {
  const data = useSelector((state) => state.data.data);

  return (
    data.length > 0 && (
      <div className="flex flex-col">
        <p className="text-[2rem] hover:text-[#fa9d28] font-bold text-[#4c4c4c] mt-8 ml-28">
          Popüler Ürünler
        </p>
        <div className=" border-b-2  flex flex-col-3 justify-center">
          <Link
            to="/prod/0"
            className="w-1/4 h-[550px] border m-8 p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl "
          >
            <p className="w-full text-[#4c4c4c] text-end font-bold">
              {" "}
              Kullanıcı Puanı : {data[0].Point}
            </p>
            <img className=" rounded-xl object-cover" src={data[0].img} />

            <p className="font-bold text-[#207609] text-center">
              {data[0].Stok}
            </p>
            <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
              {data[0].Name}
            </p>
            <p className="text-[#001d48] text-center text-xl font-bold mt-12">
              {data[0].Price + ",00 TL"}
            </p>
          </Link>
          <Link
            to="/prod/7"
            className="w-1/4 h-[550px] border m-8 p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl "
          >
            <p className="w-full text-[#4c4c4c] text-end font-bold">
              {" "}
              Kullanıcı Puanı : {data[7].Point}
            </p>
            <img className=" rounded-xl object-cover" src={data[7].img} />

            <p className="font-bold text-[#207609] text-center">
              {data[7].Stok}
            </p>
            <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
              {data[7].Name}
            </p>
            <p className="text-[#001d48] text-center text-xl font-bold mt-12">
              {data[7].Price + ",00 TL"}
            </p>
          </Link>
          <Link
            to="/prod/11"
            className="w-1/4 h-[550px] border m-8 p-4  hover:border-[#fa9d28] rounded-xl flex flex-col hover:shadow-2xl "
          >
            <p className="w-full text-[#4c4c4c] text-end font-bold">
              Kullanıcı Puanı : {data[11].Point}
            </p>
            <img className=" rounded-xl object-cover" src={data[11].img} />

            <p className="font-bold  text-center text-red-800">
              {data[11].Stok}
            </p>
            <p className="text-black hover:text-[#fa9d28] text-center text-xl font-bold mt-8">
              {data[11].Name}
            </p>
            <p className="text-[#001d48] text-center text-xl font-bold mt-12">
              {data[11].Price + ",00 TL"}
            </p>
          </Link>
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
