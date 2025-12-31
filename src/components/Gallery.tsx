import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Gallery.css';

const images = [
    { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200', title: 'Luxury Suites', subtitle: 'Rest in style' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800', title: 'Relaxing Atmosphere', subtitle: 'Unwind completely' },
    { url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800', title: 'Social Lounge', subtitle: 'Meet & Connect' },
    { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800', title: 'Modern Design', subtitle: 'Esthetics everywhere' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <motion.div
                    className="gallery-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Visual Experience</span>
                    <h2>A Glimpse of Elegance</h2>
                </motion.div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img src={img.url} alt={img.title} />
                            <div className="gallery-item-overlay">
                                <div className="gallery-text">
                                    <h3>{img.title}</h3>
                                    <span>{img.subtitle}</span>
                                </div>
                                <button className="gallery-icon">
                                    <ArrowUpRight size={24} color="#000" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
