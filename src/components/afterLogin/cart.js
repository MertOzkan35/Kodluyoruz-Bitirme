import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProds } from "../../store/slices/shoppingCartSlice";
import { clearProds } from "../../store/slices/shoppingCartSlice";

function Cart() {
  const [visibilityorder, setVisibilityOrder] = useState("hidden");
  // görünürlüğü dinamik yaptık.
  const dataStore = useSelector((state) => state.data.data);
  const [data, setdata] = useState(dataStore);
  // reduxtan datayı çektik
  let userName = localStorage.getItem("userName");
  // localStorageden ismi çağırdık
  const prodsData = useSelector((state) => state.prods.prods);
  // reduxtan sepet bilgisini çektik
  const dispatch = useDispatch();

  const deleteProd = (value) => {
    var value2 = [data.filter((item) => item.Id === value)];
    const lastProd2 = value2[0][0];
    dispatch(deleteProds(`${lastProd2.Id}`));
    setVisibilityOrder("hidden");
  };
  // ürün silerken kullanılan fonksyon
  const order = () => {
    setVisibilityOrder("visible");
    dispatch(clearProds());
  };

  const totalPrice = prodsData.reduce((a, v) => (a = a + v.lastProd.Price), 0);
  //  ürün fiyat toplamı için reduce kullandık
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full pb-6 justify-start  border-b-2 ">
        <p className="text-[#001d48]  text-2xl font-bold mt-[52px] pl-24 hover:text-[#f79b21]">
          Hoşgeldin {userName} !
        </p>
      </div>
      <p className="text-[#001d48] w-full h-[80px]  border-b-2 text-2xl font-bold mt-[72px] pl-28 hover:text-[#f79b21]">
        Sepetiniz
      </p>

      <div className=" grid grid-cols-1 sm:grid-cols-2 items-start px-4 mt-6 w-full h-[full] ">
        <div className="w-full">
          {prodsData &&
            prodsData.map((element, key) => {
              return (
                <div
                  key={key}
                  className="flex w-full justify-center  mb-24 border-2 hover:border-[#f79b21] rounded-full "
                >
                  <div className="w-1/2 h-24 ">
                    <img
                      className=" rounded-xl object-cover"
                      src={element.lastProd.img}
                    />
                  </div>
                  <div className="mb-8 mr-4 pt-6  w-full text-center font-bold">
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
        </div>
        <div className=" flex flex-col w-full justify-center   items-center    ">
          <div className="  ">
            {totalPrice > 1 && (
              <div className=" border-b-2 flex flex-col items-center justify-center pt-8 font-bold  text-[#001d48]">
                <p className="text-center mb-2"> Toplam Tutar</p>
                <p className="text-center mb-6">
                  {" "}
                  {totalPrice.toFixed(3) + ",00 TL"}
                </p>
                <button
                  onClick={order}
                  className=" mb-8  px-4  h-12 bg-[#fa9d28]  hover:border-2 rounded-2xl border font-bold"
                >
                  Alışverişi Bitir
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <p
        className={` w-full mt-10  text-center text-xl font-bold ${visibilityorder} text-[#207609] `}
      >
        Sipariş Verildi
      </p>
    </div>
  );
}

export default Cart;
