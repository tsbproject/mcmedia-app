import{ BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import About from "./pages/About";
import RequestAQuote from "./pages/RequestAQuote";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
/        <Route path="servives" element={ <Services /> } /> 
        <Route path="about" element={ <About /> }></Route>
        <Route path="requestaquote" element={ <RequestAQuote /> }/>
        <Route path="portfolio" element={ <Portfolio /> }/>
        <Route path="blog" element={ <Blog /> }></Route>
        <Route path="contact" element={ <Contact /> }/>
        <Route path="*" element={ <PageNotFound /> }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
