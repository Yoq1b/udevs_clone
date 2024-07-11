import img from "../../../assets/dev.png";
import bg from "../../../assets/bg.jpeg";
import car from "../../../assets/car.svg";
import img1 from "../../../assets/web.svg";
import img2 from "../../../assets/dev2.svg";
import img3 from "../../../assets/dev3.svg";
import img4 from "../../../assets/dev4.svg";
import img5 from "../../../assets/dev5.svg";
import logo from "../../../../public/delever.svg";
// import img6 from "../../../assets/dev6.svg";
const Delever = () => {
  const designs = [
    {
      id: 1,
      name: "Website",
      img: img1,
    },
    {
      id: 2,
      name: "Admin panel",
      img: img2,
    },
    {
      id: 3,
      name: "Crossplatform",
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
  ];

  return (
    <div
      className="py-20"
      id="delever"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="max-w-[1170px] mx-auto px-5 items-center flex justify-between">
        <div className="w-[48%]">
          <img src={img} alt="" />
        </div>
        <div className="w-[48%]">
          <h2 className=" mb-[60px] ">
            <img src={logo} alt="" />
          </h2>
          <div className="bg-[#ffddd3] py-2 px-4 w-[125px] mt-[10px] rounded-full text-[#ff5722] flex items-center gap-2 ">
            <img src={car} alt="" />
            <p>Delivery</p>
          </div>
          <p className="mt-[40px] text-[20px] font-semibold leading-[40px] text-[#46445a]">
            Delever - Delivery service automation targeted at both consumers and
            restaurants.
          </p>
          <h3 className="text-[25px] font-semibold mt-[20px]">What we did?</h3>
          <div className=" grid grid-cols-3 gap-[20px] pt-[20px]">
            {designs.map((item) => (
              <div
                className="w-[150px] h-[118px] rounded-lg bg-[#f4f7ff] p-[10px] pr-[20px]"
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
  );
};

export default Delever;
