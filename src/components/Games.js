mport React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardSharpIcon from '@material-ui/icons/KeyboardSharp';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import GamesIcon from '@material-ui/icons/Games';
import { useHistory } from "react-router-dom";



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



export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Stéphane Gaudron - Developer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItemLink button key="About" href="/drawer">
              <ListItemIcon>
              <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemLink>

            <ListItemLink button key="Resume" href="/drawer/Resume">
              <ListItemIcon>
              <DescriptionOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Resume" />
              </ListItemLink>

              <ListItemLink button key="Github" href="/drawer/Github">
              <ListItemIcon>
              <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Github" />
              </ListItemLink>

            <ListItemLink button key="Skills" href="/drawer/Skills">
              <ListItemIcon>
              <KeyboardSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Skills" />
              </ListItemLink>

        </List>
        <Divider />
        <List>

        <ListItemLink button key="Contact" href="/drawer/Contact">
          <ListItemIcon>
          <ContactMailOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
          </ListItemLink>

        <ListItemLink button key="Games" href="/drawer/Games">
          <ListItemIcon>
          <GamesIcon />
          </ListItemIcon>
          <ListItemText primary="Games" />
          </ListItemLink>

        </List>
      </Drawer>
      <main className={classes.content}>
              <div className={classes.toolbar} />
              <Typography paragraph>
                2048
              </Typography>
              <Typography paragraph>
                Resume sous titre
              </Typography>
            </main>
    </div>
  );
}
