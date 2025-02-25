import { FaAmazon, FaUniversalAccess, FaFilm } from "react-icons/fa";
import { 
  SiWarnerbros, SiNetflix, SiSony, SiParamountplus, SiHbo, SiApple, 
  SiGoogle, SiSamsung, SiIntel, SiFacebook, SiYoutube, SiTesla, SiNvidia 
} from "react-icons/si";
import './style.css'


interface Company {
  name: string;
  icon: Jsx.Element;
}

const companies: Company[] = [
  { name: "Warner Bros.", icon: <SiWarnerbros size={60} /> },
  { name: "Universal", icon: <FaUniversalAccess size={60} /> },
  { name: "Paramount", icon: <SiParamountplus size={60} /> },
  { name: "Sony Pictures", icon: <SiSony size={60} /> },
  { name: "Netflix", icon: <SiNetflix size={60} /> },
  { name: "Amazon Studios", icon: <FaAmazon size={60} /> },
  { name: "20th Century Fox", icon: <FaFilm size={60} /> },
  { name: "HBO", icon: <SiHbo size={60} /> },
  { name: "Apple TV", icon: <SiApple size={60} /> },
  { name: "Google", icon: <SiGoogle size={60} /> },
  { name: "Samsung", icon: <SiSamsung size={60} /> },
  { name: "Intel", icon: <SiIntel size={60} /> },
  { name: "Facebook", icon: <SiFacebook size={60} /> },
  { name: "YouTube", icon: <SiYoutube size={60} /> },
  { name: "Tesla", icon: <SiTesla size={60} /> },
  { name: "Nvidia", icon: <SiNvidia size={60} /> },
];

// Duplicate companies to create an infinite scrolling effect
const scrollingItems = [...companies, ...companies];

const HorizontalScrollBar = () => {
  return (
    <div className="relative w-full bg-gray-100 py-4 overflow-hidden">
      <h1 className="text-center fw-bolder">Partners & Sponsors</h1>
      <div className="flex w-max animate-scroll p-5">
        {scrollingItems.map((company, index) => (
          <div
            key={index}
            className="company-icons w-24 h-24 mx-4 flex items-center justify-center bg-dark text-white rounded shadow-lg p-2"
            title={company.name}
          >
            {company.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
