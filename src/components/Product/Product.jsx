import React from 'react';
import './Product.scss';
import { Rating } from '@mui/material';
import { Favorite, FavoriteBorder, StarRate } from '@mui/icons-material';
import 'intasend-inlinejs-sdk'


export default function Product({item}) {
const value = 2;
new window.IntaSend({
    publicAPIKey: "<Your Public Key>",
    live: false //or true for live environment
  })
  .on("COMPLETE", (response) => { console.log("COMPLETE:", response) })
  .on("FAILED", (response) => { console.log("FAILED", response) })
  .on("IN-PROGRESS", () => { console.log("INPROGRESS ...") })
  
  return (
            <div className="product" id={item.id}>
                <div className="image-container">
                    <img src={`${item.img}`} alt="" />
                </div>
                {
                    item.liked ? <Favorite className='liked-btn'/> : <FavoriteBorder className='like-btn'/>
                }
                <div className="info">
                    <span>Toyota Kenya</span>
                    <span>
                        <StarRate className='rate'/>
                        5.3 K
                    </span>
                    <span>new</span>
                </div>
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
                
                <div className='btn-container'>
                    <button disabled>$ 5550</button>
                    <button className="intaSendPayButton" data-amount="10" data-currency="KES">BUY NOW &raquo;</button>
                </div>
                
            </div>
  )
}
