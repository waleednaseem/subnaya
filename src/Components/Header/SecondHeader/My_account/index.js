import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { BiSolidCartAlt } from "react-icons/bi";
import Modal from "react-modal";
import Login from "@/Components/Login_SignupModal/Login";
import Signup from "@/Components/Login_SignupModal/Signup";
export default function index() {
  const [ClosedModal, setClosedModal] = useState(false);
  const Menus = ["login", "track your order", "my wish list"];
  const [open, Setopen] = useState(false);
  const [acc, Setacc] = useState(true);
  const currencies = ["pkr", "usd", "usdt"];
  return (
    <div>
      <div>
        <Modal
          isOpen={ClosedModal}
          className={
            "m-auto w-[45%] shadow-md outline-none my-4 h-[70%] overflow-y-auto  shadow-zinc-600 bg-white p-6 z-40"
          }
        >
          <div
            className="w-[100%] flex justify-end px-5 cursor-pointer"
            onClick={() => setClosedModal(false)}
          >
            X
          </div>
          {acc ? <Login Setacc={Setacc} /> : <Signup Setacc={Setacc} />}
        </Modal>
      </div>
      <div className="socil_links">
        <ul>
          <li>
            <a
              className="user_info"
              onClick={() => Setopen(!open)}
            >
              <FaUserAlt className="mr-1.5" /> My account
              <BsChevronDown className=" mt-1 ml-1  text-sm	" />
            </a>
            {open && (
              <ul className="drop_down">
                {Menus.map((menu, i) => (
                  <li
                    onClick={() =>
                      menu == "login" && (setClosedModal(true), Setopen(false))
                    }
                    key={i}
                  >
                    {menu}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <ul className="currency_unit">
          <li><a> PKR<BsChevronDown className="text-sm ml-2"/></a></li>
        </ul>
        <ul className="pro_cart text-contentColor">
          <li className="mr-2">
            <a><BiSolidCartAlt className="add_cart"/>Cart  </a>
          </li>
          <li>
            <a className="qty">0</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
