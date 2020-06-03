import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import MiniDrawer from './components/drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Games from './components/Games';
import ContactInfo from './components/Contact';
import GitHub from './components/GitHub';
import Resume from './components/Resume';
import Skills from './components/Skills';



let homeimage = require('./home.jpg')
const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


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
