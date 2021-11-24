import "./index.css";
import Articles from "./../Articles";
import { useState, useEffect } from "react";
import getData from "../../data";

function Dashboard() {
  const techList = getData("all");
  const [currentTech, setCurrentTech] = useState(techList[0]);
  const [showHam, setShowHam] = useState(false);

  function updateHam() {
    if (window.innerWidth <= 800) {
      setShowHam(true);
    }
  }
  useEffect(function () {
    updateHam();
  }, []);

  return (
    <div
      className={
        !showHam ? "dashboard-container r-active" : "dashboard-container"
      }
    >
      {!showHam ? (
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
                onClick={() => {
                  setCurrentTech(tech);
                  updateHam();
                }}
              >
                {tech.name}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="ham-icon" onClick={() => setShowHam(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      )}
      <div className="dashboard-right-container">
        <Articles tech={currentTech} />
      </div>
    </div>
  );
}

export default Dashboard;
