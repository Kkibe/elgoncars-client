import { AllInclusive, DownloadDoneOutlined,FindInPage, HighQualityOutlined, MoneyOffOutlined} from '@mui/icons-material';
import React from 'react';

import Rolls from '../../assets/rolls.png';
import Toyota from '../../assets/Toyota.png';
import Benz from '../../assets/benz.png';
import Bmw from '../../assets/bmw.png';
import './Featured.scss';


const Featured = () => {
    return (
    <section className="featured">
        <h1>Explore Brands</h1>
        <div className="wrapper">
            <div className="item">
                <h1 ><img src={Rolls} /></h1>
            </div>
            <div className="item">
                <h1 ><img src={Toyota} /></h1>
            </div>
            <div className="item">
                <h1 ><img src={Bmw} /></h1>
            </div>
            <div className="item">
                <h1 ><img src={Benz} /></h1>
            </div>
        </div>
    </section>
    );
}
export default Featured;