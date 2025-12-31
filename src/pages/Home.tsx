import Hero from '../components/Hero';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Amenities />
            <Gallery />
            <Contact />
        </main>
    );
};

export default Home;
