import React from "react";
import Search_pane from "../SecondHeader/Search_pane";
import My_account from "../SecondHeader/My_account";
import Logo_pane from "../SecondHeader/Logo_pane";

export default function index({ setSearchBox }) {
  return (
    <div className="bottom_header ">
    <div className=" container  mx-auto">
      <div className="header_navbar">
      <Logo_pane />
        <Search_pane setSearchBox={setSearchBox} />
        <My_account />
      </div>
      </div>
    </div>
  );
}
