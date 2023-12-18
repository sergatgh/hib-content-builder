import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContentBuilder from "./pages/ContentBuilder";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="builder" element={<ContentBuilder />} />
      </Routes>
    </HashRouter>
  );
}
