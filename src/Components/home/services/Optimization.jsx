import stystem from "../../../assets/erp.png";
import bg from "../../../assets/mobilebg.png";
import img1 from "../../../assets/optimization1.svg";
import img2 from "../../../assets/optimization2.svg";
import img3 from "../../../assets/optimization3.svg";
import img4 from "../../../assets/optimization4.svg";
import img5 from "../../../assets/optimization5.svg";
import img6 from "../../../assets/optimization6.svg";
import img7 from "../../../assets/optimization7.svg";

const sydtems = [
  {
    id: 1,
    name: "Architecture",
    img: img1,
  },
  {
    id: 2,
    name: "Auto testing",
    img: img2,
  },
  {
    id: 3,
    name: "Stress testing",
    img: img3,
  },
  {
    id: 4,
    name: "Load testing",
    img: img4,
  },
  {
    id: 5,
    name: "Devops",
    img: img5,
  },
  {
    id: 6,
    name: "Cloud",
    img: img6,
  },
  {
    id: 7,
    name: "CI / CD",
    img: img7,
  },
];

const Optimization = () => {
  return (
    <div className="bg-[#f4f7ff] py-[80px]" id="optimization">
      <div className="max-w-[1170px] mx-auto px-5">
        <h1 className="text-[64px] font-semibold leading-[64px]  text-[#1b5bf7]">
          Optimization Infrastructure
        </h1>
        <div className="flex justify-between pt-[80px] ">
          <div
            className="w-[45%]   flex justify-center items-center"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
          >
            <img src={stystem} alt="" />
          </div>
          <div className="w-[45%]">
            <p className="text-[24px]">
              Our experienced professionals will help you optimize your
              infrastructure
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

export default Optimization;
