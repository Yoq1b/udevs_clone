import bg from "../../../assets/bg.jpeg";
import mobileBg from "../../../assets/mobilebg.png";
import mobile from "../../../assets/mobile.png";
import img1 from "../../../assets/ux.svg";
import img2 from "../../../assets/ui.svg";
import img3 from "../../../assets/protip.svg";
import img4 from "../../../assets/mobileDesign.svg";
import img5 from "../../../assets/webDesign.svg";
import img6 from "../../../assets/atomic.svg";

import figma from "../../../assets/figma.svg";
import sketch from "../../../assets/sketch.svg";
import lottlie from "../../../assets/lottle.svg";
import illustrator from "../../../assets/illustrator..svg";

const designs = [
  {
    id: 1,
    name: "UX",
    img: img1,
  },
  {
    id: 2,
    name: "UI",
    img: img2,
  },
  {
    id: 3,
    name: "Prototype",
    img: img3,
  },
  {
    id: 4,
    name: "Mobile Design",
    img: img4,
  },
  {
    id: 5,
    name: "Web Design",
    img: img5,
  },
  {
    id: 6,
    name: "Atomic Design",
    img: img6,
  },
];

const Design = () => {
  return (
    <div
      className="relative"
      id="design"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      {/* <div className=""></div> */}
      <div className="max-w-[1170px] mx-auto px-5 py-[80px]">
        <h1 className="text-[64px] font-semibold leading-[64px] mb-8 text-[#1b5bf7]">
          UI / UX design
        </h1>
        <div className="flex justify-between pt-5">
          <div className="w-[45%]">
            <p className="text-[24px] leading-[40px] font-medium mb-6">
              Our company takes a human-centered approach to design
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
            <h2 className="text-[32px] mb-6 font-bold first-line: text-[#464359]">
              Technologies
            </h2>
            <div className="flex gap-[50px] items-center">
              <div className="flex flex-col items-center justify-center gap-3 w-[40px] h-[50px] ">
                <img
                  src={figma}
                  alt=""
                  className="w-[46px] h-[56px] object-cover"
                />
                <p className="text-[20px] leading-[30px] font-semibold">
                  Figma
                </p>
              </div>{" "}
              <div className="flex flex-col gap-3">
                <img src={sketch} alt="" className="w-[56px] h-[56px]" />
                <p className="text-[20px] leading-[30px] font-semibold">
                  Sketch
                </p>
              </div>{" "}
              <div className="flex flex-col gap-3">
                <img
                  src={lottlie}
                  alt=""
                  className="w-[46px] h-[56px] object-contain"
                />
                <p className="text-[20px] leading-[30px] font-semibold">
                  Lottie
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  src={illustrator}
                  alt=""
                  className="w-[46px] h-[56px] object-contain"
                />
                <p className="text-[20px] leading-[30px] font-semibold">
                  Illustrator
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[40%] flex justify-center items-center"
            style={{
              backgroundImage: `url(${mobileBg})`,
              backgroundSize: "cover",
            }}
          >
            <img src={mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
