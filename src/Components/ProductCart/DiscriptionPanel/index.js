import React from "react";
import Onlypic_slider from '@/Components/ProductCart/Onlypic_slider'


export default function index() {
  let Cartarr = [
    {
      ProductTitle: "Lakhany Pret Embroidered Cambric Kurti LSM23E LG-SR-0128",
      BrandNumber: "SKU:",
      BrandCode: "507751",
      DescriptionTitle: "DESCRIPTION",
      BrandDescription:
        "3 Piece Embroidered Unstitched Suits from Danayah By Republic Womenswear Unstitched Winter Collection",
      Color: "Color:",
      colorName: "Purple",
      BrandName: "Brand:",
      BrandTitle: "Republic  WaomensWer",
      FabricTitle: " Shirt Fabric:",
      FabricName: "Velvet",
      CatalogTitle: "Catalog:",
      CatalogContent: ", By Republic Womenswear Unstitched Winter Collection",
      CategeorisTitle: "Categeoris:",
      CategeorisContent:
        "New Arrivals, Unstitched Suits, Sales and Discounts, Flat 30% OFF, Ladies Winter Collection , Republic WomensWear, Republic WomensWear Discounts,Promo Codes & Sales, Latest Collections, Flat 20% OFF, Ladies Purple Dresses, Danayah By Republic Womenswear Unstitched Winter Collection",
    },
  ];
  return Cartarr.map((e) => (
    <div className="w-[35%]">
      <div className=" font-Montserrat text-contentColor  text-sm p-5">
        <h4 className=" text-black  leading-7 font-medium  text-xl">{e.ProductTitle}</h4>
        <p className="text-contentColor mt-2">
          <strong> {e.BrandNumber} </strong>
          {e.BrandCode}
        </p>
        <div className=" mt-2">
          <h6 className="text-center mt-2  pb-2 font-bold border-b-2  w-24 border-pinkColor m-auto  uppercase rounded-lg  text-xs ">
        {e.DescriptionTitle}
          </h6>
          <p className=" mt-4">{e.BrandDescription}</p>
          <ul className=" leading-7 mt-2">
            <li>
            
              <strong> {e.Color} </strong> {e.colorName}
            </li>
            <li>
              <strong>{e.BrandName} </strong>{e.BrandTitle}
            </li>
            <li>
              <strong> {e.FabricTitle} </strong> {e.FabricName}
            </li>
            <li>
              <strong>{e.CatalogTitle}</strong>{e.CatalogContent}
            </li>
          </ul>
          <div className="bg-scroll mt-2  bg-sc scroll-smooth overflow-y-scroll p-4  h-28 border">
            <h6 className="  mt-3  pb-2 font-bold   text-black   capitalize  text-xs ">{e.CategeorisTitle}</h6>
            <div className=" ">
             <p>{e.CategeorisContent}</p>
            </div>
          </div>
        </div>
      </div>
  
      <Onlypic_slider/>

    </div>
  ));
}
