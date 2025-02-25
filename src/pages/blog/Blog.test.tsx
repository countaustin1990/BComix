import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTags, FaClock } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion
import "./style.css";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Diamond Comic Distributors Files for Bankruptcy",
      excerpt: "On January 14, 2025, Diamond Comic Distributors, once a dominant force in comic book distribution, filed for Chapter 11 bankruptcy...",
      date: "Feb 22, 2025",
      category: "Thomas Foster",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 2,
      title: "Impact of AI on Comic Creation",
      excerpt: "The integration of artificial intelligence into comic book creation has sparked debate among artists and writers...",
      date: "Feb 20, 2025",
      category: "Greg Davids",
      image: "https://via.placeholder.com/600x300",
    },
    {
        id: 3,
        title: "DC Comics Revives Vertigo Imprint",
        excerpt: "In October 2024, DC Comics announced the revival of its Vertigo imprint, aiming to provide a platform for mature and avant-garde storytelling. This relaunch includes titles like The Nice House by the Sea and the integration of The Sandman Universe series.",
        date: "Feb 20, 2025",
        category: "Nijen Pitano",
        image: "https://via.placeholder.com/600x300",
      },
      {
        id: 4,
        title: "Growth Projections",
        excerpt: "DC has introduced fresh creative directions for iconic characters. Matt Fraction is set to take over writing for Batman, starting with a new issue #1 in September 2025, featuring a redesigned costume and Batmobile. Additionally, a new Supergirl series by Sophie Campbell and Tamra Bonvillain is slated for release on May 14, 2025, focusing on Kara Zor-El's return to Midvale.",
        date: "Feb 20, 2025",
        category: "Nathan Claudius"
        image: "https://via.placeholder.com/600x300",
      },
      {
        id: 5,
        title: "New Creative Teams and Series",
        excerpt: "Despite challenges, the comic book market is projected to grow by approximately USD 3.25 billion between 2024 and 2028. This growth is attributed to the success of TV shows and movies based on comic book properties, as well as strategic collaborations and partnerships within the industry.",
        date: "Feb 20, 2025",
        category: "Hotan Benga",
        image: "https://via.placeholder.com/600x300",
      },
  ]);

  useEffect(() => {
    fetch("/api/posts") // Replace with actual API endpoint
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <Container className="py-5">
      {/* Page Heading */}
      <Row className="mb-4 text-center">
        <Col>
          <motion.h1 
            className="fw-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-muted"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Stay updated with the latest comic trends.
          </motion.p>
        </Col>
      </Row>

      <Row>
        {/* Blog Posts */}
        <Col md={8}>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="mb-4 shadow-sm">
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <div className="d-flex justify-content-between text-muted small">
                    <span><FaClock /> {post.date}</span>
                    <span><FaTags /> {post.category}</span>
                  </div>

                  {/* Animated Button */}
                  <motion.button
                    className="hero-button px-4 py-2 rounded-lg shadow-sm bg-blue-600 mt-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Learn More
                  </motion.button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Col>

        {/* Sidebar */}
        <Col md={4}>
          <motion.div
            className="p-3 shadow-lg rounded side-box"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="fw-bold">Categories</h4>
            <ul className="list-unstyled">
              {["Disney Comics", "Marvel Comics", "Pixar Comics", "Detective Comics"].map((category, index) => (
                <motion.li
                  key={index}
                  className="styler flex items-center gap-2"
                  whileHover={{ scale: 1.1, color: "#007bff" }}
                  transition={{ duration: 0.3 }}
                >
                  {category} <FaTags style={{ marginLeft: "8px" }} />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
