import React from "react";

function Footer() {
  return (
    <div className="flex  h-[350px] mt-16  flex-col border-t-2 mx-16 pt-12 px-4">
      <div className="flex justify-between ">
        <div className="w-3/4">
          <p className="font-bold text-sm">
            Teknolojnin En İyi Markaları burada!
          </p>
          <p className="text-xs pt-6 ">
            {" "}
            Markamızın avantajlarla sunduğu elektronik ürünler içinde bilgisayar
            modellerinden monitorlere , bluetooth kulaklık tasarımlarından
            laptop seçeneklerine, tablet çeşitlerinden akıllı saat ürünlerine
            kadar birçok alternatif yer alıyor. En iyi teknoloji markaları, özel
            ürünleri ve avantajlı ödeme seçenekleri ile sitemizde müşterilerle
            buluşuyor.{" "}
          </p>
        </div>
        <div className="w-1/4 flex justify-center gap-4 ml-16 items-start">
          <a href="https://github.com/MertOzkan35">
            <img src={require("../images/githup.png")} />
          </a>
          <a href="https://www.linkedin.com/in/mertozkann/">
            <img src={require("../images/linkedin.png")} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
