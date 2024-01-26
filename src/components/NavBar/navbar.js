import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>ABOUT</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>HISTORY</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>PORTFOLIO</Link>
        </div>
        <button className='desktopMenuButton' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>Contact Me</button>

        <img src={menu} alt='Menu' className='mobileLogo' onClick={() => setShowMenu(!showMenu)}/>
        <div className='mobileMenu' style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>ABOUT</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>HISTORY</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>PORTFOLIO</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>CONTACT</Link>
        </div>
    </nav>
  )
}

export default Navbar