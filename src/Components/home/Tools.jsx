// import React from "react";

import { useState } from "react";
import { tools } from "../data/Data";

const Tools = () => {
  const [check, setcheck] = useState(1);

  const getBackgroundColor = (check, color) => {
    switch (check) {
      case 1:
        return color === "#c6d6ff" ? "#c6d6ff" : "";
      case 2:
        return color === "#bddaed" ? "#bddaed" : "";
      case 3:
        return color === "#a8bfff" ? "#a8bfff" : "";
      case 4:
        return color === "#e1e9fe" ? "#e1e9fe" : "";
      case 5:
        return color === "#ced6ee" ? "#ced6ee" : "";
      case 6:
        return color === "#d1dde8" ? "#d1dde8" : "";
      case 7:
        return color === "#dbe5ff" ? "#dbe5ff" : "";
      default:
        return color;
    }
  };

  const handleButtonClick = (value) => {
    if (check === value) {
      setcheck(null);
    } else {
      setcheck(value);
    }
  };

  return (
    <div className="py-[80px] bg-[#f4f7ff]" id="tools">
      <div className="max-w-[1170px] mx-auto px-5 ">
        <h2 className="text-[64px] font-semibold leading-[64px] mb-8 text-[#1b5bf7]">
          Tools
        </h2>

        <div className="flex gap-4 py-[60px] ">
          <button
            className="flex items-center gap-2 font-semibold text-[14px]"
            onClick={() => handleButtonClick(1)}
          >
            <div className=" border-[2px] p-[3px] border-[#1b5bf7] rounded-full">
              <div
                className={`w-[12px] h-[12px]  rounded-full flex justify-center items-center ${
                  check === 1
                    ? "bg-[#1b5bf7] text-white"
                    : "bg-transparent text-black"
                }`}
              ></div>
            </div>
            Frontend
          </button>
          <button
            className="flex items-center gap-2 font-semibold text-[14px]"
            onClick={() => handleButtonClick(2)}
          >
            {" "}
            <div className=" border-[2px] p-[3px] border-[#1b5bf7] rounded-full">
              <div
                className={`w-[12px] h-[12px]  rounded-full flex justify-center items-center ${
                  check === 2
                    ? "bg-[#1b5bf7] text-white"
                    : "bg-transparent text-black"
                }`}
              ></div>{" "}
            </div>
            Backend
          </button>
          <button
            className="flex items-center gap-2 font-semibold text-[14px]"
            onClick={() => handleButtonClick(3)}
          >
            {" "}
            <div className=" border-[2px] p-[3px] border-[#1b5bf7] rounded-full">
              <div
                className={`w-[12px] h-[12px]  rounded-full flex justify-center items-center ${
                  check === 3
                    ? "bg-[#1b5bf7] text-white"
                    : "bg-transparent text-black"
                }`}
              ></div>{" "}
            </div>
            Devops
          </button>
          <button
            className="flex items-center gap-2 font-semibold text-[14px]"
            onClick={() => handleButtonClick(4)}
          >
            <div className=" border-[2px] p-[3px] border-[#1b5bf7] rounded-full">
              {" "}
              <div
                className={`w-[12px] h-[12px]  rounded-full flex justify-center items-center ${
                  check === 4
                    ? "bg-[#1b5bf7] text-white"
                    : "bg-transparent text-black"
                }`}
              ></div>{" "}
            </div>
            Testing
          </button>
          <button
            className="flex items-center gap-2 font-semibold text-[14px]"
            onClick={() => handleButtonClick(5)}
          >
            <div className=" border-[2px] p-[3px] border-[#1b5bf7] rounded-full">
              {" "}
              <div
                className={`w-[12px] h-[12px]  rounded-full flex justify-center items-center ${
                  check === 5
                    ? "bg-[#1b5bf7] text-white"
                    : "bg-transparent text-black"
                }`}
              ></div>{" "}
            </div>
            UX/UI
          </button>
          <button
            onClick={() => handleButtonClick(6)}
            className="flex items-center gap-2 font-semibold text-[14px]"
          >
            <div className=" border-[2px] p-[3px] border-[#1b5bf7] rounded-full">
              <div
                className={`w-[12px] h-[12px]  rounded-full flex justify-center items-center ${
                  check === 6
                    ? "bg-[#1b5bf7] text-white"
                    : "bg-transparent text-black"
                }`}
              ></div>
            </div>
            Infrastructure
          </button>
          <button
            className="flex items-center gap-2 font-semibold text-[14px]"
            onClick={() => handleButtonClick(7)}
          >
            <div className=" border-[2px] p-[3px] border-[#1b5bf7] rounded-full">
              <div
                className={`w-[12px] h-[12px]  rounded-full flex justify-center items-center ${
                  check === 7
                    ? "bg-[#1b5bf7] text-white"
                    : "bg-transparent text-black"
                }`}
              ></div>{" "}
            </div>
            Mobile
          </button>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          {tools.map((item) => (
            <div
              key={item.id}
              className={`w-[85px] h-[90px] flex justify-center items-center flex-col gap-[15px] rounded-[5px]`}
              style={{
                backgroundColor: getBackgroundColor(check, item.color),
                opacity:
                  check === null || getBackgroundColor(check, item.color)
                    ? 1
                    : 0.5,
                // opacity: "0.5",
              }}
            >
              <img
                src={item.img}
                className="w-[24px] h-[24px]"
                alt={item.name}
              />
              <p className="text-[11px]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
