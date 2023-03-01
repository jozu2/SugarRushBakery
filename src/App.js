import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/index.jsx";
import Home from "./pages/home/index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
