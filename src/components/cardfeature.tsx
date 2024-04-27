import { ReactNode } from "react";

interface props {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardFeature(item: props) {
  return (
    <div className="w-[20rem]">
      <div className="">
        <div className="flex items-center justify-center bg-gray-500 bg-opacity-45 shadow-[0_0_5px_5px_rgba(107,114,128,0.45)] w-5rem h-5rem  m-auto rounded-full ">
          <div className="flex">{item.icon}</div>
        </div>
        <h1 className="my-2 scroll-m-20 text-lg font-semibold tracking-tight capitalize">
          {item.title}
        </h1>
        <p className="text-sm font-medium leading-4 text-gray-300">{item.description}</p>
      </div>
    </div>
  );
}
