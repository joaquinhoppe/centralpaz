import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container about-grid">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="section-label">Our Philosophy</span>
                    <h2>The Heart of Villa Carlos Paz</h2>
                    <p>
                        Central Paz Hostel offers a unique blend of  <strong>calmness</strong> and <strong>connectivity</strong>.
                        Located just steps away from the iconic Cuckoo Clock and the vibrant City Hall,
                        we provide an oasis of elegance in the middle of the action.
                    </p>
                    <p>
                        Whether you are strolling to the Uruguay Bridge or exploring the local shops and restaurants,
                        everything is within your reach. Returning home means stepping into a space designed for relaxation and refined comfort.
                    </p>
                    <div className="location-tag">
                        <MapPin size={20} />
                        <span>7 min walk to City Hall</span>
                    </div>
                </motion.div>

                <div className="about-image-wrapper">
                    <motion.div
                        className="about-image"
                        style={{ y }}
                    >
                        {/* High quality interior shot */}
                        <div style={{ width: '100%', height: '120%', background: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80) center/cover grayscale(20%)' }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
