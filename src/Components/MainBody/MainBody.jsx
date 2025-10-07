import React, { useContext } from "react";
import {
  CodeIcon,
  CompassIcon,
  GalleryIcon,
  LightBulbIcon,
  MessageIcon,
  MicrophoneIcon,
  SendIcon,
} from "../Icons";
import { Context } from "../../Context/context";

export default function MainBody() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const card = [
    {
      icon: CompassIcon,
      text: "Suggest beautiful places to see on an upcoming road trip",
    },
    {
      icon: LightBulbIcon,
      text: "Briefly summarize this concept: urban planning ",
    },
    {
      icon: MessageIcon,
      text: "Suggest beautiful places to see on an upcoming trip",
    },
    {
      icon: CodeIcon,
      text: "Improve the readability of the following code",
    },
  ];
  const hr = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const inputIcon = [{ icon: SendIcon, onClick: () => onSent() }];
  return (
    /* Main */
    <div className="flex-1 min-h-screen pb-[20vh] relative">
      {/* Nav */}
      <div className="flex items-center justify-between text-[22px] p-5 text-[#585858]">
        <p>Gemini</p>
        <img
          src="user.jpg"
          alt="user_image"
          width={30}
          height={10}
          className="rounded-full"
        />
      </div>
      {/* Main Container */}
      <div className="max-w-[900px] mx-auto">
        {!showResult ? (
          <>
            {/* Greet */}
            <div className="my-[50px] mx-0 text-[56px] text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="bg-[linear-gradient(16deg,#4b90ff,#ff5546)] bg-clip-text text-transparent">
                  Hello, Dev.
                </span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            {/* Cards*/}
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-5 ">
              {card.map((item, index) => {
                const IconName = item.icon;
                return (
                  <div
                    className="h-[200px] p-[15px] relative cursor-pointer bg-[#f0f4f9] rounded-lg hover:bg-[#dfe4ea]"
                    key={index}
                  >
                    <p className=" text-[#585858] text-[17px]"> {item.text}</p>
                    <IconName className="w-[35px] h-[35px] p-[5px] absolute rounded-[20px] bottom-2.5 right-2.5 bg-white" />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-auto hide-scrollbar">
            <div className="my-10 mx-0 flex items-center gap-5 ">
              <img
                src="user.jpg"
                alt="user_image"
                width={30}
                height={10}
                className="rounded-full"
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
              <img
                src="logo.png"
                alt="Gemini Logo"
                width={30}
                height={10}
                className=""
              />
              {loading ? (
                <div className="w-full flex flex-col gap-2.5">
                  {hr.map((item, index) => (
                    <hr
                      className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff]  [background-size:800px_20px] h-[20px] hr-animated"
                      key={index}
                    />
                  ))}
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-[17px]  leading-[1.8]"
                ></p>
              )}
            </div>
          </div>
        )}

        {/* Main Bottom */}
        <div className="absolute bottom-0 w-full max-w-[900px] py-0 px-[20px] mx-auto  ">
          {/* Search Box */}
          <div className="flex items-center justify-between gap-5  bg-[#f0f4f9] sm:py-2.5 sm:px-5 py-[5px] px-[10px] rounded-[50px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              className="sm:flex-1 flex-none bg-transparent border-none outline-none p-2 text-[18px]"
            />
            <div className="flex items-center justify-between gap-[5px] sm:gap-2">
              {input ? (
                <SendIcon
                  className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] cursor-pointer"
                  onClick= {() => onSent() }
                />
              ) : null}
            </div>
          </div>
          {/* Bottom Info */}
          <p className="text-[13px] text-[#585858] my-[15px] mx-auto text-center font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}
