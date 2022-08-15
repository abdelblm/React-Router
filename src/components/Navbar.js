import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <div className=" flex justify-center ">
        <div className=" flex  justify-between lg:justify-around pt-2 border-b border-[#0000001A]">
          <div className="flex mt-1 text-white text-[20px] mr-60  ">
            <BsFillCheckCircleFill className="mt-1" />
            <span className="text-xl font-[poppins]  ">Pomofocus</span>
          </div>

          <div className="flex pb-3">
            <div className="flex bg-[#ffffff33] text-white rounded-md text-xs  m-2 p-2 ">
              <VscGraph className="mt-1 text-[20px] lg:[13px]" />
              <button className="hidden ml-1 lg:inline ">Report</button>
            </div>
            <div className="flex bg-[#ffffff33] text-white rounded-md text-xs m-2 p-2">
              <AiOutlineSetting className="mt-1 text-[20px] lg:[13px]" />
              <button className="hidden ml-1 lg:inline">Setting</button>
            </div>
            <div className="flex bg-[#ffffff33] text-white rounded-md text-xs m-2 p-2">
              <FiLogIn className="mt-1 text-[20px] lg:[13px]" />
              <Link className="hidden ml-1 lg:inline" to="/Loging">Loging</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
