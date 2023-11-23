import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Home /> */}
      <Route path="/logout" element={<Auth />} />
    </Routes>
  );
}

export default App;
