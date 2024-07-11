import stystem from "../../../assets/erp.png";
import bg from "../../../assets/mobilebg.png";
import img1 from "../../../assets/sydtem1.svg";
import img2 from "../../../assets/system2.svg";
// ("");
import img3 from "../../../assets/system3.svg";
import img4 from "../../../assets/system4.svg";
import img5 from "../../../assets/system5.svg";
import img6 from "../../../assets/system6.svg";

const sydtems = [
  {
    id: 1,
    name: "CRM",
    img: img1,
  },
  {
    id: 2,
    name: "eLearning",
    img: img2,
  },
  {
    id: 1,
    name: "E-Commerce",
    img: img3,
  },
  {
    id: 1,
    name: "POS",
    img: img4,
  },
  {
    id: 1,
    name: "Sms / Email",
    img: img5,
  },
  {
    id: 1,
    name: "Warehouse",
    img: img6,
  },
];

const ERPSystem = () => {
  return (
    <div className="bg-[#f4f7ff] py-[80px]" id="system">
      <div className="max-w-[1170px] mx-auto px-5">
        <h1 className="text-[64px] font-semibold leading-[64px] mb-8 text-[#1b5bf7]">
          ERP Systems
        </h1>
        <div className="flex justify-between  pt-5">
          <div
            className="w-[48%]  h-[430px] flex justify-center items-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <img src={stystem} alt="" />
          </div>
          <div className="w-[40%]">
            <p className="text-[24px]">
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <div className=" grid grid-cols-3 gap-[20px] pt-[50px]">
              {sydtems.map((item) => (
                <div
                  className="w-[150px] h-[118px] rounded-lg bg-[#e0e8ff] p-[10px] pr-[20px]"
                  key={item.id}
                >
                  <img src={item.img} alt="" />
                  <p className="text-[18px] leading-[30px] font-semibold mt-[12px]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPSystem;
