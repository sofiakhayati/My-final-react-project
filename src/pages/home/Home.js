import React from 'react'
import {Category} from '../../components/category/Category'
import { Footer } from '../../components/footer/Footer'
import Order from '../../components/hero/Order'
import Slider from "../../components/hero/Slider"
import Product from '../../components/product/Product'
function Home() {
   
  return (
    <>
    <Slider />
    <Order />
    <Category />
    <Product />
    <Footer />
    </>
  )
}

export default Home