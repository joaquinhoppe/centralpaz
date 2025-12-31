import { motion } from 'framer-motion';
import { Wifi, Sun, Utensils, Coffee, Shield, Users } from 'lucide-react';
import './Amenities.css';

const amenitiesList = [
    { icon: Wifi, title: "Wi-Fi de Alta Velocidad", desc: "Mantente conectado con internet de fibra óptica en toda la propiedad." },
    { icon: Sun, title: "Terraza Solarium", desc: "Relájate y descansa en nuestra elegante terraza en la azotea con vistas a la ciudad." },
    { icon: Utensils, title: "Cocina Gourmet", desc: "Espacio culinario compartido equipado para el viajero moderno." },
    { icon: Coffee, title: "Bar & Lounge", desc: "Bebidas curadas y ambiente social en nuestro exclusivo bar." },
    { icon: Shield, title: "Seguridad 24/7", desc: "Tranquilidad con recepción y seguridad las 24 horas." },
    { icon: Users, title: "Servicio de Conserjería", desc: "Recomendaciones locales expertas para tours y experiencias." },
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
                        Confort & Clase
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Servicios Exclusivos
                    </motion.h2>
                    <motion.p
                        style={{ color: 'var(--color-text-muted)' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Diseñado para tu confort y comunidad.
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
