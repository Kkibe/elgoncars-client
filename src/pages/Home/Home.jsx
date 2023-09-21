import React from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';
import Featured from '../../components/Featured/Featured';
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';
import './Home.scss';
export default function Home() {
  return (
    <div className='Home'>
      <Slider />
      <Product />
      <Featured />
      <Newsletter />
    </div>
  )
}
