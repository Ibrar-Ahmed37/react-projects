import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Staff } from "./components/pages/Staff";
import { Home } from "./components/pages/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </Router>
  );
}

export default App;
