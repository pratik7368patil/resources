import "./index.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="homepage">
        <h1 className="homepage-head">
          A journey of a thousand miles begins with a single step
        </h1>
        <p className="homepage-para">
          Learn coding by reading articles and watching free videos on the
          internet 🔥
        </p>
        <button onClick={() => navigate("/resources")} className="homepage-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Homepage;
