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
//when we refresh the page on window refresh icon will open on top functionality
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function App() {
const Homepage = React.lazy(() => import('./Componets/Homepage/homepage'));
const Contact = React.lazy(() => import('./Componets/Contact/contact'));
const Teams = React.lazy(() => import('./Componets/Teams/teams'));
const Careers = React.lazy(() => import('./Componets/Careers/careers'));
const Newslatter = React.lazy(() => import('./Componets/Newslatter/Newslatter'));
const DemandGeneration = React.lazy(() => import('./Componets/DemandGeneration/DemandGeneration'));
const SalesDevelopment = React.lazy(() => import('./Componets/SalesDevelopment/SalesDevelopment'));
const SalesQualified = React.lazy(() => import('./Componets/SalesQualified/SalesQualified'));
const DatabaseService = React.lazy(() => import('./Componets/DatabaseService/DatabaseService'));
const ConfirmedCallback = React.lazy(() => import('./Componets/ConfirmedCallback/ConfirmedCallback'));
const AppointmentSetting = React.lazy(() => import('./Componets/AppointmentSetting/AppointmentSetting'));
const AccountBasemarketing = React.lazy(() => import('./Componets/AccountBasemarketing/AccountBasemarketing'));
const MarketingQualiLeads = React.lazy(() => import('./Componets/MarketingQualiLeads/MarketingQualiLeads'));
const ContentSyndication = React.lazy(() => import('./Componets/ContentSyndication/ContentSyndication'));
const B2BCustomelist = React.lazy(() => import('./Componets/B2BCustomelist/B2BCustomelist'));
const DatabaseCleaning = React.lazy(() => import('./Componets/DatabaseCleaning/DatabaseCleaning'));
const InstallDatabase = React.lazy(() => import('./Componets/InstallDatabase/InstallDatabase'));
const RdRoadMap = React.lazy(() => import('./Componets/RdRoadMap/RdRoadMap'));
const Gallary = React.lazy(() => import('./Componets/Gallery/Gallery'));
const CompanyProfile1 = React.lazy(() => import('./Componets/CompanyProfile1/CompanyProfile1'));
const Blog = React.lazy(() => import('./Componets/Blog/Blog'));
const JobDescription = React.lazy(() => import('./Componets/Careers/JobDescription/JobDescription'));
const Privacypolicy = React.lazy(()=>import('./Componets/Privacypolicy/Privacypolicy'));
const Termscondition = React.lazy(()=>import('./Componets/Termscondition/Termscondition'));
const Unsubscribe = React.lazy(()=>import('./Componets/Unsubscribe/Unsubscribe'));
const PageNotFound = React.lazy(()=>import('./Componets/PageNotFound/Pagenotfound'));
const Cookie = React.lazy(()=>import('./Componets/Cookie/Cookie'));
const Blogpage =React.lazy(()=>import('./Componets/Blogpage/Blogpage'));

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
              <Route path='/salesDevelopment' exact={true} component={SalesDevelopment}/>
              <Route path='/salesqualified' exact={true} component={SalesQualified}/>
              <Route path='/databaseservice' exact={true} component={DatabaseService}/>
              <Route path='/confirmedcallback' exact={true} component={ConfirmedCallback}/>
              <Route path='/appointmentsetting' exact={true} component={AppointmentSetting}/>
              <Route path='/accountbasemarketing' exact={true} component={AccountBasemarketing}/>
              <Route path='/marketingqualiLeads' exact={true} component={MarketingQualiLeads}/>
              <Route path='/contentsyndication' exact={true} component={ContentSyndication}/>
              <Route path='/b2bCustomelist' exact={true} component={B2BCustomelist}/>
              <Route path='/databasecleaning' exact={true} component={DatabaseCleaning}/>
              <Route path='/installdatabase' exact={true} component={InstallDatabase}/>
              <Route path='/rdRoadMap' exact={true} component={RdRoadMap}/> 
              <Route path='/gallary' exact={true} component={Gallary}/>
              <Route path='/companyprofile' exact={true} component={CompanyProfile1}/>
              <Route path='/blog' exact={true} component={Blog}/>
              <Route path='/jobdescription/:jobid' exact={true} component={JobDescription} />
              <Route path='/privacypolicy' exact={true} component={Privacypolicy}/>
              <Route path='/termscondition' exact={true} component={Termscondition}/>
              <Route path='/unsubscribe' exact={true} component={Unsubscribe}/>
              <Route path='/cookie' exact={true} componet={Cookie}/>
              <Route path="/blogpage/:id" exact={true} component={Blogpage}/>
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
