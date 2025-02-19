import{ Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import CreativeDesign from "./pages/CreativeDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import Training from "./pages/Training";
import WebDevelopmentTraining from "./pages/WebDevelopmentTraining";
import CreativeDesignTraining from "./pages/CreativeDesignTraining";
import ECommerce from "./pages/ECommerce";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";
import RequestAQuote from "./pages/RequestAQuote";



function App() {
  return (
    
    <>
    
     
      
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path="services" element={<Services />}/>
          <Route path="services/webdevelopment" element={<WebDevelopment />} />
          <Route path="services/mobileapps" element={<MobileAppDevelopment />} />
          <Route path="services/creativedesign" element={<CreativeDesign />} />
          <Route path="services/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="services/training" element={<Training />} />
          <Route path="webdevelopment-training" element={<WebDevelopmentTraining />} />
          <Route path="Creativegraphicdesign-training" element={<CreativeDesignTraining />} />
          <Route path="services/ecommerce" element={<ECommerce />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="requestquote" element={<RequestAQuote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
     
      
    </>
  );
}








export default App


