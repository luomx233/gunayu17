export default defineEventHandler(async (e) => {
  const { productName } = useQuery(e);
  console.log(productName);
  const listItems = [
    {
      title: "食品安全检测仪",
      linkto: "/products/shipinanquan",
    },
    {
      title: "农药残留检测仪",
      linkto: "/products/nongyaocanliu",
    },
    {
      title: "食品安全一体机",
      linkto: "/products/shipoinanquanyitiji",
    },
    {
      title: "金标读卡仪",
      linkto: "/products/jinbiaodukayi",
    },
    {
      title: "毛发毒品检测仪",
      linkto: "/products/maofadupin",
    },
    {
      title: "真菌毒素检测仪",
      linkto: "/products/zhenjundusu",
    },
    {
      title: "ATP荧光检测仪",
      linkto: "/products/ATPyingguang",
    },
    {
      title: "实验室设备试剂耗材",
      linkto: "/products/shijihaocai",
    },
  ];
  const products = [
    {
      title: "真菌毒素残留定量分析仪",
      id: 1,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "ATP荧光检测仪",
      id: 2,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "手持式金标读卡仪GY-603",
      id: 3,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "毛发毒品痕迹定量分析仪",
      id: 4,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "手持式毛发毒品检测仪",
      id: 5,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "水质安全综合分析检测仪",
      id: 6,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食品安全检测仪8通道",
      id: 7,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食用农产品合格证检测一体机",
      id: 8,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "水分测定仪",
      id: 9,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食品安全检测仪GY-DS10",
      id: 10,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食品安全检测仪GY-DS12",
      id: 11,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食品安全检测仪GY-DS16",
      id: 12,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食品安全检测仪GY-DS24",
      id: 13,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "手持式ATP荧光检测仪",
      id: 14,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "ATP生物荧光检测仪",
      id: 15,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "土壤养分速测仪",
      id: 16,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "免疫荧光定量分析仪",
      id: 17,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "呕吐毒素快速检测仪",
      id: 18,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "量子点荧光定量分析仪",
      id: 19,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "金标读卡仪GY-610",
      id: 20,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "多功能食品安全综合分析仪",
      id: 21,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "普通版6通道农药残留检测仪",
      id: 22,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "菌落总数ATP荧光检测仪",
      id: 23,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "恒温金属浴",
      id: 24,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食品安全综合检测仪",
      id: 25,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "食品添加剂多功能检测仪",
      id: 26,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "COD水质安全分析仪",
      id: 27,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "手提式食品安全综合分析仪",
      id: 28,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "黄曲霉毒素快速检测仪",
      id: 29,
      imgurl: "/images/spaqjcy01.jpg",
    },
    {
      title: "时间分辨荧光定量分析仪",
      id: 30,
      imgurl: "/images/spaqjcy01.jpg",
    },
  ];
  const productsInfo = {
    title: productName,
    listItems,
    products,
  };
  return productsInfo;
});
