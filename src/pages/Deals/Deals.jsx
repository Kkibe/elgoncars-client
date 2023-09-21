import React from 'react';
import Featured from '../../components/Featured/Featured';
import Product from '../../components/Product/Product';
import './Deals.scss';
export default function Deals() {
  return (
    <div className='Deals'>
      <Product />
      <Product />
      <Product />
      <Featured />
    </div>
  )
}
