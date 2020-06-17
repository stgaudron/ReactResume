import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import MiniDrawer from './components/drawer';
import { makeStyles } from '@material-ui/core/styles';
import ContactInfo from './components/Contact';
import GitHub from './components/GitHub';
import Resume from './components/Resume';
import Skills from './components/Skills';



let homeimage = require('./home.jpg')
const drawerWidth = 240;



function App() {
  return (
    <Router>
        <Switch>
           <Route exact path="/drawer" component={MiniDrawer} />
           <Route exact path="/" component={Home} />
           <Route exact path="/drawer/Resume" component={Resume} />
           <Route exact path="/drawer/GitHub" component={GitHub} />
           <Route exact path="/drawer/Skills" component={Skills} />
           <Route exact path="/drawer/Contact" component={ContactInfo} />
        </Switch>
    </Router>
   );
 }

 function Home() {

   let history = useHistory();

   function handleClick() {
        history.push("/drawer");
     }
   return <img src={homeimage} alt="home" style={{height:'auto',width:'100%'}} onClick={handleClick} />;
 }

export default App;
