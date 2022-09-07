import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      Point: "5.8/10",
      Name: "Acer ASPIRE 3 A314-2",
      Stok: "Stokta var",
      Id: "0",
      img: "https://img-itopya.mncdn.com/cdn/350/1jpgb3dc4e76-ebea-42b1-ba0a-7664a8d3498asdasd8-2de203.jpg",
      Category: "Notebook",
      Price: 4.399,
      Features:
        "Günümüzde bir kişinin en büyük ihtiyaçlarından birisi, gittiği her yerde kullanabileceği güzel bir Notebook. Güçlü Acer Notebook-lar her gününüzde size kolaylıklar sağlamak üzere tasarlanıyor ve her yerde rahatca kullanabileceğiniz teknolojiler sunuyor. İşlemci olarak AMD A4-9120e kullanılan Acer ASPIRE 3 A314-2 gündelik işlerinizi halletmenizi , internette istediğiniz gibi gezmenizi sağlayacak. İçerisinde bir diğer AMD teknolojisi olan Radeon R3 Grafik İşlemci Birimi taşıyor ve sağlıklı bir görüntü sağlıyor.",
    },
    {
      Point: "6.8",
      Name: "Lenovo - 15ACH6",
      Stok: "Son 5 Ürün !!",
      Id: "1",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-03-29t124602562-a1413f-7ff531.jpg",
      Category: "Notebook",
      Price: 17.199,
      Features:
        "NVIDIA® GeForce RTX™ 30 Serisi Dizüstü Bilgisayar GPU-ları, oyuncular ve içerik oluşturucular için en üst düzeyde performans sunar. Performansta büyük bir sıçrama için yeni Işın İzleme Çekirdekleri, Tensör Çekirdekleri ve akışlı çok işlemcili, NVIDIA-nın 2. nesil RTX mimarisi olan Ampere tarafından desteklenirler. İnce ve hafif tasarımlarda en gerçekçi ışın izlemeli grafikleri, son teknoloji ürünü yeni özellikleri ve yapay zekanın gücünü deneyimleyin.",
    },
    {
      Point: "9.5/10",
      Name: "MSI NB VECTOR GP76",
      Stok: "Stokta var",
      Id: "2",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-08-25t113512646-ba7798.jpg",
      Category: "Notebook",
      Price: 65.621,
      Features:
        "12.Nesil Intel® Core™ i9 işlemci ile Vector GP76 çok görevli projelerinizde ve performans gerektiren oyunlarda eşi görülmemiş bir güç artışı sunar.GeForce RTX™ 30 serisi GPU-lar oyuncular ve tasarımcılar için dünyanın en hızlı laptoplarına güç verir.",
    },
    {
      Point: "8/10",
      Stok: "Stokta var",
      Name: "MSI MAG INFINITE S3 ",
      Id: "3",
      img: "https://img-itopya.mncdn.com/cdn/350/11-d8456e.jpg",
      Category: "Gaming Bilgisayar",
      Price: 32.822,
      Features:
        "Yeni 11.Nesil Intel Core i5-11400F işlemci, akıllı performansı (AI) baştan tasavvur eden ve kullanıcıya talep ettiği gerçek dünya deneyimini yaşatan yenilikçi bir mimariye sahip.  ",
    },
    {
      Point: "10/10",
      Stok: "Stokta var",
      Name: "MSI MEG AEGIS TI5",
      Id: "4",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-03-07t184532209-bda05f.jpg",
      Category: "Gaming Bilgisayar",
      Price: 127.552,
      Features:
        "Fortnite, Call of Duty: Modern Warfare, ve Rainbow Six Siege gibi FPS ve Battle Royale oyunları kazamak için her zaman en iyi performansa ihtiyacınız var. Rekabetçi oyunlarda 144, 240, hatta 360 FPS değerlerine ulaşabilmek için en önemli bileşen ise bir GeForce RTX™ ekran kartı.",
    },
    {
      Point: "7.2/10",
      Stok: "Son 10 Ürün !!",
      Name: 'MSI 27" OPTIX G271C ',
      Id: "5",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-08-05t173413997-ddc702.jpg",
      Category: "Monitör",
      Price: 4.497,
      Features:
        "MSI Optix Curved Gaming monitörleri yeni 1000R kavisli yüzey teknolojisi ile insan gözünün izleme açısına en iyi uyum sağlayan kavise sahiptir. Böylece uzun soluklu kullanımdan kaynaklanan göz yorgunluğunu en iyi şekilde azaltır. Aynı zamanda çevrelenme hissini arttırarak kendinizi oyunun tam içinde hissetmenize yardımcı olur.",
    },
    {
      Point: "8/10",
      Name: 'Dell 27" S2721DGFA',
      Stok: "Stokta var",
      Id: "6",
      img: "https://img-itopya.mncdn.com/cdn/350/dell-27-s2721dgf-165hz-1ms-2xhdmi-dp-freesync-pivot-gaming-monitor-08-8aa34c-db41e5.jpg",
      Category: "Monitör",
      Price: 6.999,
      Features:
        "Büyüleyici renkler: %98 DCI-P3 renk kapsamı ve 1,07 milyar renk sayesinde, göz alıcı QHD (2560x1440) çözünürlüğünde her oyun deneyiminde canlı renkler, olağanüstü derinlik elde edersiniz. Ödün vermeyen netlik: Dell 27 Oyun Monitörü, VESA DisplayHDR™ 400 ile uyumludur, SDR ekrana göre daha fazla ayrıntı ve renk görmenizi sağlar ve gerçeğe yakın çarpıcı görseller sunmak için fark yaratan netlik ve yüksek kontrasta sahiptir.",
    },
    {
      Point: "6.5/10",
      Name: "HyperX Alloy MKW100 ",
      Stok: "Stokta var",
      Id: "7",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-03-29t170659283-97233b.jpg",
      Category: "Klavye",
      Price: 1.149,
      Features:
        "HyperX Alloy MKW100 Red Switch İngilizce RGB Mekanik Gaming Klavye",
    },
    {
      Point: "8/10",
      Name: "ASUS ROG STRIX RX",
      Stok: "Son 10 Ürün !!",
      Id: "8",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-08-18t160525123-ede69f.jpg",
      Category: "Klavye",
      Price: 2.699,
      Features:
        "FPS oyuncuları için ROG Strix Scope RX EVA Edition optik RGB oyuncu klavyesi. ROG RX Optik Mekanik Anahtarlar, genel Aura Sync RGB aydınlatma, IP57 suya ve toza karşı dayanıklılık düzeyi, USB 2.0 geçiş özelliği ve alaşımlı üst plaka",
    },
    {
      Point: "6.4/10",
      Name: "Logitech M500s ",
      Stok: "Stokta var",
      Id: "9",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-08-02t161429044-c74171.jpg",
      Category: "Mouse",
      Price: 1.607,
      Features:
        "M500s, yüksek hızlı kaydırma özelliği ve yedi adet yapılandırılabilir kısayol tuşuyla çalışmanıza seviye atlatır. Tam boyutlu, mükemmel tasarım, daha akıllı, daha hızlı çalışma deneyimi için ayarlanabilir DPI ve Logitech OPTIONS yazılımı ile konfor ile hassasiyeti bir araya getirir.",
    },
    {
      Point: "8/10",
      Name: "Razer Viper V2",
      Stok: "Stokta var",
      Id: "10",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-08-03t111743344-f60024.jpg",
      Category: "Mouse",
      Price: 3.354,
      Features:
        "Esports-un yeni bir apeks avcısı var. Ödüllü Razer Viper Ultimate-ın halefi olarak, en son evrimimiz %20 daha hafiftir ve gelişmiş performans için çok yönlü yükseltmelerle donatılmıştır. Şimdiye kadarki en hafif kablosuz oyun farelerinden biriyle artık sizi geride tutan hiçbir şey yok.",
    },
    {
      Point: "7.2/10",
      Name: "ASUS ROG Delta S Core",
      Stok: "Son 5 Ürün !",
      Id: "11",
      img: "https://img-itopya.mncdn.com/cdn/350/yeni-proje-2022-07-29t161924155-e1eb20.jpg",
      Category: "Kulaklık",
      Price: 2.316,
      Features:
        "Delta S Core, yüksek çözünürlüklü ses sağlamak için hava geçirmez bölmelerde özel 50 mm ASUS Essence sürücülerine sahiptir. Sürücüler, kristal netliğinde tizler, inanılmaz derecede güçlü bas sağlamak için 20 Hz-40 kHz-lik geniş bir frekans tepkisine sahiptir ve sesi doğrudan kulak kanalına yönlendirmek için her bir kulak kabında 12° eğilir.",
    },
  ],
};

export const loginSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
