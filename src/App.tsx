import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/HeaderAndPadding";
import { HomePage } from "./pages/HomePage";
import { ServicePage } from "./pages/ServicePage";
import { ContactPage } from "./pages/ContactPage";
import ExploreOfficials from "./pages/ExploreOfficials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/service" index element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/explore-officials" element={<ExploreOfficials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
