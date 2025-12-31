import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLink = (hash: string) => {
        return isHome ? hash : `/${hash}`;
    };

    return (
        <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <Crown size={24} color="#d4af37" strokeWidth={1.5} />
                    CENTRAL <span>PAZ</span>
                </Link>

                <ul className="nav-links">
                    <li><a href={getLink("#about")} className="nav-link">About</a></li>
                    <li><a href={getLink("#amenities")} className="nav-link">Amenities</a></li>
                    <li><a href={getLink("#gallery")} className="nav-link">Gallery</a></li>
                    <li><a href={getLink("#contact")} className="nav-link">Location</a></li>
                </ul>


            </div>
        </nav>
    );
};

export default Navbar;
