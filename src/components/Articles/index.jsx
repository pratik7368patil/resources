import "./index.css";
import getData from "../../data";
import buildData from "../../utils";

function Articles(props) {
  const data = getData(props.tech.id);
  const renderData = data ? buildData(data) : [];

  return <div className="article-container">{renderData}</div>;
}

export default Articles;
