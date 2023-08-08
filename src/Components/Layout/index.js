import React from "react";
import Header from "@/Components/Header"


export default function index({ children }) {
  return (
    <div>
      <div>
        <Header/>
      </div>
      {children}
      <div>i am footer</div>
    </div>
  );
}
