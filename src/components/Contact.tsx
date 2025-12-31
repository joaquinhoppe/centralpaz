import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Find Us</span>
                    <h2>Begin Your Journey</h2>
                    <p>
                        Experience the best of Villa Carlos Paz from our doorstep.
                        We are ready to welcome you.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="icon-box">
                                <MapPin size={20} />
                            </div>
                            <div className="contact-text">
                                <span className="label">Address</span>
                                <span className="value">Villa Carlos Paz, Córdoba, Argentina</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box">
                                <Phone size={20} />
                            </div>
                            <div className="contact-text">
                                <span className="label">Phone</span>
                                <span className="value">+54 9 3541 123456</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box">
                                <Mail size={20} />
                            </div>
                            <div className="contact-text">
                                <span className="label">Email</span>
                                <span className="value">info@centralpaz.com</span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/QdvjSMQ3ietjAm7b9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button-text"
                    >
                        Get Directions <ArrowRight size={18} />
                    </a>
                </motion.div>

                <motion.div
                    className="map-container"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13620.366367373302!2d-64.4988295!3d-31.4095874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d665a9596677f%3A0xe962e2a537f22312!2sVilla%20Carlos%20Paz%2C%20Cordoba!5e0!3m2!1sen!2sar!4v1703692000000!5m2!1sen!2sar"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
