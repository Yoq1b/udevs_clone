// import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import port1 from "../../../public/header/d.svg";
import port2 from "../../../public/header/s.svg";
import port3 from "../../../public/header/g.svg";
import port4 from "../../../public/header/i.svg";
import ser1 from "../../../public/header/ser1.svg";
import ser2 from "../../../public/header/ser2.svg";
import ser3 from "../../../public/header/ser3.svg";
import ser4 from "../../../public/header/ser4.svg";
import ser5 from "../../../public/header/ser5.svg";
import rus from "../../../public/header/rus.svg";
import eng from "../../../public/header/eng.svg";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="py-5 border-b bg-[#fff] fixed w-full z-50">
      <div className="max-w-[1170px] mx-auto px-5 flex justify-between ">
        <div className="">
          <img src={logo} alt="" className="w-[96px] h-[26px]" />
        </div>
        <div className="flex gap-6 items-center">
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="text-[14px] border-b-[3px] border-b-[#1b59f700] hover:border-b-[#1b5bf7] font-bold pb-2 cursor-pointer"
            >
              Direction
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              className="text-[14px] border-b-[3px] border-b-[#1b59f700] hover:border-b-[#1b5bf7] font-bold pb-2 cursor-pointer"
            >
              Command
            </Link>
          </li>
          <li className="group relative">
            <Link
              activeClass="active"
              to="mobile"
              spy={true}
              smooth={true}
              duration={500}
              className="text-[14px] border-b-[3px] border-b-[#1b59f700] hover:border-b-[#1b5bf7] font-bold pb-2 cursor-pointer"
            >
              Services
            </Link>
            <li className="hidden group-hover:block w-[300px] absolute top-[30px] -left-20  bg-[#fff] ">
              <div className="flex flex-col gap-2 py-5 ">
                <h2 className="px-5 text-[12px] font-bold text-[gray]">
                  Services
                </h2>
                <Link
                  activeClass="active"
                  to="mobile"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ border: "none" }}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:bg-[#1b5bf7] py-2 hover:text-[#fff]  cursor-pointer flex items-center gap-4"
                >
                  <img src={ser1} alt="" />
                  Development of mobile applications
                </Link>
                <Link
                  activeClass="active"
                  to="system"
                  spy={true}
                  style={{ border: "none" }}
                  smooth={true}
                  duration={500}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2  cursor-pointer flex items-center gap-4"
                >
                  <img src={ser2} alt="" />
                  Development and implementation ERP systems
                </Link>
                <Link
                  activeClass="active"
                  to="design"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ border: "none" }}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:bg-[#1b5bf7] py-2  hover:text-[#fff] cursor-pointer flex items-center gap-4"
                >
                  <img src={ser3} alt="" />
                  User interface, User experience design
                </Link>
                <Link
                  activeClass="active"
                  to="consulting"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ border: "none" }}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2  cursor-pointer flex items-center gap-4"
                >
                  <img src={ser4} alt="" />
                  IT consulting
                </Link>
                <Link
                  activeClass="active"
                  to="optimization"
                  style={{ border: "none" }}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2  cursor-pointer flex items-center gap-4"
                >
                  <img src={ser5} alt="" />
                  Optimization IT consulting infrastructure
                </Link>
              </div>
            </li>
          </li>
          <li>
            <Link
              activeClass="active"
              to="tools"
              spy={true}
              smooth={true}
              duration={500}
              className="text-[14px] border-b-[3px] border-b-[#1b59f700]  hover:border-b-[#1b5bf7] font-bold pb-2 cursor-pointer"
            >
              Tools
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="clients"
              spy={true}
              smooth={true}
              duration={500}
              className="text-[14px] border-b-[3px] border-b-[#1b59f700] hover:border-b-[#1b5bf7] font-bold pb-2 cursor-pointer"
            >
              Clients
            </Link>
          </li>
          <li className="group relative">
            <Link
              activeClass="active"
              to="delever"
              spy={true}
              smooth={true}
              duration={500}
              className="text-[14px] border-b-[3px] border-b-[#1b59f700]   pb-2 font-bold cursor-pointer"
            >
              Portfolio
            </Link>
            <li className="hidden group-hover:block w-[300px] absolute top-[30px] -left-20  bg-[#fff] ">
              <div className="flex flex-col gap-2 py-5 ">
                <h2 className="px-5 text-[12px] font-bold text-[gray]">
                  Portfolio
                </h2>
                <Link
                  activeClass="active"
                  to="delever"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ border: "none" }}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2 font-bold cursor-pointer flex items-center gap-4"
                >
                  <img src={port1} alt="" />
                  Delever
                </Link>
                <Link
                  activeClass="active"
                  to="sms"
                  spy={true}
                  smooth={true}
                  style={{ border: "none" }}
                  duration={500}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2 font-bold cursor-pointer flex items-center gap-4"
                >
                  <img src={port2} alt="" />
                  Sms.uz
                </Link>
                <Link
                  activeClass="active"
                  to="goodzone"
                  spy={true}
                  style={{ border: "none" }}
                  smooth={true}
                  duration={500}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2 font-bold cursor-pointer flex items-center gap-4"
                >
                  <img src={port3} alt="" />
                  Goodzone
                </Link>
                <Link
                  activeClass="active"
                  to="iman"
                  spy={true}
                  style={{ border: "none" }}
                  smooth={true}
                  duration={500}
                  className="text-[14px] px-8 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2 font-bold cursor-pointer flex items-center gap-4"
                >
                  <img src={port4} alt="" />
                  Iman
                </Link>
              </div>
            </li>
          </li>
          <li className="group relative">
            <div className="">
              <Link
                activeClass="active"
                to="language"
                spy={true}
                smooth={true}
                duration={500}
                className="text-[14px] border-b-[2px] border-b-[#1b59f700] hover:b-[#1b5bf7]  py-2 font-bold cursor-pointer"
              >
                Language
              </Link>
              <li className="hidden group-hover:block w-[130px] absolute top-[30px] -left-5  bg-[#fff] ">
                <div className="flex flex-col gap-2 py-1 ">
                  <Link
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ border: "none" }}
                    className="text-[14px] px-2 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2 font-bold cursor-pointer flex items-center gap-2"
                  >
                    <img src={rus} alt="Rus" className="w-[29px] h-[29px]" />
                    Rus
                  </Link>
                  <Link
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    style={{ border: "none" }}
                    duration={500}
                    className="text-[14px] px-2 border-b-[2px] border-b-[#1b59f700] hover:text-[#fff] hover:bg-[#1b5bf7] py-2 font-bold cursor-pointer flex items-center gap-2"
                  >
                    <img src={eng} alt="" className="w-[29px] h-[29px]" />
                    Eng
                  </Link>
                </div>
              </li>
            </div>
          </li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            style={{ border: "none" }}
            duration={500}
          >
            <button className="text-[16px] font-bold rounded-lg hover:scale-105 duration-300  bg-[#1b5bf7] px-6 py-2 text-[#fff]">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
