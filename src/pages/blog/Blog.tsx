import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTags, FaClock } from "react-icons/fa";
import "./style.css"

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Diamond Comic Distributors Files for Bankruptcy",
      excerpt: "On January 14, 2025, Diamond Comic Distributors,once a dominant force in comic book distribution, filed for Chapter 11 bankruptcy. This move has raised concerns about the future of comic distribution, especially for smaller publishers who relied heavily on Diamond's services.",
      date: "Feb 22, 2025",
      category: "React",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 2,
      title: "Impact of AI on Comic Creation",
      excerpt: "The integration of artificial intelligence into comic book creation has sparked debate among artists and writers. While some, like Jim Starlin, see AI as a tool to enhance productivity, others fear it may lead to job displacement and intellectual property issues.",
      date: "Feb 20, 2025",
      category: "Bootstrap",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 3,
      title: "DC Comics Revives Vertigo Imprint",
      excerpt: "In October 2024, DC Comics announced the revival of its Vertigo imprint, aiming to provide a platform for mature and avant-garde storytelling. This relaunch includes titles like The Nice House by the Sea and the integration of The Sandman Universe series.",
      date: "Feb 20, 2025",
      category: "Bootstrap",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 4,
      title: "Growth Projections",
      excerpt: "DC has introduced fresh creative directions for iconic characters. Matt Fraction is set to take over writing for Batman, starting with a new issue #1 in September 2025, featuring a redesigned costume and Batmobile. Additionally, a new Supergirl series by Sophie Campbell and Tamra Bonvillain is slated for release on May 14, 2025, focusing on Kara Zor-El's return to Midvale.",
      date: "Feb 20, 2025",
      category: "Bootstrap",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 5,
      title: "New Creative Teams and Series",
      excerpt: "Despite challenges, the comic book market is projected to grow by approximately USD 3.25 billion between 2024 and 2028. This growth is attributed to the success of TV shows and movies based on comic book properties, as well as strategic collaborations and partnerships within the industry.",
      date: "Feb 20, 2025",
      category: "Bootstrap",
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
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="fw-bold">Our Blog</h1>
          <p className="text-muted">Stay updated with the latest comic trends.</p>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          {posts.map((post) => (
            <Card key={post.id} className="mb-4 shadow-sm">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <div className="d-flex justify-content-between text-mute small">
                  <span><FaClock /> {post.date}</span>
                  <span><FaTags /> {post.category}</span>
                </div>
                <div className="flex items-center justify-center h-screen">
              
                  <button className="hero-button px-4 py-6 rounded-lg shadow-sm hover:bg-blue-700 p-2">
                      Learn More
                  </button>
             
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
        
        <Col md={4}>
          <div className="p-3 shadow-lg rounded side-box">
            <h4 className="fw-bold">Categories</h4>
            <ul className="list-unstyled">
              <li className="styler flex items-center gap-2">Disney Comics<FaTags style={{ marginLeft: "8px" }}/> </li>
              <li className="styler flex items-center gap-2">Marvel Comics<FaTags style={{ marginLeft: "8px" }}/> </li>
              <li className="styler flex items-center gap-2">Pixar Comics<FaTags style={{ marginLeft: "8px" }}/> </li>
              <li className="styler flex items-center gap-2">Detective Comics<FaTags style={{ marginLeft: "8px" }}/> </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
