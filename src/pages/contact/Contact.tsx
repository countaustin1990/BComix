import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./style.css"

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center text-muted">We’d love to hear from you!</p>
          <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="flex items-center justify-center h-screen">
              
                <button className="hero-button px-4 py-6 rounded-lg shadow-sm hover:bg-blue-700 p-2">
                    Learn More
                </button>
             
            </div>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col md={4} className="mb-3">
          <FaPhoneAlt className="text-primary fs-3 mb-2" />
          <p className="mb-1 fw-bold">Call Us</p>
          <p className="text-muted">+123 456 7890</p>
        </Col>
        <Col md={4} className="mb-3">
          <FaEnvelope className="text-primary fs-3 mb-2" />
          <p className="mb-1 fw-bold">Email</p>
          <p className="text-muted">contact@example.com</p>
        </Col>
        <Col md={4} className="mb-3">
          <FaMapMarkerAlt className="text-primary fs-3 mb-2" />
          <p className="mb-1 fw-bold">Location</p>
          <p className="text-muted">123 Main Street, City</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
