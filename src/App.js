import React, { Suspense } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './Componets/Header/header';
import Footer from './Componets/Footer/Footer';

AOS.init({
  duration: 1500
});
function App() {

const Homepage = React.lazy(() => import('./Componets/Homepage/homepage'));
const Contact = React.lazy(() => import('./Componets/Contact/contact'));
const Teams = React.lazy(() => import('./Componets/Teams/teams'));
const Careers = React.lazy(() => import('./Componets/Careers/careers'));
const DemandGeneration = React.lazy(() => import('./Componets/DemandGeneration/DemandGeneration'));
const LeadGeneration = React.lazy(() => import('./Componets/LeadGeneration/LeadGeneration'));
const Gallary = React.lazy(() => import('./Componets/Gallary/Gallery'));
const CompanyProfile1 = React.lazy(() => import('./Componets/CompanyProfile1/CompanyProfile1'));
const Blog = React.lazy(() => import('./Componets/Blog/Blog'));

  return (
    <div className="App">
      <BrowserRouter>
        <div className="main"style={{overflow:"hidden"}} > 
        <Suspense fallback={"loading"}>
        <Header/>
          <Switch>
              <Route path='/' exact={true} component={Homepage}/>
              <Route path='/home' exact={true} component={Homepage}/>
              <Route path='/teams' exact={true} component={Teams}/>
              <Route path='/careers' exact={true} component={Careers}/>
              <Route path='/contact' exact={true} component={Contact}/>
              <Route path='/demandgeneration' exact={true} component={DemandGeneration}/>
              <Route path='/leadgeneration' exact={true} component={LeadGeneration}/>
              <Route path='/gallary' exact={true} component={Gallary}/>
              <Route path='/companyprofile1' exact={true} component={CompanyProfile1}/>
              <Route path='/blog' exact={true} component={Blog}/>
              <Route path='/footer' exact={true} component={Footer}/>
 
          </Switch>
          <Footer/>
          </Suspense>
         
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
