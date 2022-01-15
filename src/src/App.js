import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Category from "./Category";
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Account from "./Profile";
import Navbar2 from "./Navbar2";
import Record from "./Record";
import TreeStore from './TreeStore';
import Mybook from './Mybook';
import Edit from "./EditProfile";
import ArtsMusic from "./categories/ArtsMusic";
import Biographies from "./categories/Biographies";
import Comics from "./categories/Comics";
import ComputersvsTech from "./categories/ComputersvsTech";
import Cooking from "./categories/Cooking";
import EduvsReference from "./categories/EduvsReference";
import Entertainment from "./categories/Entertainment";
import GayvsLesbian from "./categories/GayvsLesbian";
import Health from "./categories/Health";
import Horror from "./categories/Horror";
import Kids from "./categories/Kids";
import LiteraturevsFiction from "./categories/LiteraturevsFiction";
import Mysteries from "./categories/Mysteries";
import Others from "./categories/Others";
import Religion from "./categories/Religion";
import Romance from "./categories/Romance";
import SciFivsFantasy from "./categories/Sci-FivsFantasy";
import SciencevsMath from "./categories/SciencevsMath";
import Sports from "./categories/Sports";
import Teenfic from "./categories/Teenfic";
import TrueCrime from "./categories/TrueCrime";

import Lalala from "./lalala"


function App() {
  const path = window.location.pathname;

  return (
    <div>
      {/* {path !== '/' &&
        <div>
          <Navbar />
        </div>
      }
      {path !== '/' && path !== '/Home' && path !== '/Account' &&
        <div>
          <Navbar2 />
        </div>
      } */}
      <Switch>
        <Route exact path="/" exact component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Category">
          <Category />
        </Route>
        <Route exact path="/Aboutus" component={Aboutus} />
        <Route exact path="/Profile" component={Account} />
        <Route exact path="/Record" component={Record} />
        <Route exact path="/TreeStore" component={TreeStore} />
        <Route exact path="/MyBook" component={Mybook} />
        <Route exact path="/EditProfile" component={Edit} />
        <Route exact path="/CategoryArtsvsMusic" component={ArtsMusic} />
        <Route exact path="/CategoryBiographies" component={Biographies} />
        <Route exact path="/CategoryComics" component={Comics} />
        <Route exact path="/CategoryComputersvsTech" component={ComputersvsTech} />
        <Route exact path="/CategoryCooking" component={Cooking} />
        <Route exact path="/CategoryEduvsReference" component={EduvsReference} />
        <Route exact path="/CategoryEntertainment" component={Entertainment} />
        <Route exact path="/CategoryGayvsLesbian" component={GayvsLesbian} />
        <Route exact path="/CategoryHealth" component={Health} />
        <Route exact path="/CategoryHorror" component={Horror} />
        <Route exact path="/CategoryKids" component={Kids} />
        <Route exact path="/CategoryLiteraturevsFiction" component={LiteraturevsFiction} />
        <Route exact path="/CategoryMysteries" component={Mysteries} />
        <Route exact path="/CategoryOthers" component={Others} />
        <Route exact path="/CategoryReligion" component={Religion} />
        <Route exact path="/CategoryRomance" component={Romance} />
        <Route exact path="/CategorySci-FivsFantasy" component={SciFivsFantasy} />
        <Route exact path="/CategorySciencevsMath" component={SciencevsMath} />
        <Route exact path="/CategorySports" component={Sports} />
        <Route exact path="/CategoryTeenfic" component={Teenfic} />
        <Route exact path="/CategoryTrueCrime" component={TrueCrime} />
        <Route exact path="/lalala/:id" component={Lalala} />
      </Switch>

    </div >
  );
}

export default App; 