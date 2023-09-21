import { Send } from '@mui/icons-material';
import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
    return (
        <div className='newsletter theme'>
            <h1>
                SUBSCRIBE
            </h1>
            <p>
                Subscribe to our news feeds, kindly fill the form below.
            </p>
            <form>
                <input type='email' placeholder='Email Address'/>
                <button>
                    <Send />
                </button>
            </form>
        </div>
    );
}

export default Newsletter;
