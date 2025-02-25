import { useEffect } from "react";
import { Link } from "react-router-dom"
import AboutHero from "../../components/hero/AboutHero.test";



const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div>
      <section className="hero"> {/* Use a semantic element like <section> */}
    
        <div className="hero-content container"> {/* Center content and add padding */}
          <h1 className="hero-title fw-bolder text-white">About Team</h1> {/* More specific title */}
          <p className="hero-subtitle text-white container">
           BComics is a platform created by Austech IO consultancy firm is aimed at making creativity in the comic universe. 
           This platform encourages both creators and readers. 
           Think of it as a one stop to endless comic creativity both the known and unknown.
          </p>
          <div className="hero-cta"> {/* Container for call-to-action */}
            <Link to="/blog">
            <button className="hero-button px-4 py-6 text-white rounded-lg shadow-lg hover:bg-blue-700 p-2">
              Learn More
            </button> {/* Example CTA */}
            </Link>
            
            {/* Add more buttons if needed, e.g., "View Portfolio," "Contact Me" */}
          </div>

          {/* Optional: Add an image or video */}
          {/* <div className="hero-image">
            <img src="/path/to/your/image.jpg" alt="Your Name/Project" />
          </div> */}

        </div>
      </section>
      <AboutHero/>
    </div> 
  );
};

export default About;