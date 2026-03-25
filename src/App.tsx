import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import PlumbingPage from './pages/PlumbingPage';
import HeatingPage from './pages/HeatingPage';
import AirConditioningPage from './pages/AirConditioningPage';
import GeneratorsPage from './pages/GeneratorsPage';
import WaterHeatersPage from './pages/WaterHeatersPage';
import GeothermalPage from './pages/GeothermalPage';
import IndoorAirQualityPage from './pages/IndoorAirQualityPage';
import FuelOilPage from './pages/FuelOilPage';
import FinancingPage from './pages/FinancingPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-red-700 focus:rounded-lg focus:shadow-lg focus:font-bold">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plumbing" element={<PlumbingPage />} />
          <Route path="/heating" element={<HeatingPage />} />
          <Route path="/air-conditioning" element={<AirConditioningPage />} />
          <Route path="/generators" element={<GeneratorsPage />} />
          <Route path="/water-heaters" element={<WaterHeatersPage />} />
          <Route path="/geothermal" element={<GeothermalPage />} />
          <Route path="/indoor-air-quality" element={<IndoorAirQualityPage />} />
          <Route path="/fuel-oil" element={<FuelOilPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/news-articles" element={<NewsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
