import './App.css';
import {Route, Link} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Category from "./Category";
import Navbar  from './Navbar';
import Aboutus from './Aboutus';
import Navbar2 from "./Navbar2";
import Record from "./Record";
import TreeStore from './TreeStore';
import Mybook from './Mybook';
import Signup from "./Signup";
import { AuthProvider } from './contexts/AuthContext';
import ProfileAbout from './Account/ProfileAbout';
import ProfileEdit from './Account/ProfileEdit';

function App() {
  const path = window.location.pathname;

  return ( 
    <div>
      <AuthProvider>
        <Route exact path="/" exact component={Login} />
        {path !== '/' && path !== '/Signup' && path !== '/Login' &&
            <div>
              <Navbar />
            </div>
          }
          {path !== '/' && path !== '/Signup' && path !== '/Login' && path !=='/Home' &&  path !=='/Account' &&
            <div>
              <Navbar2 />
            </div>
          }
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Category" component={Category} />
        <Route exact path="/Aboutus" component={Aboutus} />
        <Route exact path="/Record" component={Record} />
        <Route exact path="/TreeStore" component={TreeStore} />
        <Route exact path="/MyBook" component={Mybook} />
        <Route exact path="/ProfileAbout" component={ProfileAbout} />
        <Route exact path="/ProfileEdit" component={ProfileEdit} />
      </AuthProvider>
    </div>
    
  );
}

export default App;