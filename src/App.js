import React from "react";
// import Users from './components/Users';
// import http from './services/Axios';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import Skills from './Skills/Skills';
// import Contact from './contact/Contact';
import NavbarT from './Component/NavbarT';
import Services from "./Services/Services";
import Work from "./Work/Work";
import ScrollTop from "./ScrollTop/Scrolltop";
import Contact from "./contact/Contact";

function App() {
  return (
 <div>
 <Router>
   <NavbarT/>
   <main>
     <Switch>
       <Route path ='/home' exact>
         <ScrollTop/>
         <Home/>
         <About/>
         <Skills/>
         <Services/>
         <Work/>
         <Contact/>
       </Route>
       <Route path ='/about' exact>
         <About/>
       </Route>
   
       <Route path ='/skills' exact>
         <Skills/>
       </Route>
       <Route path ='/services' exact>
         <Services/>
       </Route>
       <Route path ='/work' exact>
         <Work/>
       </Route>
       <Route path ='/contact' exact>
         <Contact/>
       </Route>
       <Redirect to ='/'/>
     </Switch>
   </main>
 </Router>
 </div>
  );
}

export default App;
