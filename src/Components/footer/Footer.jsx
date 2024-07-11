import { FiInstagram } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bg-[#f4f7ff] pt-[50px]">
      <div className="max-w-[1170px] mx-auto px-5">
        <div className="flex justify-center">
          <img className="w-[106px]" src={logo} alt="" />
        </div>
        <div className="flex justify-between mt-[44px] mb-[32px] ">
          <div className="">
            <h3 className="text-[20px] font-semibold mb-[15px]">About us</h3>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                duration={500}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
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
                style={{ border: "none" }}
                duration={500}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
              >
                
                  Command
              
             </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="tools"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                duration={500}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
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
                style={{ border: "none" }}
                duration={500}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
              >
               
                  Clients
               
              </Link>
            </li>
          </div>
          <div className="">
            <h3 className="text-[20px] cursor-pointer font-semibold mb-[15px]">Services </h3>
            <li>
              <Link
                activeClass="active"
                to="mobile"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                Development of mobile applications
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="system"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                duration={500}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
              >
                Development and implementation ERP systems
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="design"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                User interface, User experience design
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="consulting"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                IT consulting
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="optimization"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                Optimization IT consulting infrastructure
              </Link>
            </li>
          </div>
          <div className="">
            <h3 className="text-[20px] cursor-pointer font-semibold mb-[15px]">Portfolio</h3>
            <li>
              <Link
                activeClass="active"
                to="delever"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                Delever
              </Link>
            </li>
            <li>
              {" "}
              <Link
                activeClass="active"
                to="sms"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                Sms.uz
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="goodzone"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                Goodzone
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="iman"
                spy={true}
                smooth={true}
                style={{ border: "none" }}
                className="text-[18px] cursor-pointer leading-[32px] hover:underline text-[#1b5bf7]"
                duration={500}
              >
                Iman
              </Link>
            </li>
          </div>
        </div>
        <hr />
        <div className="py-[25px] flex justify-between">
          <h3 className="text-[#1b5bf7] leading-[24px] text-[14px]">
            © 2024 Udevs. All rights reserved
          </h3>
          <div className="flex gap-4">
            <a
              className="w-[38px] h-[38px] flex justify-center items-center rounded-full text-[#1b5bf7] bg-[#dee7fe]"
              href="#"
            >
              <FiInstagram />
            </a>{" "}
            <a
              className="w-[38px] h-[38px] flex justify-center items-center rounded-full text-[#1b5bf7] bg-[#dee7fe]"
              href="#"
            >
              <FaTwitter />
            </a>{" "}
            <a
              className="w-[38px] h-[38px] flex justify-center items-center rounded-full text-[#1b5bf7] bg-[#dee7fe]"
              href="#"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
