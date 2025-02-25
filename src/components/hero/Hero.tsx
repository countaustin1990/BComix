import { BsInfoCircle } from 'react-icons/bs';
import { motion } from 'framer-motion'; // Import Framer Motion
import HeroPic from '../../assets/heropic.jpg';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div className="hero bg-primary text-white text-center py-5 container-fluid">
        <div className="container my-5">
          <div className="row">
            {/* Text Column */}
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="hero-text text-4xl font-bold">Comic Creativity</h1>
              <p>
                Welcome to BComic, the ultimate hub for comic enthusiasts and creative minds! Whether you're an artist, writer, or passionate reader, our platform is designed to bring stories to life.
              </p>
              <p>
                <BsInfoCircle /> Explore a world of visually stunning comics.
              </p>

              <motion.div 
                className="flex items-center justify-center mt-4"
                whileHover={{ scale: 1.1 }}
              >
                <Link to="/about">
                  <motion.button 
                    className="hero-button px-4 py-2 text-white rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>  
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img
                src={HeroPic}
                className="img-fluid hero-img mt-5"
                alt="Sample Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
