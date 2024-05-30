import React, { useEffect, useState } from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';
import Featured from '../../components/Featured/Featured';
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';
import Loader from '../../components/Loader/Loader';
import './Home.scss';

import TTA from '../../assets/TTA.png';
import TY from "../../assets/TY.png";
import Lc300 from "../../assets/lc300.png";

import ToyotaLC from "../../assets/ToyotaLC.jpg";
import FR12v from '../../assets/FR12v.jpg';

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
                ],
                liked: false,
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
                ],
                liked: false,
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
                ],
                liked: false,
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
                ],
                liked: true,
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
                ],
                liked: true,
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
                ],
                liked: true,
            },
        ]
export default function Home() {
    const [data, setData] = useState(null);
    const [fetching, setFetching] = useState(false);
  
    useEffect(() => {
        setData(Data);
    }, [])
  return (
    <div className='Home'>
      <Slider />
      <Featured />
      <div className="post-container">
        {
          data && data.map(item => {
            return <Product item={item} />
          })
        }
        {
            fetching && <><Loader /> <Loader /></>
          }
      </div>
      <Newsletter />
    </div>
  )
}
