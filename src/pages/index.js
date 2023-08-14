// import Main from '../Components/Main'
// import SearchPanel from '../Components/SearchPanel'
// import NavigationBar from '@/Components/Header/SecondHeader/NavigationBar'
// import SecondHeader from '../Components/SecondHeader'
import MushqBanner from '@/Components/MushqBanner'
import SliderHeader from '@/Components/SliderHeader'
import ProductComponent from '@/Components/ProductComponent'
import LatestProduct from '@/Components/LatestProduct'
// import Counter from '@/Components/Counter'
// import Footer from '@/Components/Footer'

export default function index() {
  return (
    <div>
      {/* <Main /> */}
      {/* <SecondHeader /> */}
      <MushqBanner/>
      <SliderHeader/>
      <ProductComponent/>
      <LatestProduct/>
      {/* <Counter/> */}
      {/* <Footer/> */}
    </div>
  )
}
