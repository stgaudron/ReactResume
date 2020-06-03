import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import php from '../assets/img/php.svg';
import Flask_logo from '../assets/img/Flask_logo.svg';
import C from '../assets/img/C.svg';
import express from '../assets/img/express.svg';
import javaScript from '../assets/img/javaScript.svg';
import mongodb from '../assets/img/mongodb.svg';
import MySQL from '../assets/img/MySQL.svg';
import nodejs from '../assets/img/nodejs.svg';
import python from '../assets/img/python.svg';
import react1 from '../assets/img/react1.svg';
import react from '../assets/img/react.svg';
import symfony from '../assets/img/symfony.svg';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1000
  },
  gridList: {
    width: 1000,
    height: 500,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    cols: 4
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));



 const tileData = [
  {
    img: C,
    title: 'C',
    featured: false,
    rating: 2
  },
  {
    img: python,
    title: 'Python',
    featured: false,
    rating: 3
  },
  {
  img: Flask_logo,
  title: "Flask",
  featured: false,
  rating: 2
  },
  {
    img: javaScript,
    title: 'Javacript',
    featured: false,
    rating: 3
  },
  {
    img: mongodb,
    title: 'MongoDB',
    featured: false,
    rating: 4
  },
  {
    img: express,
    title: 'Express',
    featured: false,
    rating: 3
  },
  {
    img: react,
    title: 'React',
    featured: false,
    rating: 4
  },
  {
    img: nodejs,
    title: 'NodeJs',
    featured: false,
    rating: 4
  },
  {
    img: php,
    title: 'PHP',
    featured: false,
    rating: 2
  },
  {
    img: MySQL,
    title: 'mySQL',
    featured: false,
    rating: 3
  },

  {
    img: symfony,
    title: 'Symfony',
    featured: false,
    rating: 2
  },


  {
    img: react1,
    title: 'React Native',
    featured: false,
    rating: 3
  },

  ];

export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
    <h2>Development Skills{"\n"}</h2>

    <div className={classes.root}>
      <GridList cellHeight={150} cellWidth={250} spacing={3} className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} height={100} width={200}/>
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton  aria-label={tile.title} className={classes.icon}>

                <Rating name="size-small" size="small" defaultValue={tile.rating} precision={1} readOnly />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}
