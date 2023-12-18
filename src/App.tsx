import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContentBuilder from "./pages/ContentBuilder";

export default function App() {
  return (
    <BrowserRouter basename="hib-content-builder">
      <Routes>
        <Route index element={<Home />} />
        <Route path="builder" element={<ContentBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}
