import bg from "../../../assets/bg.jpeg";
import consulting from "../../../assets/consulting.svg";
import img1 from "../../../assets/consut1.svg";
import img2 from "../../../assets/consut2.svg";
import img3 from "../../../assets/consut3.svg";
import img4 from "../../../assets/consut4.svg";
import img5 from "../../../assets/consut5.svg";
import img6 from "../../../assets/consut7.svg";

const designs = [
  {
    id: 1,
    name: "Frontend",
    img: img1,
  },
  {
    id: 2,
    name: "Backend",
    img: img2,
  },
  {
    id: 3,
    name: "Architecture",
    img: img3,
  },
  {
    id: 4,
    name: "DevOps",
    img: img4,
  },
  {
    id: 5,
    name: "UX/UI",
    img: img5,
  },
  {
    id: 6,
    name: "QA",
    img: img6,
  },
];

const Consulting = () => {
  return (
    <div
      className="relative"
      id="consulting"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      {/* <div className=""></div> */}
      <div className="max-w-[1170px] mx-auto px-5 py-[80px]">
        <h1 className="text-[64px] font-semibold leading-[64px] mb-8 text-[#1b5bf7]">
          IT consulting
        </h1>
        <div className="flex justify-between pt-5">
          <div className="w-[45%]">
            <p className="text-[24px] leading-[40px] font-medium mb-6">
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>
            <div className="grid grid-cols-3 gap-[20px] my-[40px]">
              {designs.map((item) => (
                <div
                  key={item.id}
                  className="p-[10px] pr-[20px] w-[160px] h-[118px] rounded-lg bg-[#f4f7ff]"
                >
                  <img src={item.img} alt="" />
                  <p className="text-[18px] leading-[30px] font-semibold mt-[12px]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <img src={consulting} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
