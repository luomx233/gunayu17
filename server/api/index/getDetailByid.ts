export default defineEventHandler(async (e) => {
  const { productId } = useQuery(e);
  console.log("进入getdetailbyid");
  const productsInfo = {
    title: "产品id" + productId,
    imgurl: "http://www.guanyu17.com/upfile/spaq/spaqjcy01.jpg",
    productInfo: {
      name: "产品名称：" + productId,
      type: "GY-DS1008",
      producter: "冠宇仪器",
      intro:
        "水质安全综合分析检测仪GY-DS1008能够快速检测COD、色度、浊度、总溶解度、硝酸盐、亚硝酸盐、甲醛、溶解氧、氰化物、氟化物、氨氮、总氮、磷酸盐、、总硬度、硫化物、、总氯（二氧化氯、余氯）等有害物质。",
    },
    productDetail:
      "产品用途：\n水质安全综合分析检测仪GY-DS1008能够快速检测COD、色度、浊度、总溶解度、硝酸盐、亚硝酸盐、甲醛、溶解氧、氰化物、氟化物、氨氮、总氮、磷酸盐、、总硬度、硫化物、、总氯（二氧化氯、余氯）等有害物质。\n应用范围：\n本仪器具有检测速度快，检测项目多，精确度高、药剂成品供应，简单易学等特点，可广泛用于水厂、食品、化工、冶金、环保及制药行业等部门的污水检测，是常用的实验室仪器。\n水质安全综合分析检测仪技术参数：\n1、检测通道：10通道\n2、精度误差：±3%\n3、线性误差：±5‰\n4、稳 定 性： ±0.001A/hr\n5、吸光度范围：0.000~4.000ABS\n6、透射比重复性：±1%\n7、数据储存80,00条\n8、样品检测时间：≤3分钟\n9、比色皿：10×10mm标准样品池\n仪器功能：\n★7寸彩色中文液晶触摸显示屏\n★采用新型仪器结构设计，体积小，便于携带。无机械移动部件，抗干扰、抗振动，\n★同时启动和单通道分别启动两种测量模式。进行多个样品测量时，客户可根据  操作熟练程度，自行选择测量模式，最大限度消除通道间的变异系数而引起的测量误差。\n★准确性高：采用进口特制LED光源，具有良好的波长准确度和重复性，全面提高检测结果的 准确性。\n★自动化程度高：仪器自动诊断系统故障、波长校准：自动校准\n★仪器使用寿命长：采用LED光源，自动开关节能设计，非连续工作模式。使用寿命可达10年\n★内置微型热敏打印机，终身无需更换色带，可实时打 印检测结果检测报告可打印检测日期 ，检测单位。更能体现  检测结果的权威性，并利于公示。\n★配备RS-232接口和USB口（升级无线Wifi、以太网接口）等，可通过计算机进行数据处理、统计分析以及结果上传。",
  };
  return productsInfo;
});
