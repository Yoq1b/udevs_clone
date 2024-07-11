import mobileBg from "../../../assets/mobilebg.png";
import mobile from "../../../assets/mobile.png";
import apple from "../../../assets/apple.svg";
import android from "../../../assets/android.svg";
import cros from "../../../assets/cros.svg";
import bg from "../../../assets/bg.jpeg";
import swift from "../../../assets/swift.svg";
import kotlin from "../../../assets/kotlin.svg";
import flutter from "../../../assets/flutter.svg";
const Mobile = () => {
  return (
    <div
      className="relative"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      {/* <div className=""></div> */}
      <div className="max-w-[1170px] mx-auto px-5 py-[80px]" id="mobile">
        <h1 className="text-[64px] font-semibold leading-[64px] mb-8 text-[#1b5bf7]">
          Development of mobile <br /> applications
        </h1>
        <div className="flex justify-between pt-5">
          <div className="w-[40%]">
            <p className="text-[24px] leading-[40px] font-medium mb-6">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <div className="flex gap-[20px] my-[40px]">
              <div className="p-[10px] pr-[20px] w-[150px] h-[118px] rounded-lg bg-[#f4f7ff]">
                <img src={apple} alt="" />
                <p className="text-[18px] leading-[30px] font-semibold mt-[12px]">
                  iOS
                </p>
              </div>
              <div className="p-[10px] pr-[20px] w-[150px] h-[118px] rounded-lg bg-[#f4f7ff]">
                <img src={android} alt="" />
                <p className="text-[18px] leading-[30px] font-semibold mt-[12px]">
                  Android
                </p>
              </div>
              <div className="p-[10px] pr-[20px] w-[160px] h-[118px] rounded-lg bg-[#f4f7ff]">
                <img src={cros} alt="" />
                <p className="text-[18px] leading-[30px] font-semibold mt-[12px]">
                  Crossplatform
                </p>
              </div>
            </div>
            <h2 className="text-[32px] mb-6 font-bold first-line: text-[#464359]">
              Technologies
            </h2>
            <div className="flex gap-[50px]">
              <div className="flex flex-col gap-3">
                <img src={swift} alt="" className="w-[56px] h-[56px]" />
                <p className="text-[20px] leading-[30px] font-semibold">
                  Swift
                </p>
              </div>{" "}
              <div className="flex flex-col gap-3">
                <img src={kotlin} alt="" className="w-[56px] h-[56px]" />
                <p className="text-[20px] leading-[30px] font-semibold">
                  Kotlin
                </p>
              </div>{" "}
              <div className="flex flex-col gap-3">
                <img src={flutter} alt="" className="w-[56px] h-[56px]" />
                <p className="text-[20px] leading-[30px] font-semibold">
                  Flutter
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

export default Mobile;
