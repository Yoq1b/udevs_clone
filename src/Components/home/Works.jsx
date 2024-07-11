import { works } from "../data/Data";

const Works = () => {
  return (
    <div className="max-w-[1370px] mx-auto px-5 py-[80px] ">
      <h2 className="text-[64px] max-w-[1170px] mx-auto px-5 font-semibold leading-[64px] mb-[100px] text-[#1b5bf7]">
        How we work!
      </h2>

      <div className="flex items-center gap-3 z-30 relative">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzMiIgaGVpZ2h0PSIzIiB2aWV3Qm94PSIwIDAgMTEzMiAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bGluZSBvcGFjaXR5PSIwLjQiIHgxPSIxLjUiIHkxPSIxLjUiIHgyPSIxMTMwLjUiIHkyPSIxLjUiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjAuMiAxMCIvPgo8L3N2Zz4K"
          alt=""
          className="max-w-[1170px] mx-auto px-5 absolute top-10 left-[100px]"
        />
        {works.map((item) => (
          <div key={item.name} className="flex items-center flex-col z-40">
            <img src={item.img} alt="" />
            <h3 className="text-[18px] text-[#333] font-bold">{item.name}</h3>
            <p className=" text-center text-[16px] leading-[26px] px-[10px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Works */}
    </div>
  );
};

export default Works;
