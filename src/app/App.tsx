import Home from "../pages/Home";
import AvisoPrivacidad from "../components/AvisoPrivacidad";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
