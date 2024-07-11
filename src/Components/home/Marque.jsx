import Marquee from "react-fast-marquee";
import img1 from "../../../public/marquee/akfamedline.svg";
import img2 from "../../../public/marquee/space.svg";
import img3 from "../../../public/marquee/deleverImg.svg";
import img4 from "../../../public/marquee/fonon.svg";
import img5 from "../../../public/marquee/hamkorbank.svg";
import img6 from "../../../public/marquee/hoshimov.svg";
import img7 from "../../../public/marquee/imanImg.svg";
import img8 from "../../../public/marquee/smsImg.svg";
import img9 from "../../../public/marquee/goodzomeImg.svg";
import img10 from "../../../public/marquee/zoodpay.svg";
import img11 from "../../../public/marquee/workly.svg";
import img12 from "../../../public/marquee/taxi.svg";
import img13 from "../../../public/marquee/shep.svg";
import img14 from "../../../public/marquee/maxtrack.svg";
const Marque = () => {
  return (
    <div id="clients">
      <div className="max-w-[1170px] mx-auto px-5 py-[80px]">
        <h1 className="text-[64px] font-semibold leading-[64px]  text-[#1b5bf7]">
          Our clients
        </h1>
      </div>
      <Marquee speed={30}>
        <div className="flex gap-[40px] py-4 ">
          <img
            src={img1}
            alt=""
            className="w-[220px] shadow-md hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img2}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img3}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img4}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img5}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img6}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)] transition-[.4s] duration-300"
          />{" "}
          <img
            src={img7}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />
        </div>
      </Marquee>
      <Marquee direction="right" speed={30}>
        <div className="flex gap-[40px] mt-5 py-4 pb-[70px]">
          <img
            src={img8}
            alt=""
            className="w-[220px]  hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img9}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img10}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img11}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img12}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />{" "}
          <img
            src={img13}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)] transition-[.4s] duration-300"
          />{" "}
          <img
            src={img14}
            alt=""
            className="w-[220px] hover:scale-110 rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,.15)]  transition-[.4s] duration-300"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
