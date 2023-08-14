import React, { useState } from "react";
import FIrstHeader from "@/Components/Header/FIrstHeader";
import SecondHeader from "@/Components/Header/SecondHeader";
import SearchPanel from "@/Components/Header/SearchPanel";
import NavigationBar from "@/Components/Header/NavigationBar";

export default function index() {
  const [searchbox, setSearchBox] = useState(false);

  return (
    <div>
      <FIrstHeader />
      <NavigationBar setSearchBox={setSearchBox}/>
      {searchbox ? (
        <div className="">
          <SearchPanel setSearchBox={setSearchBox} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
