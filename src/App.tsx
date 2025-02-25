import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsInfoCircle } from 'react-icons/bs'; // You can also use react-icons for Bootstrap icons

const App: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-primary text-white text-center py-5 container">
        <h1>Welcome to Our Page</h1>
        <p className="lead">This is a simple example using React, TypeScript, and Bootstrap</p>
      </div>

      {/* Two Column Layout */}
      <div className="container my-5">
        <div className="row">
          {/* Text Column */}
          <div className="col-lg-6">
            <h2>Text Section</h2>
            <p>
              This is a paragraph of text that describes something important about the website. You can place any content here.
            </p>
            <p>
              <BsInfoCircle /> Icons can be used to enhance the design.
            </p>
          </div>

          {/* Image Column */}
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/500"
              className="img-fluid"
              alt="Sample Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
