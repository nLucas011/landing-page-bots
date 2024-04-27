import { FaDiscord } from "react-icons/fa6";

export function Navbar() {
  return (
    <div className="fixed z-50 w-full start-0 text-white h-[65px] bg-black pb-10">
      <div className="flex justify-between xl:mx-14 px-14 xs:px-4 p-4 items-center">
        <div>
          <h4 className="scroll-m-20 xs:w-[5.3rem] text-xl xs:text-base font-semibold tracking-tight">
            Discord Bot
          </h4>
        </div>
        <div>
          <ul className="flex items-center gap-3 cursor-pointer">
            <li className="text-base font-medium hover:text-gray-300 hover:transition-all hover:ease-in ">
              Home
            </li>
            <li className="text-base font-medium hover:text-gray-300 hover:transition-all hover:ease-in ">
              Sobre
            </li>
            <li className="text-base font-medium hover:text-gray-300 hover:transition-all hover:ease-in ">
              Suporte
            </li>
            <li className="ml-2 hover:scale-[1.16] hover:transition-all hover:ease-in">
              <FaDiscord color="white" size={20} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
