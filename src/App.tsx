import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import LandingPage from "./components/pages/LandingPage";
import { HOME, ABOUT_US } from "./shared/routes";

const App = () => (
  <Routes>
    <Route path={HOME} element={<LandingPage />} />
    <Route path={ABOUT_US} element={<AboutUs />} />
  </Routes>
);

export default App;
