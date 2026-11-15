
import { LayoutGridCircles,Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Megaphone, Bell, CircleHelp } from "lucide-react";
import { Icon } from "./Icon";
export default function Header(){
    type Button={
        title:string;
        icon:LucideIcon;
    }

const buttons:Button[]= [
  { title: "Home", icon: Megaphone},
  { title: "Search", icon: Bell },
  { title: "Settings", icon: CircleHelp },
];
    return (
      <div className="w-[1515px] h-[60px] ">
        {/* creating the flex  */}
        <div className=" flex justify-around pl-3 pt-3 ">
          {/* trello logo */}
          <div className="flex justify-start  w-[207px] h-[60px] bg- pt-3 gap-1">
            <LayoutGridCircles size={22} color="gray" className="mr-2" />
            <img
              src="src\assets\trellologo.jpg"
              alt="logo"
              className="w-5 h-5 rounded-sm"
            />
            <p className="text-white text-sm capitalize font-semibold">
              Trello
            </p>
          </div>
          {/* search space */}
          <div className="flex justify-center h-[] pt-2">
            <div className="relative outline-2 outline-amber-50 w-[779px] h-[33px] rounded-sm  flex gap-2 bg-gray-700">
              <Search
                className="w-[14px] h-[16px] absolute top-2 left-2 "
                color="rgb(254, 243, 199)"
              />
              <input
                type="search"
                placeholder="search..."
                className="absolute left-6 top-1 text-amber-50 ml-2 capitalize "
              />
            </div>
            <div>
              <button className="ml-2 h-[36px] w-[76px] rounded-md bg-blue-400 hover:bg-blue-200">
                Create
              </button>
            </div>
          </div>

          <div className="flex justify-end w-[237px] h-[]  ml-10">
            {buttons.map((x) => (
              <Icon {...x} />
            ))}
            <div className="w-[31px] h-[30px] bg-[rgba(5,204,191,0.79)]  mr-4 rounded-4xl p-2 align-center mb-3 mt-3 ">
  <p className="text-[10px]">MN</p>
            </div>
        
          </div>
        </div>
      </div>
    );
}