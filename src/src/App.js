import './App.css';
//import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Login from "./Login";
import Home from "./Home";
import Category from "./Category";
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Navbar2 from "./Navbar2";
import Record from "./Record";
import TreeStore from './TreeStore';
import Mybook from './Mybook';

import Signup from "./Signup";
import { AuthProvider } from './contexts/AuthContext';
import ProfileAbout from './Account/ProfileAbout';
import ProfileEdit from './Account/ProfileEdit';
import Books from "./books";

function App() {
  const path = window.location.pathname;

  return (
    <div>
      <Router>
        <AuthProvider>
          <Route exact path="/" exact component={Login} />
          {path !== '/' && path !== '/Signup' && path !== '/Login' &&
            <div>
              <Navbar />
            </div>
          }
          {path !== '/' && path !== '/Signup' && path !== '/Login' && path !== '/Home' && path !== '/Account' &&
            <div>
              <Navbar2 />
            </div>
          }
          <Switch>
            <PrivateRoute path="/Home" component={Home} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
            <PrivateRoute path="/Aboutus" component={Aboutus} />
            <PrivateRoute path="/Record" component={Record} />
            <PrivateRoute path="/TreeStore" component={TreeStore} />
            <PrivateRoute path="/MyBook" component={Mybook} />
            <PrivateRoute path="/ProfileAbout" component={ProfileAbout} />
            <PrivateRoute path="/ProfileEdit" component={ProfileEdit} />
            <PrivateRoute path="/Category-:category" component={Category} />
            <PrivateRoute path="/books-:id" component={Books} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App; 