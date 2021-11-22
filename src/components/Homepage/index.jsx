import "./index.css";
import posts from "./../../assets/posts.svg";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="homepage-left-container">
        <h1 className="homepage-head">Best place to start your journey</h1>
        <p className="homepage-para">
          Enjoy free leaning resources of the technologies. 🔥
        </p>
        <button onClick={() => navigate("/resources")} className="homepage-btn">
          Get Started
        </button>
      </div>
      <div className="homepage-right-container">
        <img className="img-responsive" src={posts} alt="illustration" />
      </div>
    </div>
  );
}

export default Homepage;
