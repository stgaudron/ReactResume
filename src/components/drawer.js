import React from 'react';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardSharpIcon from '@material-ui/icons/KeyboardSharp';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import GamesIcon from '@material-ui/icons/Games';
import portrait from "../assets/img/portrait.png";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: 500,
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
  media: {
    height: 0,
    width: '100%',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

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

        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
              <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" src={require("../assets/img/portrait.png")} className={classes.large}>
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Stéphane Gaudron"
                      subheader="21 mars 1974"
                    />
                    <img src={require("../assets/img/codesmall.jpg")} alt="code"/>


                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Junior Developer finishing Epitech Code & Go Program
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="contact" href="/drawer/Contact">
                      <ContactMailOutlinedIcon />
                      </IconButton>
                      <IconButton aria-label="resume" href="/drawer/Resume">
                      <DescriptionOutlinedIcon />
                      </IconButton>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>About me:</Typography>
                        <Typography paragraph>
                        Throughout my entire carreer, in every field I had to work on, I've always tried to cover the spectrum of proficiencies that I consider as requirements</Typography>
                        <Typography paragraph>
                          Though it would be vain to try achieve mastery in every programmation language, I see development as a way to achieve project completion, from conception to implementation
                        </Typography>
                        <Typography paragraph>
                          That is why I'm currently looking for an internship to go from beginner to junior developer on the way to fullstack developer and project manager.
                        </Typography>
                        <Typography>
                          There is still much to learn and that is so exiting as professional life is a journey not its end.
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
            </main>
    </div>
  );
}
