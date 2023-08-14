import React from "react";
import Header from "@/Components/Header";
import  Footer from "@/Components/Footer"


export default function index({ children }) {
  return (
    <div>
      <div>
        <Header/>
      </div>
      {children}
      <div><Footer/></div>
    </div>
  );
}
