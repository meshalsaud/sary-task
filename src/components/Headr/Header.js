import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex pt-4  justify-between px-6">
      <div className="flex space-x-4 text-primary-50">
        <div className=""> الاسئلة الشائعة</div>
        <div className=""> الشهادات </div>
        <div className=""> سياسة الخصوصية </div>
        <div className=""> معلومات عنا</div>
      </div>

      <div className="flex space-x-3 items-baseline">
        <div className="flex">
          <FaHeadset className="h-6 w-6 mx-2" />
          <span className="text-primary-50">0500953936</span>
        </div>

        <button className="flex space-x-3 bg-whites py-1 pr-6 pl-2 justify-around rounded-full border-2 border-black">
          <div className="flex-1 p-1 rounded-full bg-primary-0 flex items-center justify-center">
            <BsArrowLeftShort className="text-white h-5 w-5" />
          </div>
          <span className="flex text-primary-50">كن تاجر</span>
        </button>
        <button className="flex space-x-3 bg-whites py-1 pr-6 pl-2 justify-around rounded-full border-2 border-black">
          <div className="flex-1 p-1 rounded-full bg-primary-0 flex items-center justify-center">
            <BsArrowLeftShort className="text-white h-5 w-5" />
          </div>
          <span className="flex text-primary-50">كن مستهلك</span>
        </button>
      </div>
    </div>
  );
};
