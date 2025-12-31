import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-grid">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="section-label">Nuestra Filosofía</span>
                    <h2>El Corazón de Villa Carlos Paz</h2>
                    <p>
                        Central Paz Hostel ofrece una mezcla única de <strong>calma</strong> y <strong>conectividad</strong>.
                        Ubicado a pasos del icónico Reloj Cucú y el vibrante Palacio Municipal,
                        ofrecemos un oasis de elegancia en el medio de la acción.
                    </p>
                    <p>
                        Ya sea que estés paseando hacia el Puente Uruguay o explorando las tiendas y restaurantes locales,
                        todo está a tu alcance. Volver a casa significa entrar en un espacio diseñado para la relajación y el confort refinado.
                    </p>
                    <div className="location-tag">
                        <MapPin size={20} />
                        <span>7 min caminando al Palacio Municipal</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
