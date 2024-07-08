import './Style.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./router/Home";
import Projects from "./router/Projects";
import ThemePicker from "./router/ThemePicker";
import NoPage from "./router/NoPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/projects" index element={<Projects />}/>
          <Route path="theme-picker" element={<ThemePicker />}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
