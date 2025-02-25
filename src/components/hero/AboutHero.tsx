import { BsInfoCircle } from 'react-icons/bs'; // Using react-icons for Bootstrap icons
import HeroPic from '../../assets/heropic.jpg'
import { Link } from 'react-router-dom'


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
          <div className="col-lg-6">
            <h1 className='hero-text'>About BComic Creativity</h1>
            <p>
            Bcomic is a vibrant comic space designed for both readers and creators to explore, share, and experience the world of storytelling like never before. Whether you’re a fan of action-packed adventures, deep fantasy realms, or slice-of-life narratives, Bcomic brings stories to life in a dynamic and engaging way. 
            </p>
            <p>
              <BsInfoCircle /> Explore a world of visually stunning comics.
            </p>

            <div className="flex items-center justify-center h-screen">
              <Link to='/contact'>
                <button className="hero-button px-4 py-6 text-white rounded-lg shadow-lg hover:bg-blue-700 p-2">
                    Get Started
                </button>
              </Link>  
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6">
            <img
              src={HeroPic}
              className="img-fluid hero-img mt-5"
              alt="Sample Image"
            />
          </div>
        </div>
      </div>
          </div>
        
      </div>

     
    </div>
  );
};

export default AboutHero;
