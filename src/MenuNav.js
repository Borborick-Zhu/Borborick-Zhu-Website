import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MainMenu from './assets/main-menu.png'

function DesktopMenu() {
    return (
        <div className="options">
        <Link to='/' className="link"> HOME </Link>
        <Link to='/about' className="link"> ABOUT </Link>
        <h1>BORBORICK ZHU</h1>
        <Link to='/projects' className="link"> PROJECTS </Link>
        <Link to='/misc' className="link"> MISC </Link>
    </div>
    )
}

function MenuBar() {
    return (
        <nav>
          <ul className="menu-bar-list">
            <li><Link to='/' className="link"> HOME </Link></li>
            <li><Link to='/about' className="link"> ABOUT </Link></li>
            <li><Link to='/projects' className="link"> PROJECTS </Link></li>
            <li><Link to='/misc' className="link"> MISC </Link></li>
          </ul>
        </nav>
    )
}


export default function MenuNav() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth <= 600);
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    function MobileMenu() {
        return (
            <div>
                <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen && <MenuBar/>}
                    {!menuOpen && <div className="secondary-home">
                        <img className="menu-icon" src={MainMenu} alt=""/>
                        </div>}
                </button>
            </div>
          );
    }

    return (
        <div className="secondary-home">
            <div>
                {isMobile ? <MobileMenu/> : <DesktopMenu/>}
            </div>
        </div>
    )
}
