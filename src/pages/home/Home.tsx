import { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import HorizontalScrollBar from "../../components/horizontalscrollbar/HorizontalScrollBar.test";
import BooksSection from "../../components/homebooks/HomeBooks";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div>
      <Hero />
      <BooksSection/>
      <HorizontalScrollBar />
    </div>
  );
};

export default Home;
