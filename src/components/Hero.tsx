import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="hero" ref={ref}>
            <motion.div
                className="hero-background"
                style={{ y: backgroundY }}
            >
                <div className="hero-overlay"></div>
            </motion.div>

            <motion.div
                className="hero-content"
                style={{ y: textY }}
            >
                <motion.span
                    className="hero-subtitle"
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.3em" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Villa Carlos Paz
                </motion.span>

                <div className="overflow-hidden">
                    <motion.h1
                        className="hero-title"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        Central Paz
                        <span className="hero-title-sub">Hostel & Suites</span>
                    </motion.h1>
                </div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Un escape elegante en el corazón de la ciudad. <br />
                    Experimenta el confort refinado y la comunidad.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="#contact" className="cta-button-large">
                        Contáctanos
                    </a>
                </motion.div>
            </motion.div>

            <motion.a
                href="#about"
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <ChevronDown size={32} color="#fff" strokeWidth={1} />
            </motion.a>
        </section>
    );
};

export default Hero;
