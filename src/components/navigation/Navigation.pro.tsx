import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Create a context to store page data
const PageContentContext = createContext<{ pages: Page[] }>({ pages: [] });

interface Page {
  to: string;
  title: string;
  keywords: string;
  icon: string;
  content: string;
}

// Exact content for each page
const pages: Page[] = [
  {
    to: "/",
    title: "Home",
    keywords: "homepage welcome introduction",
    icon: "bi-house-door",
    content: "Welcome to Comix! Discover amazing stories, explore different genres, and enjoy a seamless reading experience."
  },
  {
    to: "/about",
    title: "About",
    keywords: "team story history mission",
    icon: "bi-info-circle",
    content: "Comix is dedicated to bringing the best comic experiences to our users. Learn more about our journey and what makes us unique."
  },
  {
    to: "/contact",
    title: "Contact",
    keywords: "support help email phone",
    icon: "bi-envelope",
    content: "Get in touch with us for any inquiries, support requests, or partnership opportunities. We’d love to hear from you!"
  },
  {
    to: "/blog",
    title: "Blog",
    keywords: "news articles updates",
    icon: "bi-newspaper",
    content: "Stay updated with the latest news, trends, and insights in the comic industry. Read our latest articles and discussions."
  }
];

// Navigation component with search functionality
export const Navigation: React.FC = () => {
  const { pages } = useContext(PageContentContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<Page[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredResults([]);
      return;
    }

    const results = pages.filter(
      (page) =>
        page.title.toLowerCase().includes(query) ||
        page.keywords.split(" ").some(keyword => keyword.includes(query)) ||
        page.content.toLowerCase().includes(query)
    );

    setFilteredResults(results);
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">
          <motion.i
            className="bi bi-bootstrap-fill"
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
          ></motion.i>
          {" "}Comix
        </Link>

        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          <motion.span
            className="navbar-toggler-icon"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""} d-lg-flex justify-content-between`}>
          <ul className="navbar-nav me-auto gap-3 text-center">
            {pages.map((item) => (
              <motion.li key={item.to} className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link className="nav-link fw-semibold text-light" to={item.to} onClick={() => setIsOpen(false)}>
                  <i className={`bi ${item.icon}`}></i> {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="d-flex position-relative" ref={searchRef}>
            <motion.input
              type="text"
              className="form-control me-2 bg-dark text-light border-light"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              whileFocus={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <AnimatePresence>
              {searchQuery && filteredResults.length > 0 && (
                <motion.div
                  className="position-absolute top-100 start-0 w-100 bg-dark text-white shadow-lg rounded mt-1 p-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {filteredResults.map((item) => (
                    <motion.div key={item.to} className="p-2 border-bottom" whileHover={{ scale: 1.05 }}>
                      <Link
                        className="text-light text-decoration-none d-block"
                        to={item.to}
                        onClick={() => setSearchQuery("")}
                      >
                        <i className={`bi ${item.icon}`}></i> {item.title}
                      </Link>
                      <small className="d-block text-muted">{item.content}</small>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// PageContentProvider to wrap around the app
export const PageContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PageContentContext.Provider value={{ pages }}>{children}</PageContentContext.Provider>;
};
