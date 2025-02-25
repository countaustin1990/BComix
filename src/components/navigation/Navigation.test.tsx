import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark p-3 sticky top-0 shadow bg-dark"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bolder" to="/">
          <motion.i
            className="bi bi-bootstrap-fill fw-bold"
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
          ></motion.i>{" "}
          Comix
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className="navbar-toggler-icon"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse d-lg-flex justify-content-end">
          <ul className="navbar-nav gap-3 text-center text-lg-start">
            {[
              { to: "/", label: "Home", icon: "bi-house-door" },
              { to: "/about", label: "About", icon: "bi-info-circle" },
              { to: "/contact", label: "Contact", icon: "bi-envelope" },
              { to: "/blog", label: "Blog", icon: "bi-newspaper" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="nav-link fw-semibold text-light" to={item.to}>
                  <i className={`bi ${item.icon}`}></i> {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Links (Animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="w-100 bg-dark text-white p-3 position-absolute top-100 start-0 end-0 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ul className="navbar-nav text-center">
                {[
                  { to: "/", label: "Home", icon: "bi-house-door" },
                  { to: "/about", label: "About", icon: "bi-info-circle" },
                  { to: "/contact", label: "Contact", icon: "bi-envelope" },
                  { to: "/blog", label: "Blog", icon: "bi-newspaper" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="nav-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link className="nav-link fw-semibold text-white" to={item.to}>
                      <i className={`bi ${item.icon}`}></i> {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
