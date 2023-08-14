import React from "react";
import ProductSlider from "@/Components/ProductSlider";

export default function Slider() {
  const array = [
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300",
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300",
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300",
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300",
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300",
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300",
    },
  ];
  return (
    <div>
      <ProductSlider product={array} value_cols={4} />
    </div>
  );
}
