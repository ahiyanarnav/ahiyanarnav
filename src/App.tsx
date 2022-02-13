import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="*" element={<LandingPage />} />
  </Routes>
);

export default App;
