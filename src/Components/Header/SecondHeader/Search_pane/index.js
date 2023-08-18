import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function index({ setSearchBox }) {
  const [content, setContent] = useState("");
  return (
    
      <div className="search_bar">
        <input
          onBlur={()=>setSearchBox(false)}
          onFocus={() => setSearchBox(true)}
          onChange={(e) => {
            setContent(e.target.value);
            setSearchBox(true)
          }}
        />
        <span className="search_icon">
          <BsSearch></BsSearch>
        </span>
      </div>

  );
}
