import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Western from "./pages/western";
import Eastern from "./pages/eastern";
import Team from "./pages/team";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/western" element={<Western />} />
      <Route path="/eastern" element={<Eastern />} />
      <Route path="/team/:id" element={<Team />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
