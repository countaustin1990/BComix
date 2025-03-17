import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaHistory, FaFantasyFlightGames } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const books = [
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
  { title: "The Great Gatsby", category: "Novel", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
  { title: "Sapiens", category: "History", icon: <FaHistory /> },
  { title: "Harry Potter", category: "Fantasy", icon: <FaFantasyFlightGames /> },
  { title: "Atomic Habits", category: "Self-help", icon: <FaBookOpen /> },
];

const Books: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 book-text">📚 Books Section</h2>
      <div className="row g-4">
        {books.map((book, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="position-relative p-3 border rounded shadow bg-light book-card"
            >
              <div className="d-flex flex-column align-items-center">
                <span className="fs-4">{book.icon}</span>
                <h5 className="mt-2">{book.title}</h5>
              </div>
              {/* Label at bottom right */}
              <span className="position-absolute bottom-0 end-0 bg-primary text-white px-2 py-1 rounded">
                {book.category}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
