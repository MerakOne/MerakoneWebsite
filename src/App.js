import './App.css';
import Aboutus from './Pages/About us/Aboutus';
import Service from './Pages/Service/Service';
import Clients from './Pages/Clients/Clients';
import About from './Pages/Home/AboutusHome';
import Home from './Pages/Home/Home';

import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import SunGlassHut_Panorama from './Pages/Projects/ProjectDetails/SunGlassHut_Panorama';
import Kiko_Riyadh_Gallery from './Pages/Projects/ProjectDetails/Kiko_Riyadh_Gallery';
import Alhussaini_Lavanda from './Pages/Projects/ProjectDetails/Alhussaini_Lavanda';
import AlhussainiJizan from './Pages/Projects/ProjectDetails/AlhussainiJizan';
import Paul_le_Gallery from './Pages/Projects/ProjectDetails/Paul_le_Gallery';
import Brand_For_Less from './Pages/Projects/ProjectDetails/Brand_For_Less';
import Sun_glass_hut from './Pages/Projects/ProjectDetails/Sun_glass_hut';
import Kiko_Lavanda from './Pages/Projects/ProjectDetails/Kiko_Lavanda';
import Kiko_Kingdom from './Pages/Projects/ProjectDetails/Kiko_Kingdom';
import Intimissimi from './Pages/Projects/ProjectDetails/Intimissimi';
import KikoMilano from './Pages/Projects/ProjectDetails/KikoMilano';
import Sixty_Sec from './Pages/Projects/ProjectDetails/Sixty_Sec';
import Binghatti from './Pages/Projects/ProjectDetails/Binghatti';
import Jawahara from './Pages/Projects/ProjectDetails/Jawahara';
import Reserved from './Pages/Projects/ProjectDetails/Reserved';
import Veromoda from './Pages/Projects/ProjectDetails/Veromoda';
import Giordano from './Pages/Projects/ProjectDetails/Giordano';
import Gissah from './Pages/Projects/ProjectDetails/Gissah';
import Daiso from './Pages/Projects/ProjectDetails/Daiso';
import Paul from './Pages/Projects/ProjectDetails/Paul';
import ContactUs from './Pages/Contact Us/ContactUs';
import Projects from './Pages/Projects/Projects';
import Careers from './Pages/Careers/Careers';
import WhatsappButton from './Pages/Components/WhatsappButton';
import Deichmann from './Pages/Projects/ProjectDetails/Deichmann';
import Calzedonia from './Pages/Projects/ProjectDetails/Calzedonia';
import Daiso_Japan_Aziz from './Pages/Projects/ProjectDetails/Daiso_Japan_Aziz';
import Intimissimi_parkvenue from './Pages/Projects/ProjectDetails/Intimissimi_parkvenue';

const Loader = () => {
  return (
    <div className="loader"></div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Remove loader after 3 seconds
    }, 3000);
  }, []);

  if (loading) return <Loader />;

  
  return (
    <Router>
       <WhatsappButton />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/about_us" element={<Aboutus/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/home_aboutus" element={<About/>} />
        <Route path="/contact_us" element={<ContactUs/>} />


                  {/* PROJECT DETAILS */}
        <Route path="/alhussaini_lavanda" element={<Alhussaini_Lavanda/>} />
        <Route path="/al_hussaini_jizan" element={<AlhussainiJizan/>} />
        <Route path="/brand_for_less" element={<Brand_For_Less/>} />
        <Route path="/projects_reserved" element={<Reserved/>} />
        <Route path="/intimissimi" element={<Intimissimi/>} />
        <Route path="/kiko_milano" element={<KikoMilano/>} />
        <Route path="/binghatti" element={<Binghatti/>} />
        <Route path="/projects_paul" element={<Paul/>} />
        <Route path="/gissah" element={<Gissah/>} />
        <Route path="/jawhara" element={<Jawahara/>} />
        <Route path="/daiso" element={<Daiso/>} />
        <Route path="/60_sec" element={<Sixty_Sec/>} />
        <Route path="/veromoda" element={<Veromoda/>} />
        <Route path="/giordano" element={<Giordano/>} />
         <Route path="/deichmann" element={<Deichmann/>} />
        <Route path="/calzedonia" element={<Calzedonia/>} />
        <Route path="/kiko_lavanda" element={<Kiko_Lavanda/>} />
        <Route path="/kiko_kingdom" element={<Kiko_Kingdom/>} />
        <Route path="/sun_glass_hut" element={<Sun_glass_hut/>} />
        <Route path="/paule_le_gallery" element={<Paul_le_Gallery/>} />
        <Route path="/daiso_japan_aziz" element={<Daiso_Japan_Aziz/>} />
        <Route path="/kiko_riyadh_gallery" element={<Kiko_Riyadh_Gallery/>} />
        <Route path="/sun_glass_hut_Panorama" element={<SunGlassHut_Panorama/>} />
        <Route path="/intimissimi_park_venue" element={<Intimissimi_parkvenue/>} />

      </Routes>
    </Router>
  );
}


export default App;
