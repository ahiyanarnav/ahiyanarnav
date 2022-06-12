import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import InfoPage from "./components/pages/InfoPage";
import LandingPage from "./components/pages/LandingPage";
import { HOME, ABOUT_US, INFO } from "./shared/routes";

const App = () => (
  <Routes>
    <Route path={HOME} element={<LandingPage />} />
    <Route path={ABOUT_US} element={<AboutUs />} />
    <Route path={INFO} element={<InfoPage />} />
  </Routes>
);

export default App;
