import React, { useState } from "react";
import {
  ClockIcon,
  MenuIcon,
  MessageIcon,
  PlusIcon,
  QuestionIcon,
  SettingsIcon,
} from "../Icons";
import { useContext } from "react";
import { Context } from "../../Context/context";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt)
  }

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
    <div className=" min-h-screen hidden  sm:inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px] dark:bg-black ">
      {/* Top */}
      <div className="top ">
        <MenuIcon
          className="w-5 h-5 block ml-2.5 dark:text-white cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
        {/* New Chat */}
        <div onClick={()=>newChat()} className=" mt-[50px] inline-flex items-center gap-2.5 py-2.5 px-[15px] bg-[#e6eaf1] dark:bg-gray-600 rounded-full text-[14px] text-gray-600 dark:hover:bg-gray-700 dark:text-white cursor-pointer">
          <PlusIcon className="w-5 h-5 " />
          {open ? <p>New Chat</p>: null}
        </div>
        {/* Recent */}
        {open ? (
          <div className=" flex flex-col fadeIn ">
            <p className="mt-[30px] mb-[30px] ">Recent</p>
            {/* Recent Entry */}
            {prevPrompt.map((item, index) => {
              return (
                <div className="inline-flex  items-center gap-2.5 p-2.5 pr-10 rounded-full text-[#282828] dark:hover:bg-gray-800 cursor-pointer hover:bg-[#e2e6eb]" onClick={() => loadPrompt(item)}>
                  <MessageIcon className="w-5 h-5" />
                  <p className="dark:text-white  ">{item.slice(0,18)} ...</p>
                </div>
              );
            })}
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
              className="inline-flex items-center gap-2.5 p-2.5 pr-10 rounded-full text-[#282828] dark:hover:bg-gray-800 dark:text-white cursor-pointer hover:bg-[#e2e6eb] "
              key={index}
            >
              <Icon className="w-5 h-5" />
              {open ? <p>{item.text}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
