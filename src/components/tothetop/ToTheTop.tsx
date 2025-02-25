import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";

const ToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="purple"
      className={`position-fixed bottom-3 end-3 shadow ${isVisible ? "d-block" : "d-none"}`}
      style={{ right: "20px", bottom: "20px", borderRadius: "50px" }}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ToTheTop;
