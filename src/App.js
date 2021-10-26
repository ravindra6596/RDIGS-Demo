import React, { Suspense } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { BrowserRouter, Route,Switch,Redirect} from 'react-router-dom';
import Header from './Componets/Header/header';
import Footer from './Componets/Footer/Footer';
import LoaderExampleDisabled from './Componets/LoaderExampleDisabled/LoaderExampleDisabled';

AOS.init({
 duration: 1500
});
function App() {
const Homepage = React.lazy(() => import('./Componets/Homepage/homepage'));
const Contact = React.lazy(() => import('./Componets/Contact/contact'));
const Teams = React.lazy(() => import('./Componets/Teams/teams'));
const Careers = React.lazy(() => import('./Componets/Careers/careers'));
const Newslatter = React.lazy(() => import('./Componets/Newslatter/Newslatter'));
const DemandGeneration = React.lazy(() => import('./Componets/DemandGeneration/DemandGeneration'));
const LeadGeneration = React.lazy(() => import('./Componets/LeadGeneration/LeadGeneration'));
const Gallary = React.lazy(() => import('./Componets/Gallery/Gallery'));
const CompanyProfile1 = React.lazy(() => import('./Componets/CompanyProfile1/CompanyProfile1'));
const Blog = React.lazy(() => import('./Componets/Blog/Blog'));
const JobDescription = React.lazy(() => import('./Componets/Careers/JobDescription/JobDescription'));
const Bannercommon = React.lazy(()=>import('./Componets/Bannercommon/Bannercommon'));
const Privacypolicy = React.lazy(()=>import('./Componets/Privacypolicy/Privacypolicy'));
const Termscondition = React.lazy(()=>import('./Componets/Termscondition/Termscondition'));
const Unsubscribe = React.lazy(()=>import('./Componets/Unsubscribe/Unsubscribe'));
const PageNotFound = React.lazy(()=>import('./Componets/PageNotFound/Pagenotfound'));
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main"style={{overflow:"hidden"}} > 
        <Suspense fallback={<LoaderExampleDisabled/>}>
        <Header/>
          <Switch>
              <Route path="/" exact={true} component={Homepage}/>
              <Route path='/home' exact={true} component={Homepage}/>
              <Route path='/teams' exact={true} component={Teams}/>
              <Route path='/careers' exact={true} component={Careers}/>
              <Route path='/newslatter' exact={true} component={Newslatter}/>
              <Route path='/contact' exact={true} component={Contact}/>
              <Route path='/demandgeneration' exact={true} component={DemandGeneration}/>
              <Route path='/leadgeneration' exact={true} component={LeadGeneration}/>
              <Route path='/gallary' exact={true} component={Gallary}/>
              <Route path='/companyprofile1' exact={true} component={CompanyProfile1}/>
              <Route path='/blog' exact={true} component={Blog}/>
              <Route path='/jobdescription' exact={true} component={JobDescription}/>
              <Route path='/bannercommon' exact={true} component={Bannercommon}/>
              <Route path='/Privacypolicy' exact={true} component={Privacypolicy}/>
              <Route path='/termscondition' exact={true} component={Termscondition}/>
              <Route path='/unsubscribe' exact={true} component={Unsubscribe}/>
              <Route path='/footer' exact={true} component={Footer}/>
              <Route path="/Pagenotfound" exact={true} component={PageNotFound}/>
              <Redirect from="*" to="/Pagenotfound"/>
          </Switch>
          <Footer/>
          </Suspense>
        </div>
    </BrowserRouter>
    </div>
  );
}
export default App;
