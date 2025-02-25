import { BsInfoCircle } from "react-icons/bs"; // Using react-icons for Bootstrap icons
import HeroPic from "../../assets/heropic.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-primary text-white text-center py-5 container-fluid">
        <div className="text-area">
          {/* Two Column Layout */}
          <div className="container my-5">
            <div className="row">
              {/* Text Column */}
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="hero-text">About BComic Creativity</h1>
                <p>
                  Bcomic is a vibrant comic space designed for both readers and
                  creators to explore, share, and experience the world of
                  storytelling like never before. Whether you’re a fan of
                  action-packed adventures, deep fantasy realms, or slice-of-life
                  narratives, Bcomic brings stories to life in a dynamic and
                  engaging way.
                </p>
                <p>
                  <BsInfoCircle /> Explore a world of visually stunning comics.
                </p>

                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/contact">
                    <motion.button
                      className="hero-button px-4 py-6 text-white rounded-lg shadow-lg hover:bg-blue-700 p-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Column */}
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <motion.img
                  src={HeroPic}
                  className="img-fluid hero-img mt-5"
                  alt="Sample Image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
