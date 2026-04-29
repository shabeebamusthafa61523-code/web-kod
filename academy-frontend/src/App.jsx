import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Homet from './pages/Homet'
import Homett from './pages/Homett'
import CourseDetails from './pages/CourseDetails'
import AppDevelopment from './pages/Courses/AppDevelopment'
import DigitalMarketing from './pages/Courses/DigitalMarketing'
import GraphicDesigning from './pages/Courses/GraphicDesigning'
import SoftwareDevelopment from './pages/Courses/SoftwareDevelopment'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Navbart from './components/Navbart'
import Footert from './components/Footert'
import Mern from './pages/Courses/Mern'
import Python from "./pages/Courses/Python";
import Flutter from "./pages/Courses/Flutter";
import Services from "./components/Services";
import Reactfrontend from "./pages/Courses/Reactfrontend";
import Nodebackend from "./pages/Courses/Nodebackend";
import Pythonbackend from "./pages/Courses/Pythonbackend";
import ServiceDetails from "./pages/ServiceDetails";

/* ✅ NEW: Layout component */
function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbart />}

      <Routes>
        <Route path="/f" element={<Footer />} />
        <Route path="/n" element={<Navbar />} />
        <Route path="/h" element={<Home />} />
        <Route path="/" element={<Homet />} />
        <Route path="/hmm" element={<Homett />} />
        <Route path="/cd" element={<CourseDetails />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
        <Route path="/au" element={<AboutUs />} />
        <Route path="/cu" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ad" element={<AppDevelopment />} />
        <Route path="/dm" element={<DigitalMarketing />} />
        <Route path="/gd" element={<GraphicDesigning />} />
        <Route path="/sd" element={<SoftwareDevelopment />} />
        <Route path="/mr" element={<Mern />} />
        <Route path="/py" element={<Python/>} />
        <Route path="/fl" element={<Flutter />} />
        <Route path="/re" element={<Reactfrontend />} />
        <Route path="/node" element={<Nodebackend />} />
        <Route path="/python" element={<Pythonbackend />} />
      </Routes>

      <Footert />
    </>
  );
}

/* ✅ CLEAN App */
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;