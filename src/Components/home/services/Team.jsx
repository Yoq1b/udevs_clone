import team from "../../../assets/team.svg";
const Team = () => {
  return (
    <div className="bg-[#f4f7ff] py-[80px]" id="team">
      <div className="max-w-[1170px] mx-auto px-5 ">
        <h1 className="text-[64px] font-semibold leading-[64px] mb-8 text-[#1b5bf7]">
          Team
        </h1>
        <div className="flex items-center justify-between gap-20">
          <div className="w-[40%]">
            <p className="text-[20px] leading-[40px] font-medium mb-6">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <h2 className="text-[120px] leading-[96px] font-semibold mb-1 text-[#1b5bf7]">
              100+
            </h2>
            <h3 className="text-[40px] leading-[72px] font-extrabold text-[#464359]">
              Dedicated team
            </h3>
          </div>
          <div className="w-[48%]">
            <img src={team} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
