import jivo from "../../../public/jivo.svg";
import { MdOutlineEmail } from "react-icons/md";
const Email = () => {
  return (
    <div className="fixed bottom-0 flex items-center z-50 gap-1  text-[#fff] bg-[#1b5bf7] px-3 py-2 rounded-t-xl rounded-tr-3xl  right-[50px]">
      <MdOutlineEmail />
      <p>Отправить сообщение</p>
      <img src={jivo} alt="" className="w-[30px] ml-4" />
    </div>
  );
};

export default Email;
