// import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import bg from "../../assets/bg.jpeg";
import { TextField } from "@mui/material";
import img1 from "../../../public/work/location.svg";
import img2 from "../../../public/work/phone.svg";
import img3 from "../../../public/work/email.svg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contacts = () => {
  const defaultState = {
    center: [41.322699, 69.191924],
    zoom: 16,
  };

  return (
    <div
      className="py-20"
      id="contact"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="max-w-[1170px] mx-auto px-[80px] py-20 shadow-xl border rounded-xl my-[80px] bg-white ">
        <h2 className="text-[20px] leading-[30px] font-medium mb-10">
          {" "}
          Leave us a message
        </h2>
        <div className="flex gap-[100px] ">
          <div className="flex flex-col w-[50%] gap-6">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Your email"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Briefly describe youXdr projoectX"
              multiline
              rows={4}
            />
            <div className="">
              <button className="w-[70%] bg-[#1b5bf7] rounded-xl py-3 text-[#fff] text-[20px] font-semibold">
                Send
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <div className=" flex items-center gap-3 py-5">
              <img src={img1} alt="" />
              <p className="text-[17px] text-[#0f001a] leading-[22px]">
                Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес Phone
              </p>
            </div>{" "}
            <div className=" flex items-center gap-3 py-5">
              <img src={img2} alt="" />
              <a
                href="tel:+998 33 66 00 999"
                className="text-[17px] text-[#0f001a] leading-[22px]"
              >
                +998 33 66 00 999
              </a>
            </div>{" "}
            <div className=" flex items-center gap-3 py-5">
              <img src={img3} alt="" />
              <p className="text-[17px] text-[#0f001a] leading-[22px]">
                azizbek.b@udevs.io
              </p>
            </div>{" "}
            <div className=" flex items-center gap-3 py-5">
              <img src={img1} alt="" />
              <a
                href="https://t.me/azizbekbakhodirov"
                target="__both"
                className="text-[17px] text-[#0f001a] leading-[22px]"
              >
                t.me/azizbekbakhodirov
              </a>
            </div>
            <div className="flex gap-2 py-5">
              <a href="#" className="text-[#1b5bf7]">
                <FaYoutube size={25} />
              </a>{" "}
              <a href="#" className="text-[#1b5bf7]">
                <FaInstagram size={22} />
              </a>{" "}
              <a href="#" className="text-[#1b5bf7]">
                <FaFacebookSquare size={22} />
              </a>{" "}
              <a href="#" className="text-[#1b5bf7]">
                <FaTwitter size={22} />
              </a>
            </div>
            <YMaps className="w-full">
              <Map defaultState={defaultState} width={"100%"}>
                <Placemark geometry={[41.322699, 69.191924]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
