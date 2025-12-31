import { motion } from 'framer-motion';
import { Wifi, Sun, Utensils, Coffee, Shield, Users } from 'lucide-react';
import './Amenities.css';

const amenitiesList = [
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Stay connected with fiber-optic internet throughout the property." },
    { icon: Sun, title: "Sun Terrace", desc: "Relax and unwind on our elegant rooftop terrace with city views." },
    { icon: Utensils, title: "Gourmet Kitchen", desc: "Shared culinary space equipped for the modern traveler." },
    { icon: Coffee, title: "Bar & Lounge", desc: "Curated drinks and social atmosphere in our exclusive bar." },
    { icon: Shield, title: "24/7 Security", desc: "Peace of mind with round-the-clock front desk and security." },
    { icon: Users, title: "Concierge Service", desc: "Expert local recommendations for tours and experiences." },
];

const Amenities = () => {
    return (
        <section id="amenities" className="amenities">
            <div className="container">
                <div className="amenities-header">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Comfort & Class
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Curated Amenities
                    </motion.h2>
                    <motion.p
                        style={{ color: 'var(--color-text-muted)' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Designed for your comfort and community.
                    </motion.p>
                </div>

                <div className="amenities-grid">
                    {amenitiesList.map((item, index) => (
                        <motion.div
                            key={index}
                            className="amenity-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="amenity-icon">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
