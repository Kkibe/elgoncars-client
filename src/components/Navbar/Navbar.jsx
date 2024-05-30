import { Close, MenuBook, MenuOpen } from '@mui/icons-material';
import Logo from '../../assets/icon.png';
import './Navbar.scss';

import { NavLink} from "react-router-dom";
import { useState } from 'react';
import { Menu } from '@mui/material';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='navbar'>
            <NavLink to="/" className='logo'>
                <img src={Logo}/>
            </NavLink>
            <div className={`navlinks  ${expanded && "active"}`}>
                <NavLink to="/" className='link' title='home' >Home</NavLink>
                <NavLink to="/deals" className='link' title='explore' >Deals</NavLink>
                <NavLink to="/blogs" className='link' title='posts' >Blogs</NavLink>
                <NavLink to="/contact" className='link' title='contact' >Contact Us</NavLink>
            </div>
            <NavLink to={'/register-car'} className="btn">Login</NavLink>
            <NavLink to={'/register-car'} className="btn">Register A Car</NavLink>
            {
                expanded ? <Close className='close'  onClick={() => setExpanded(false)}/> : 
                <MenuOpen className='close'  onClick={() => setExpanded(false)}/>
            }
            
        </div>
    );
}

export default Navbar;
