import './App.css';
import {Route, Link} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Category from "./Category";
import Navbar  from './Navbar';
import Aboutus from './Aboutus';
import Account from "./Profile";
import Navbar2 from "./Navbar2";
import Record from "./Record";
import TreeStore from './TreeStore';
import Mybook from './Mybook';
import Edit from "./EditProfile";

function App() {
  const path = window.location.pathname;

  return (
    <div>
      <Route exact path="/" exact component={Login} />
        {path !== '/' &&
          <div>
            <Navbar />
          </div>
        }
        {path !== '/' && path !=='/Home' &&  path !=='/Account' &&
          <div>
            <Navbar2 />
          </div>
        }
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Category" component={Category} />
    <Route exact path="/Aboutus" component={Aboutus} />
    <Route exact path="/Profile" component={Account} />
    <Route exact path="/Record" component={Record} />
    <Route exact path="/TreeStore" component={TreeStore} />
    <Route exact path="/MyBook" component={Mybook} />
    <Route exact path="/EditProfile" component={Edit} />

    </div>
  );
}

export default App;