import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: string;
  description: string;
}

export function Feature(item: Props) {
  return (
    <div className="flex items-center space-x-4 p-4 text-white rounded-lg">
      {item.icon !== undefined && (
        <div className="flex items-center justify-center p-2 bg-green-500 rounded-full">
          {item.icon}
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-300">{item.description}</p>
      </div>
    </div>
  );
}
