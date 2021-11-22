import "./index.css";
import getData from "../../data";
import buildData from "../../utils";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

function Articles(props) {
  const data = getData(props.tech.id);
  const renderData = data ? buildData(data) : [];
  const [showName, setShowName] = useState(false);

  useEffect(function () {
    if (window.innerWidth <= 800) {
      setShowName(true);
    }
  }, []);

  return (
    <div className="article-container">
      {showName ? (
        <h3 className="res-heading">{props.tech.name} Resources</h3>
      ) : null}
      {renderData}
    </div>
  );
}

export default Articles;
