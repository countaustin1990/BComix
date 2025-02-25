import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Abouthero from "../../components/hero/AboutHero.test";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div>
      <section className="hero">
        {/* Motion wrapper for fade-in and slide-up effect */}
        <motion.div
          className="hero-content container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title fw-bolder text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Team
          </motion.h1>

          <motion.p
            className="hero-subtitle text-white container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            BComics is a platform created by Austech IO consultancy firm aimed at
            making creativity in the comic universe. This platform encourages
            both creators and readers. Think of it as a one-stop hub for endless
            comic creativity, featuring both the known and unknown.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/blog">
              <motion.button
                className="hero-button px-4 py-6 text-white rounded-lg shadow-lg p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Abouthero />
    </div>
  );
};

export default About;
