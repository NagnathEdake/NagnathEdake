import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./navigation/Layout";
import AboutAll from "./component/AboutAll";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutAll />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
