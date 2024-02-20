import React from 'react';
import './Product.scss';
import { Rating } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';


export default function Product({item}) {
const value = 2;
  
  return (
            <div className="product" id={item.id}>
                <div className="image-container">
                    <img src={`${item.img}`} alt="" />
                </div>
                {
                    item.liked ? <Favorite className='liked-btn'/> : <FavoriteBorder className='like-btn'/>
                }
                <div className="content">
                    <h1>{item.title}</h1>
                    <p>
                        <ul>
                            {item.feature.map(feature => {
                                return <li key={feature}>{feature}</li>
                            })}
                        </ul>
                    </p>
                </div>
                <div className="info">
                    <span>Toyota</span>
                    <span>USED</span>
                </div>
                <Rating name="read-only" value={value} readOnly />
                <div className='btn-container'>
                    <button disabled>$5550</button>
                    <button>BUY NOW &raquo;</button>
                </div>
                
            </div>
  )
}
