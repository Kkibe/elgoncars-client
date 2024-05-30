import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import './Footer.scss';
const Footer = () => {
    return (
        <div className='footer theme'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <a href='https://www.facebook.com/kibetkorirc' title='facebook' target='_blank'><Facebook /></a>
                    <a href='https://www.instagram.com/ancientpupy' title='instagram' target='_blank'><Instagram /></a>
                    <a href='https://twitter.com/ancientpupy' title='twitter' target='_blank'><Twitter /></a>
                    <a href='https://www.youtube.com/@codespear' title='youtube' target='_blank'><YouTube /></a>
                    <a href='https://www.linkedin.com/in/kibetkorir' title='linkedin' target='_blank'><LinkedIn /></a>
                </div >
                
            </div>

            <div className='section-wrapper theme'>
                <section>
                    <h2>Resources</h2>
                    <div className='items-container theme'>
                        <a href='/' title='home'>Home</a>
                        <a href='/deals' title='services'>Cars</a>
                        <a href='/blogs' title='blogs'>Toyota Kenya</a>
                        <a href='/contact' title='help'>Contact Us</a>
                    </div>
                </section>

                <section>
                    <h2>Featured</h2>
                    <div className='items-container theme'>
                        <a href='#' title='help'>Mazda</a>
                        <a href='#' title='services'>Super Cars</a>
                        <a href='#' title='store'>Lamborghini Urus</a>
                        <a href='#' title='store'>Ford Raptor F250</a>
                    </div>
                </section>
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; Bigbutton 2022</p>
                <a title='privacy'>Privacy & cookies</a>
                <a title='terms'>Terms of use</a>
                <a title='help'> Help</a>
            </div>
        </div>
    );
}

export default Footer;
