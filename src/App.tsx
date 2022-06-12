import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import InfoPage from "./components/pages/InfoPage";
import LandingPage from "./components/pages/LandingPage";
import { HOME, ABOUT_US, WHAT_WE_DO } from "./shared/routes";

const App = () => (
  <Routes>
    <Route path={HOME} element={<LandingPage />} />
    <Route path={ABOUT_US} element={<AboutUs />} />
    <Route path={WHAT_WE_DO} element={<InfoPage />} />
  </Routes>
);

export default App;
