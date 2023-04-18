import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject"; 

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Project from "./components/pages/Project";


function App() {
  return (
    <Router>
      <NavBar/> 
      <Container customClass="min-height">

          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Projects" element={<Projects/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>
            <Route path= "/Project/:id" element={<Project/>}/>
          </Routes>
        </Container>

      <Footer></Footer>
    </Router>
  );
}

export default App;
