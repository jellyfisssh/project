import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Modules from "./pages/Modules";
import Module0 from "./pages/Module0"
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";
import Glossary from "./pages/Glossary";
import Privacy from "./pages/Privacy";

function App () {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/module0" element={<Module0 />} />
            <Route path="/module1" element={<Module1 />} />
            <Route path="/module2" element={<Module2 />} />
            <Route path="/module3" element={<Module3 />} />
            <Route path="/quiz1" element={<Quiz1 />} />
            <Route path="/quiz2" element={<Quiz2 />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
