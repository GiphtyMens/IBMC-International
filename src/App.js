import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/home/Home";
import About from "./app/about/About";
import Services from "./app/services/Services";
import ServiceDetail from "./components/service_components/ServiceDetail";
import Contact from "./app/contact/Contact";
import { ServiceContextProvider } from "./context/ServiceContext";

// shared
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FooterTwo from "./shared/FooterTwo";

function App() {
  return (
    <ServiceContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="service/:serviceId" element={<ServiceDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <FooterTwo />
    </BrowserRouter>
    </ServiceContextProvider>
  );
}

export default App;
