import React, { useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import { PiTruckFill } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
// import { useSpeedDial } from "@material-tailwind/react";

export default function index() {
  const [addCount, setaddCount] = useState(1);
  const MinusIcon = () => {
    setaddCount(addCount - 1);
  };
  const PlusIcon = () => {
    setaddCount(addCount + 1);
  };

  return (
    //  FIRST DIV
    <div className="w-[35%] bg-bgprimary rounded-lg p-4">
      <div className=" mt-3 p-2 bg-white rounded-sm relative">
        <div className="flex">
          <input type="checkbox"></input>
          <label className=" uppercase  text-contentColor pl-1  font-bold text-sm font-Montserrat">
            GET IT STITCHED
            <span className=" pl-3 text-IconColor text-base font-medium">
              +
            </span>
            <span>PKR6,000.00</span>
          </label>
        </div>
      </div>
      {/* //  SECOND  DIV */}

      <div className=" mt-7">
        <h4 className=" text-orange-900 text-center font-bold pb-2 text-3xl">
          Rs. 5,950.00
        </h4>
        <div className="flex  w-[70%] m-auto bg-purple-900 rounded-3xl">
          <div className="rounded-3xl text-white  bg-pink-600  px-4 p-1">
            <div className=" rounded-3xl">
              <h5 className="font-bold">
                <span className=" text-yellow-800     text-lg  font-Montserrat">
                  s
                </span>
                ubnaya
              </h5>
            </div>
          </div>
          <div className="flex font-bold  font-Montserrat justify-center  m-auto  align-middle">
            <h6 className=" text-white pr-2">POINTS </h6>{" "}
            <span className=" text-yellow-500">155</span>{" "}
          </div>
        </div>
      </div>
      {/* THIRD DIV */}
      <div>
        <div className="border w-[40%] m-auto mt-3 p-2">
          <div className="flex justify-center  align-middle">
            <span className=" text-3xl">
              <BiMinusCircle onClick={() => MinusIcon()} />
            </span>
            <input
              className=" bg-transparent outline-none  w-[30%] text-center"
              value={addCount}
              id="qty"
              onChange={(e) => setaddCount(e.target.value)}
            ></input>

            <span className=" text-3xl text-black">
              <BiPlusCircle onClick={() => PlusIcon()} />
            </span>
          </div>
        </div>
        <button className="  flex justify-center cursor-pointer mt-5 font-bold uppercase  m-auto p-2  w-[50%] bg-red-800 text-white  text-base font-Montserrat">
          Added
        </button>
      </div>

      {/* FOURTH DIV */}
      <div className="mt-4 p-2 bg-white rounded-sm relative">
        <div className="flex justify-around">
          <div className=" relative ">
            <span className=" text-3xl">
              <PiTruckFill />
            </span>
            <div className=" absolute text-green-400 text-sm  bg-white  top-0  left-3 ">
              <AiFillCheckCircle />
            </div>
          </div>
          <label className=" uppercase  text-contentColor  my-2 font-bold  text-xs font-Montserrat">
            Est. Shipping Date
            <span className=" bg-black text-white p-2  ml-2">
              01, Aug - 03, Aug 23
            </span>
          </label>
        </div>
      </div>
      
    </div>
  );
}
