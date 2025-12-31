import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        CENTRAL <span>PAZ</span>
                    </div>

                    <div className="footer-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Booking</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Central Paz Hostel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
