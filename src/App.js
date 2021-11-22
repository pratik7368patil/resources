import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./components";

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Components.Homepage />} />
          <Route path="/resources" element={<Components.Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
