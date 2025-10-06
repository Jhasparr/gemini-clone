import React, { useState } from "react";
import {
  ClockIcon,
  MenuIcon,
  MessageIcon,
  PlusIcon,
  QuestionIcon,
  SettingsIcon,
} from "../Icons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  

  const bottomSideBarItems = [
    {
      icon: QuestionIcon,
      text: "Help",
    },
    {
      icon: ClockIcon,
      text: "Activity",
    },
    { icon: SettingsIcon, text: "Settings" },
  ];

  return (
    <div className=" min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px]">
      {/* Top */}
      <div className="top ">
        <MenuIcon className="w-5 h-5 block ml-2.5 cursor-pointer"  onClick={()=> setOpen(prev=>!prev)}/>
        {/* New Chat */}
        <div className=" mt-[50px] inline-flex items-center gap-2.5 py-2.5 px-[15px] bg-[#e6eaf1] rounded-full text-[14px] text-gray-600 cursor-pointer">
          <PlusIcon className="w-5 h-5 " />
          {open && <p>New Chat</p>}
        </div>
        {/* Recent */}
        {open ? (
          <div className=" flex flex-col ">
            <p className="mt-[30px] mb-[30px]">Recent</p>
            {/* Recent Entry */}
            <div className="inline-flex  items-center gap-2.5 p-2.5 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <MessageIcon className="w-5 h-5" />
              <p>What Is React ....</p>
            </div>
          </div>
        ) : null}
      </div>
      {/* Bottom */}
      <div className="flex flex-col">
        {/* Bottom Items */}
        {bottomSideBarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              className="inline-flex items-center gap-2.5 p-2.5 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] "
              key={index}
            >
              <Icon className="w-5 h-5" />
              {open?(<p>{item.text}</p>):null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
