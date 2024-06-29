import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    return (
        <div className='container navWrapper'>
            <div className='NavContainer'>
              
                <nav className='navbar'>
                    <div className='logo'>
                    </div>
                    <ul className='navItem'>
                        <Link className='navLink' to="/">HOME</Link>
                        <Link className='navLink' to="/about">ABOUT</Link>
                        <Link className='navLink' to="/blog">BLOG</Link>
                        <Link className='navLink' to="/skills">SKILLS</Link>
                        <Link className='navLink' to="/portfolio">PORTFOLIO</Link>
                        <Link className='navLink' to="/contacts">CONTACTS</Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
