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
import Book from './Book';


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
        <Route exact path="/Category/:category" component={Category} />
        <Route exact path="/Book/:id" component={Book} />
      </Switch>

    </div >
  );
}

export default App; 