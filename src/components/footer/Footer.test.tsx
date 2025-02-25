import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css"

const Footer = () => {
  // Social Media Links
  const socialLinks = [
    { icon: <FaFacebook size={18} />, url: "#" },
    { icon: <FaTwitter size={18} />, url: "#" },
    { icon: <FaInstagram size={18} />, url: "#" },
    { icon: <FaYoutube size={18} />, url: "#" },
  ];

  return (
    <footer className="text-light py-4 bg-dark">
      <Container>
        <Row className="text-center text-md-start d-flex justify-content-center">
          {/* Column 1: Company Info */}
          <Col md={4} className="mb-3">
            <Link className="navbar-brand fw-bolder text-light" to="/">
              <i className="bi bi-bootstrap-fill fw-bold"></i> Comix
            </Link>
            <p className="text-white">
              The ultimate hub for comic enthusiasts and creative minds!
            </p>
          </Col>


          {/* Column 2: Quick Links */}
          <Col md={4} className="mb-3 d-flex flex-column align-items-center text-center text-md-start">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { name: "Home", icon: "bi-house-door", path: "/" },
                { name: "About", icon: "bi-info-circle", path: "/about" },
                { name: "Contact", icon: "bi-envelope", path: "/contact" },
                { name: "Blog", icon: "bi-newspaper", path: "/blog" },
              ].map((link, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link text-light" to={link.path}>
                    <i className={`bi ${link.icon}`}></i> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 3: Social Media */}
          <Col md={4} className="mb-3 d-flex flex-column align-items-center text-center text-md-start">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0 text-white">
              © {new Date().getFullYear()}  <i className="bi bi-bootstrap-fill"> </i>Comix. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
