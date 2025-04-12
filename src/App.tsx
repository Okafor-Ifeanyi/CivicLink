import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/HeaderAndPadding";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
