import img from "../../assets/hero.svg";
import logo from "../../assets/logo.svg";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-5 py-[110px] flex items-center justify-between gap-10 ">
      <div className="flex flex-col gap-5">
        {/* <Logo /> */}
        <img src={logo} alt="" className="w-[260px] h-[90px]" />
        <h1 className="text-[40px] font-bold">IT-OutsourcingCompany</h1>

        <div className="">
          <Typewriter
            options={{
              strings: [
                "Devolopment and <br> implatementation ERP <br> systems",
                "User interface ,user <br> exprience design",
                "Optimization IT <br> consulting infrastures",
                "IT consulting",
                "Devolopment of <br> mobile aplications",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="">
          <button className="py-[13px] px-[100px] bg-[#1b5bf7] text-[#fff] hover:scale-105 transition-[.5s] duration-300 rounded-lg text-[20px] font-semibold">
            Contact
          </button>
        </div>
      </div>
      <div className="">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
