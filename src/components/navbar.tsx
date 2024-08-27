import { FaDiscord } from "react-icons/fa6";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full text-white h-[65px] bg-black">
      <div className="flex justify-between xl:mx-14 px-14 xs:px-4 p-4 items-center">
        <div>
          <h4 className="scroll-m-20 xs:w-[5.3rem] text-xl xs:text-base font-semibold tracking-tight">
            Name Bot
          </h4>
        </div>
        <ul className="flex items-center gap-3 cursor-pointer">
          <li className="text-base font-medium hover:text-gray-300 transition-all ease-in">
            Home
          </li>
          <li className="text-base font-medium hover:text-gray-300 transition-all ease-in">
            Sobre
          </li>
          <li className="text-base font-medium hover:text-gray-300 transition-all ease-in">
            Termos
          </li>
        </ul>
        <div>
          <Button className="gap-1" variant={"outline"}>
            <FaDiscord color="white" size={20} />
            Suporte
          </Button>
        </div>
      </div>
    </div>
  );
}
