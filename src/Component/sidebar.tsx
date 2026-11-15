import type { LucideIcon } from "lucide-react";
import {
  PanelsTopLeft,
  SquarePlus,
  Activity,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { UsersRound, Settings } from "lucide-react";
import Side from "./Side";
import React from "react";
type SideProp = {
  text: string;
  icon: LucideIcon;
};
const below: SideProp[] = [
 {text:"Board",icon:PanelsTopLeft},
 {text:"Member",icon:UsersRound},
 {text:"Setting",icon:Settings}
]

const ArrayIcon: SideProp[] = [
  { text: "Board", icon: PanelsTopLeft },
  { text: "Template", icon: SquarePlus },
  { text: "Home", icon: Activity },
];

export default function Sidebar() {
    const[count,Setcount]=React.useState(false);
    function handleClick(){
        Setcount(C=>!C)
    }
  return (
    <div>
      <div className="w-[298px] h-[585px] px-3 text-amber-50 text-sm">
        {ArrayIcon.map((x) => (
          <Side {...x} />
        ))}
        <div className="h-[1px] w-[254px] bg-gray-700"></div>
        <p className="px-8 pt-8 text-gray-400 text-[14px]">workplace</p>
        <div
          className="flex justify-center gap-2w-[282px] h-[37px] mt-5"
          onClick={handleClick}
        >
          <div className="w-[28px] h-[28px] bg-[rgb(3,210,155)] text-black font-bold  flex px-2 items-center rounded-sm text-[16px]">
            T
          </div>
          <p className={`${count ? "text-gray-200 hover:bg-blue-600" : "text-blue-200"} text-[16px] pt-1 capitalize ml-2`}>
            trello WorkPlace
          </p>
          <div className="mt-1 ml-3">
            {count ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>
      { count && <div className="ml-10">
          {below.map((x) => (
            <Side {...x} />
          ))}
        </div>}
      </div>
    </div>
  );
}
