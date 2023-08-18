

import Banner from "@/Components/Banner";
import SliderHeader from "@/Components/SliderHeader";
import ProductComponent from "@/Components/ProductComponent";
import LatestProduct from "@/Components/LatestProduct";
import Layout from "@/Components/Layout";

export default function index() {
  return (
    <Layout>
      <Banner />
      <SliderHeader />
      <ProductComponent />
      <LatestProduct />
    </Layout>
  );
}
