import React from 'react';
import './Product.scss';

import TTA from '../../assets/TTA.png';
import TY from "../../assets/TY.png";
import Lc300 from "../../assets/lc300.png";

import ToyotaLC from "../../assets/ToyotaLC.jpg";
import FR12v from '../../assets/FR12v.jpg';
import Loader from '../Loader/Loader';

const Data = [
            {
                id:1,
                name: "Smartchat",
                title: "New 2019 Audi 54 Premium Plus",
                img: TTA,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit",
                link: "#", 
                feature: [
                    'Diesel',
                    '3346 cc',
                    '304 bhp & 700 Nm'
                ]
            },
            
            {
                id:2,
                name: "Bigplay",
                title: "Upcider for freelancers",
                img: TY,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#", 
                feature: [
                    'Diesel',
                    '3346 cc',
                    '304 bhp & 700 Nm'
                ]
            },

            {
                id:3,
                name: "Bigshare",
                title: "Upcider for freelancers",
                img: Lc300,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#", 
                feature: [
                    'Diesel',
                    '3346 cc',
                    '304 bhp & 700 Nm'
                ]
            },
            
            {
                id:4,
                name: "DefineAI",
                title: "Upcider for freelancers",
                img: ToyotaLC,
                desc: "We bring you a freelancer platform where we connect skills with market.",
                link: "#", 
                feature: [
                    'Diesel',
                    '3346 cc',
                    '304 bhp & 700 Nm'
                ]
            },
            
            {
                id:5,
                name: "Healthgen",
                title: "Upcider for freelancers",
                img: FR12v,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#", 
                feature: [
                    'Diesel',
                    '3346 cc',
                    '304 bhp & 700 Nm'
                ]
            },
            
            {
                id:6,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: FR12v,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#", 
                feature: [
                    'Diesel',
                    '3346 cc',
                    '304 bhp & 700 Nm'
                ]
            },
        ]

export default function Product() {
  return (
    <div className='products' >
    {
        Data.map(item => {
            return <div className="card" id={item.id}>
                <div className="image-container">
                    <img src={`${item.img}`} alt="" />
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
                <div className="info">
                    <span>Toyota</span>
                    <span>NEW</span>
                </div>
                <div className='btn-container'>
                    <button disabled>$5550</button>
                    <button>BUY NOW &raquo;</button>
                </div>
                
            </div>
            
        })
    }
</div>
  )
}
