import Logo from '../../assets/icon.png';
import './Navbar.scss';

import { NavLink} from "react-router-dom";


const Navbar = () => {
  const handleChange = (active) => {
    //return { color: active ? "#FFF" : "", backgroundColor: active ? "#1253a0" : ""}
  }
    return (
        <div className='navbar'>
            
            <NavLink to="/" className='logo'>
                    <img src={Logo}/>
            </NavLink> 
            <div className='navlinks'>
                <NavLink to="/" className='link' title='home' style={handleChange}>Home</NavLink>
                <NavLink to="/deals" className='link' title='explore' style={handleChange}>Deals</NavLink>
                <NavLink to="/blogs" className='link' title='posts' style={handleChange}>Blogs</NavLink>
                <NavLink to="/contact" className='link' title='contact' style={handleChange}>Contact Us</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
