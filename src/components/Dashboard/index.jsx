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
    } else {
      setShowHam(false);
    }
  }
  useEffect(function () {
    updateHam();
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 800) {
        updateHam();
      }
    });
  }, []);

  return (
    <div
      className={
        !showHam ? "dashboard-container r-active" : "dashboard-container"
      }
    >
      {!showHam ? (
        <div className="dashboard-left-container">
          <div className="d-tech-head-container">
            <h2 className="d-tech-head">Technologies/Topics</h2>
            <div className="d-tech-close" onClick={() => updateHam()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path
                  style={{ color: "#a8a8a850" }}
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </div>
          <div className="d-tech-list">
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
