import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Prod0() {
  const data = useSelector((state) => state.data.data);
  return (
    <div className="flex flex-col">
      <div className="w-full h-[100px]  bg-[#e8e8e8] font-semibold text-2xl text-[#1e273a] mt-2  flex pl-12 pb-2  items-end">
        {data[0].Category}
      </div>
      <div className="flex w-full h-[38rem]   justify-center items-center my-24">
        <div className="w-1/5 h-full border-x-2   flex-col ">
          <img className=" rounded-xl object-cover" src={data[0].img} />
          <p className="text-center text-2xl font-bold text-[#0F6E0E] mt-12">
            {data[0].Stok}
          </p>
        </div>
        <div className="w-2/5 h-full border-r-2 flex flex-col ">
          <div className="flex flex-col justify-start items-center text-4xl pl-8 pt-8 pb-12 font-bold border-b-2 ">
            <p className="hover:text-[#f78501]">{data[0].Name}</p>
            <p className=" text-lg opacity-40 pt-8">
              Kullanıcı Puanı : {data[0].Point}
            </p>
          </div>
          <div className="flex flex-col justify-start text-3xl text-[#222121] font-semibold items-center pl-8 pt-8 pb-12 border-b-2">
            {data[0].Price}
          </div>
          <div className="flex flex-col justify-start px-8 leading-8 text-[#222121] font-semibold items-center pl-8 pt-8 pb-12 border-b-2">
            {data[0].Features}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-t-2  ">
        <Link to="/urunler">
          <button className="w-[250px]  h-16 bg-[#fa9d28] font-bold my-16 rounded-2xl border hover:shadow-xl">
            Tüm Ürünler
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Prod0;
