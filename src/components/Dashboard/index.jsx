import "./index.css";
import Articles from "./../Articles";
import { useState } from "react";
import getData from "../../data";

function Dashboard() {
  const techList = getData("all");
  const [currentTech, setCurrentTech] = useState(techList[0]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-left-container">
        <h2 className="d-tech-head">Technologies/Topics</h2>
        {techList.map((tech) => {
          return (
            <div
              className={
                currentTech.id === tech.id
                  ? "d-tech-item d-active-tech"
                  : "d-tech-item"
              }
              key={tech.id}
              onClick={() => setCurrentTech(tech)}
            >
              {tech.name}
            </div>
          );
        })}
      </div>
      <div className="dashboard-right-container">
        <Articles tech={currentTech} />
      </div>
    </div>
  );
}

export default Dashboard;
