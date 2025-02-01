import{ Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import CreativeDesign from "./pages/CreativeDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import Training from "./pages/Training";
import ECommerce from "./pages/ECommerce";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import ScrollUp from "./components/Scrollup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./pages/Layout";



function App() {
  return (
    
    <>
    
      <Header />
      
        <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<Homepage />} />
          <Route path="services" element={<Services />}/>
          <Route path="services/webdevelopment" element={<WebDevelopment />} />
          <Route path="mobileapps" element={<MobileAppDevelopment />} />
          <Route path="services/creativedesign" element={<CreativeDesign />} />
          <Route path="digitalmarketing" element={<DigitalMarketing />} />
          <Route path="training" element={<Training />} />
          <Route path="ecommerce" element={<ECommerce />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
     
       <ScrollUp />
      <Footer /> 
    </>
  );
}








export default App


